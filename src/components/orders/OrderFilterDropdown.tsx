"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@/components/icons";
import { OrderStatus } from "./OrderListCard";

interface OrderFilterDropdownProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export const filterOptions: Array<{ label: string; value: string }> = [
  { label: "All orders", value: "all" },
  { label: "Delivered", value: "Delivered" },
  { label: "Processing", value: "Processing" },
  { label: "Pending", value: "Pending" },
  { label: "Cancelled", value: "Cancelled" },
];

export default function OrderFilterDropdown({
  selectedFilter,
  onFilterChange,
}: OrderFilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: string, label: string) => {
    onFilterChange(label);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={handleToggle}
        className="h-full bg-[#151515] rounded-[10px] px-4 py-3 flex items-center gap-2 hover:bg-[#2a2a2a] transition-colors"
      >
        <span className="text-white text-[16px] font-normal leading-[1em] font-geist whitespace-nowrap">
          {selectedFilter}
        </span>
        <ChevronDownIcon
          className={`w-4 h-4 text-white transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[calc(100%+8px)] right-0 bg-white border border-[rgba(21,21,21,0.1)] rounded-[10px] shadow-lg w-full z-50 py-2">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value, option.label)}
              className={`w-full px-4 py-2.5 text-left text-[14px] font-normal font-geist hover:bg-[#F5F5F5] transition-colors ${
                selectedFilter === option.label
                  ? "bg-[#F5F5F5] text-[#151515] font-medium"
                  : "text-[#151515]"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
