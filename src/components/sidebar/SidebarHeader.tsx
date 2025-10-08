"use client";

import React from "react";
import { MikfyLogo } from "../brand";
import BizSwitcher from "./BizSwitcher";

type SidebarHeaderProps = {
  onModeChange?: (mode: "b2b" | "b2c") => void;
};

export default function SidebarHeader({ onModeChange }: SidebarHeaderProps) {
  return (
    <div className="px-5 pt-9 pb-4 space-y-4">
      <MikfyLogo />
      <BizSwitcher onChange={onModeChange} />
    </div>
  );
}
