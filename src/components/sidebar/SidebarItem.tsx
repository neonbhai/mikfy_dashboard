"use client";

import React from "react";
import Link from "next/link";

type SidebarItemProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  trailing?: React.ReactNode;
  active?: boolean;
};

export default function SidebarItem({
  href,
  label,
  icon,
  trailing,
  active,
}: SidebarItemProps) {
  console.log("[SidebarItem] render", { href, label, active });
  return (
    <Link
      href={href}
      className={[
        "flex items-center gap-2 rounded-[10px] px-4 py-4",
        active ? "bg-white/10 text-white" : "hover:bg-white/5 text-white/80",
      ].join(" ")}
    >
      <span className="size-6 text-white">{icon}</span>
      <span className="text-sm font-normal flex-1 truncate">{label}</span>
      {trailing ? <span className="text-white/60">{trailing}</span> : null}
    </Link>
  );
}
