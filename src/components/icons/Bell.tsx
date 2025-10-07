"use client";

import React from "react";
import { IconBase, IconProps } from "./IconBase";

export default function BellIcon({
  className,
  size = 24,
  title = "Notifications",
}: IconProps) {
  console.log("[BellIcon] render", { size, className });
  return (
    <IconBase className={className} size={size} title={title}>
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </IconBase>
  );
}
