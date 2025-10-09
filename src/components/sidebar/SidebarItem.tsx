"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarItemProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  trailing?: React.ReactNode;
  isCollapsed?: boolean;
};

export default function SidebarItem({
  href,
  label,
  icon,
  trailing,
  isCollapsed = false,
}: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (isCollapsed) {
    return (
      <Link
        href={href}
        className={[
          "flex items-center justify-center rounded-[10px] p-3 transition-all duration-300",
          isActive ? "bg-white text-black" : "hover:bg-white/5 text-white/80",
        ].join(" ")}
        aria-label={label}
        title={label}
      >
        <span className={`size-6 ${isActive ? "text-black" : "text-white"}`}>
          {icon}
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={[
        "flex items-center gap-2 rounded-[10px] px-4 py-4 transition-all duration-100",
        isActive ? "bg-white text-black" : "hover:bg-white/5 text-white/80",
      ].join(" ")}
    >
      <span
        className={`transition-all duration-100 size-6 ${
          isActive ? "text-black" : "text-white"
        }`}
      >
        {icon}
      </span>
      <span className="text-sm font-normal flex-1 truncate">{label}</span>
      {trailing ? <span className="text-white/60">{trailing}</span> : null}
    </Link>
  );
}
