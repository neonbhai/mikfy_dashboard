"use client";

import React from "react";
import { IconBase, IconProps } from "./IconBase";

export default function CheckIcon({
  className,
  size = 24,
  title = "Settings",
}: IconProps) {
  console.log("[CheckIcon] render", { size, className });
  return (
    <IconBase className={className} size={size} title={title}>
      <path
        d="M14.375 3.125H3.125V18.875H18.875V13.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.625 10.625L11.375 14.375L20.375 4.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}
