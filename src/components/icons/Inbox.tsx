"use client";

import React from "react";
import { IconBase, IconProps } from "./IconBase";

export default function InboxIcon({
  className,
  size = 24,
  title = "Inventory",
}: IconProps) {
  console.log("[InboxIcon] render", { size, className });
  return (
    <IconBase className={className} size={size} title={title}>
      <path
        d="M3.30398 6.132C3.50148 5.24358 3.99603 4.44907 4.706 3.87965C5.41596 3.31022 6.29888 2.99993 7.20898 3H16.791C17.7011 2.99993 18.584 3.31022 19.294 3.87965C20.0039 4.44907 20.4985 5.24358 20.696 6.132L20.843 6.794C21.6049 10.2229 21.6049 13.7771 20.843 17.206L20.696 17.868C20.4985 18.7564 20.0039 19.5509 19.294 20.1204C18.584 20.6898 17.7011 21.0001 16.791 21H7.20998C6.29988 21.0001 5.41696 20.6898 4.707 20.1204C3.99703 19.5509 3.50248 18.7564 3.30498 17.868L3.15798 17.206C2.39607 13.7771 2.39607 10.2229 3.15798 6.794L3.30398 6.132Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 13H8.838C8.838 14 9.811 16 12.243 16C14.675 16 15.649 14 15.649 13H21.5"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}
