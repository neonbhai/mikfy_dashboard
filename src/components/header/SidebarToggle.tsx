"use client";

import React from "react";
import Image from "next/image";
import { useSidebar } from "@/contexts/SidebarContext";

export default function SidebarToggle() {
  const { toggleSidebar, isCollapsed } = useSidebar();

  const handleClick = () => {
    console.log("SidebarToggle clicked");
    toggleSidebar();
  };

  return (
    <button
      className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
      aria-label="Toggle sidebar"
      onClick={handleClick}
    >
      <Image
        src="/icons/sidebar-toggle.svg"
        alt="Toggle sidebar"
        width={30}
        height={30}
        className={`transition-transform duration-300 ${
          isCollapsed ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}
