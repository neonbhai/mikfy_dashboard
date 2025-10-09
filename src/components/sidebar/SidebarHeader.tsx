"use client";

import React from "react";
import { MikfyLogo } from "../brand";
import BizSwitcher from "./BizSwitcher";

type SidebarHeaderProps = {
  onModeChange?: (mode: "b2b" | "b2c") => void;
  isCollapsed?: boolean;
};

export default function SidebarHeader({
  onModeChange,
  isCollapsed = false,
}: SidebarHeaderProps) {
  return (
    <div
      className={`h-[180px] pt-9 pb-4 flex items-center transition-all duration-300 ${
        isCollapsed ? "px-3" : "px-5"
      }`}
    >
      <div className={`w-full ${isCollapsed ? "space-y-8" : "space-y-4"}`}>
        <MikfyLogo isCollapsed={isCollapsed} />
        <BizSwitcher onChange={onModeChange} isCollapsed={isCollapsed} />
      </div>
    </div>
  );
}
