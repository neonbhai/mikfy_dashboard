"use client";

import React from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";

export default function Sidebar() {
  const { isCollapsed } = useSidebar();

  return (
    <aside
      className={`bg-[#1D222E] text-white h-full flex flex-col transition-all duration-300 ease-in-out overflow-hidden ${
        isCollapsed ? "w-[80px]" : "w-[276px]"
      }`}
    >
      <SidebarHeader isCollapsed={isCollapsed} />
      <div className="h-px w-full bg-white/50" />
      <SidebarNav isCollapsed={isCollapsed} />
    </aside>
  );
}
