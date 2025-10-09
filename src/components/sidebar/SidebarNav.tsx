"use client";

import React from "react";
import SidebarItem from "./SidebarItem";
import {
  HomeIcon,
  BrainIcon,
  BellIcon,
  InboxIcon,
  GraphIcon,
  CheckIcon,
} from "../icons";

type SidebarNavProps = {
  isCollapsed?: boolean;
};

export default function SidebarNav({ isCollapsed = false }: SidebarNavProps) {
  return (
    <nav
      className={`py-6 space-y-5 transition-all duration-300 flex-1 overflow-y-auto ${
        isCollapsed ? "px-3" : "px-5"
      }`}
    >
      <div className="space-y-2">
        <SidebarItem
          href="/overview"
          label="Overview"
          icon={<HomeIcon />}
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          href="/analytics"
          label="Analytics"
          icon={<BrainIcon />}
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          href="/orders"
          label="Orders & Fullfillment"
          icon={<BellIcon />}
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          href="/inventory"
          label="Inventory Management"
          icon={<InboxIcon />}
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          href="/reports"
          label="Financial Reports"
          icon={<GraphIcon />}
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          href="/settings"
          label="Settings"
          icon={<CheckIcon />}
          isCollapsed={isCollapsed}
        />
      </div>
    </nav>
  );
}
