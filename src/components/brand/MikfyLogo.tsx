"use client";

import React from "react";
import Image from "next/image";

type MikfyLogoProps = {
  className?: string;
  title?: string;
};

export default function MikfyLogo({
  className,
  title = "Mikfy",
}: MikfyLogoProps) {
  console.log("[MikfyLogo] render", { className });
  return (
    <div className={className} aria-label={title} role="img">
      <Image
        src="/brand/mikfy-logo.svg"
        alt={title}
        width={107}
        height={47}
        priority
      />
    </div>
  );
}
