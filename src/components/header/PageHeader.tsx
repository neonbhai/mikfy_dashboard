"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BellIcon, SettingsIcon } from "@/components/icons";
import SearchBar from "./SearchBar";

export default function PageHeader() {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showBellDropdown, setShowBellDropdown] = useState(false);
  const userDropdownRef = useRef<HTMLDivElement>(null);
  const bellDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target as Node)
      ) {
        setShowUserDropdown(false);
      }
      if (
        bellDropdownRef.current &&
        !bellDropdownRef.current.contains(event.target as Node)
      ) {
        setShowBellDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="px-4 py-4">
      <div className="flex items-center justify-between gap-4">
        {/* Left section: Toggle and Search */}
        <div className="flex items-center gap-10">
          {/* Sidebar Toggle */}
          <button
            className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Toggle sidebar"
          >
            <Image
              src="/icons/sidebar-toggle.svg"
              alt="Toggle sidebar"
              width={30}
              height={30}
            />
          </button>

          {/* Search Bar */}
          <SearchBar />
        </div>

        {/* Right section: Bell, Settings, UserAccount */}
        <div className="flex items-center gap-4">
          {/* Bell Button with Dropdown */}
          <div className="relative" ref={bellDropdownRef}>
            <button
              className={`w-10 h-10 flex items-center justify-center hover:opacity-80 transition-all ${
                showBellDropdown ? "opacity-80" : ""
              }`}
              aria-label="Notifications"
              onClick={() => {
                setShowBellDropdown(!showBellDropdown);
              }}
            >
              <BellIcon size={24} />
            </button>

            {showBellDropdown && (
              <div className="absolute right-0 top-[52px] w-[280px] bg-white rounded-[15px] border-[0.5px] border-[rgba(21,21,21,0.1)] shadow-[0_4px_20px_rgba(0,0,0,0.08)] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="p-5">
                  <h3 className="text-[18px] font-normal leading-[1em] text-[#151515] mb-4">
                    Notifications
                  </h3>
                  <div className="flex flex-col items-center justify-center py-8">
                    <div className="w-12 h-12 rounded-full bg-[#F3F3EE] flex items-center justify-center mb-3">
                      <BellIcon size={24} />
                    </div>
                    <p className="text-[14px] font-normal leading-[1.4] text-[#737373] text-center">
                      No urgent notifications
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Settings Button */}
          <Link href="/settings">
            <button
              className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Settings"
            >
              <SettingsIcon size={24} />
            </button>
          </Link>

          {/* User Account Avatar with Dropdown */}
          <div className="relative" ref={userDropdownRef}>
            <button
              className={`w-10 h-10 flex items-center justify-center hover:opacity-80 transition-all ${
                showUserDropdown
                  ? "ring-2 ring-[#151515]/20 ring-offset-2 rounded-full"
                  : ""
              }`}
              aria-label="User account"
              onClick={() => {
                setShowUserDropdown(!showUserDropdown);
              }}
            >
              <Image
                src="/avatars/avatar-default.png"
                alt="User avatar"
                width={30}
                height={30}
                className="rounded-full object-cover"
              />
            </button>

            {showUserDropdown && (
              <div className="absolute right-0 top-[52px] w-[280px] bg-white rounded-[15px] border-[0.5px] border-[rgba(21,21,21,0.1)] shadow-[0_4px_20px_rgba(0,0,0,0.08)] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#F3F3EE]">
                    <Image
                      src="/avatars/avatar-default.png"
                      alt="User avatar"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="text-[16px] font-normal leading-[1.2] text-[#151515]">
                        User Account
                      </span>
                      <span className="text-[12px] font-light leading-[1.3] text-[#737373]">
                        Sample profile
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center py-6">
                    <p className="text-[14px] font-normal leading-[1.4] text-[#737373] text-center">
                      User Specific Settings will go here
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
