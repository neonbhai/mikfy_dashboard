"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type MikfyLogoProps = {
  className?: string;
  title?: string;
  isCollapsed?: boolean;
};

export default function MikfyLogo({
  className,
  title = "Mikfy",
  isCollapsed = false,
}: MikfyLogoProps) {
  if (isCollapsed) {
    return (
      <Link
        href="/overview"
        className={`flex justify-center ${className || ""}`}
        aria-label={title}
      >
        <Image
          src="/icon.svg"
          alt={title}
          width={30}
          height={30}
          priority
          className="cursor-pointer transition-opacity hover:opacity-80"
        />
      </Link>
    );
  }

  return (
    <Link
      href="/overview"
      className={`block ${className || ""}`}
      aria-label={title}
    >
      <Image
        src="/brand/mikfy-logo.svg"
        alt={title}
        width={107}
        height={47}
        priority
        className="cursor-pointer transition-opacity hover:opacity-80"
      />
    </Link>
  );
}
