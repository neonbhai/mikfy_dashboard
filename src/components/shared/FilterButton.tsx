"use client";

import { useState, useRef, useEffect } from "react";
import { FilterIcon } from "@/components/icons";

export default function FilterButton() {
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const filterDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        filterDropdownRef.current &&
        !filterDropdownRef.current.contains(event.target as Node)
      ) {
        setShowFilterDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={filterDropdownRef}>
      <button
        className="w-[30px] cursor-pointer h-[30px] flex items-center justify-center hover:opacity-80 transition-opacity"
        onClick={() => {
          setShowFilterDropdown(!showFilterDropdown);
        }}
        aria-label="Filter"
      >
        <FilterIcon size={30} />
      </button>

      {showFilterDropdown && (
        <div className="absolute right-0 top-[42px] w-[200px] bg-white rounded-[15px] border-[0.5px] border-[rgba(21,21,21,0.1)] shadow-[0_4px_20px_rgba(0,0,0,0.08)] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-5">
            <p className="text-[16px] font-normal leading-[1.4] text-[#403d3de0] cursor-default text-center">
              Connect Shopify
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
