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

export default function SidebarNav() {
  console.log("[SidebarNav] render");
  return (
    <nav className="px-5 py-6 space-y-5">
      <div className="space-y-2">
        <SidebarItem
          href="/overview"
          label="Overview"
          icon={<HomeIcon />}
          active
        />
        <SidebarItem href="/analytics" label="Analytics" icon={<BrainIcon />} />
        <SidebarItem
          href="/orders"
          label="Order & Fullfillment"
          icon={<BellIcon />}
        />
        <SidebarItem
          href="/inventory"
          label="Inventory Management"
          icon={<InboxIcon />}
        />
        <SidebarItem
          href="/reports"
          label="Financial Reports"
          icon={<GraphIcon />}
        />
        <SidebarItem href="/settings" label="Settings" icon={<CheckIcon />} />
      </div>
    </nav>
  );
}
