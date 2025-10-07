"use client";

import React from "react";
import Image from "next/image";

export type IconProps = {
  className?: string;
  size?: number;
  title?: string;
};

export default function GraphIcon({
  className,
  size = 24,
  title = "Reports",
}: IconProps) {
  console.log("[GraphIcon] render", { size, className });
  return (
    <Image
      src="/icons/graph.png"
      alt={title || "Graph"}
      width={size}
      height={size}
      className={className}
    />
  );
}
