"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarItemProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  trailing?: React.ReactNode;
};

export default function SidebarItem({
  href,
  label,
  icon,
  trailing,
}: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={[
        "flex items-center gap-2 rounded-[10px] px-4 py-4",
        isActive ? "bg-white text-black" : "hover:bg-white/5 text-white/80",
      ].join(" ")}
    >
      <span className={`size-6 ${isActive ? "text-black" : "text-white"}`}>
        {icon}
      </span>
      <span className="text-sm font-normal flex-1 truncate">{label}</span>
      {trailing ? <span className="text-white/60">{trailing}</span> : null}
    </Link>
  );
}
