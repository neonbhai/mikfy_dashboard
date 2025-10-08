"use client";

import TabFilter from "./TabFilter";

interface AnalyticsCardHeaderProps<T extends string> {
  eyebrow?: string;
  title: string;
  options: readonly T[];
  activeTab: T;
  onTabChange: (tab: T) => void;
  className?: string;
}

export default function AnalyticsCardHeader<T extends string>({
  eyebrow = "Statistics",
  title,
  options,
  activeTab,
  onTabChange,
  className,
}: AnalyticsCardHeaderProps<T>) {
  return (
    <div className={className}>
      <div className="flex items-start justify-between">
        <div>
          {eyebrow ? (
            <p className="text-[#615E83] text-lg mb-1">{eyebrow}</p>
          ) : null}
          <h3 className="text-[#1E1B39] text-[22px] font-bold leading-tight">
            {title}
          </h3>
        </div>
        <TabFilter
          options={options}
          activeTab={activeTab}
          onTabChange={onTabChange}
        />
      </div>
      <div className="w-full h-[1px] bg-[#E5E5EF] mt-6" />
    </div>
  );
}

