"use client";

import React from "react";
import Image from "next/image";
import { BellIcon, SettingsIcon } from "@/components/icons";

export default function PageHeader() {
  console.log("[PageHeader] render");

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
          <div className="relative flex items-center gap-2 px-4 py-3 border border-[#1E1E1E]/10 rounded-full w-[488px] h-[40px]">
            <Image
              src="/icons/search-icon.svg"
              alt="Search"
              width={16}
              height={16}
            />
            <input
              type="text"
              placeholder="Search for products, analytics etc..."
              className="flex-1 bg-transparent outline-none text-base text-[#737373] placeholder:text-[#737373] font-normal"
            />
          </div>
        </div>

        {/* Right section: Bell, Settings, UserAccount */}
        <div className="flex items-center gap-4">
          {/* Bell Button */}
          <button
            className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Notifications"
          >
            <BellIcon size={24} />
          </button>

          {/* Settings Button */}
          <button
            className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Settings"
          >
            <SettingsIcon size={24} />
          </button>

          {/* User Account Avatar */}
          <button
            className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="User account"
          >
            <Image
              src="/avatars/avatar-default.png"
              alt="User avatar"
              width={30}
              height={30}
              className="rounded-full object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
