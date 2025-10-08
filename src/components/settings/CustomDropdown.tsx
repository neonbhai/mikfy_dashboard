"use client";

import { useState, useRef, useEffect } from "react";

interface CustomDropdownProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
  label: string;
}

export function CustomDropdown({
  value,
  options,
  onChange,
  label,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  }, [isOpen, value, label]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, label]);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-[15px]">
      <label className="block text-black text-base leading-[1.3] font-normal opacity-80">
        {label}
      </label>
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="w-full px-5 py-3.5 h-[52px] bg-[#ECECEC] rounded-lg text-[#1D222E] text-base leading-[1.3] font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center justify-between cursor-pointer hover:bg-[#e0e0e0]"
        >
          <span>{value}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="#1D222E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute z-50 w-full mt-2 bg-[#ECECEC] rounded-lg shadow-lg border border-gray-300 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className={`w-full px-5 py-3 text-left text-base leading-[1.3] font-normal transition-colors ${
                  value === option
                    ? "bg-[#1D222E] text-white"
                    : "bg-[#ECECEC] text-[#1D222E] hover:bg-[#e0e0e0]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
