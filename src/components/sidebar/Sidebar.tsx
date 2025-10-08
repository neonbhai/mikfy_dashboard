"use client";

import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";

export default function Sidebar() {
  return (
    <aside className="bg-[#1D222E] text-white w-[276px] min-h-screen flex flex-col">
      <SidebarHeader />
      <div className="h-px w-full bg-white/50" />
      <SidebarNav />
    </aside>
  );
}
