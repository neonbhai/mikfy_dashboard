"use client";

import { useEffect, useRef, useState } from "react";
import { TabOption } from "./chartData";
import GrowthIndicator from "./GrowthIndicator";

interface ChartHeaderProps {
  totalSales: number;
  activeTab: TabOption;
  onTabChange: (tab: TabOption) => void;
  year?: string;
  growthPercentage?: number;
}

// Move tabs constant outside component to prevent recreation on every render
const TABS: TabOption[] = ["Daily", "Weekly", "Annually"];

export default function ChartHeader({
  totalSales,
  activeTab,
  onTabChange,
  year = "2025",
  growthPercentage = 1.3,
}: ChartHeaderProps) {
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [direction, setDirection] = useState<"left" | "right">("right");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeIndex = TABS.indexOf(activeTab);
    const activeRef = tabRefs.current[activeIndex];
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (activeRef && containerRect) {
      const buttonRect = activeRef.getBoundingClientRect();
      const left = buttonRect.left - containerRect.left;
      const width = buttonRect.width;

      // Only update if position or width has changed
      if (left !== indicatorStyle.left || width !== indicatorStyle.width) {
        // Determine direction based on indicator movement
        if (left > indicatorStyle.left) {
          setDirection("right");
        } else if (left < indicatorStyle.left) {
          setDirection("left");
        }

        setIndicatorStyle({ left, width });
      }
    }
  }, [activeTab, indicatorStyle.left, indicatorStyle.width]);

  return (
    <div className="flex justify-between items-start mb-8">
      {/* Card Info */}
      <div>
        <p className="text-[#9291A5] text-lg">Sales {year}</p>
        <h2 className="text-[#1D222E] text-[32px] font-bold mt-1">
          ${(totalSales / 1000).toFixed(1)}k
        </h2>
        <div className="mt-4">
          <GrowthIndicator percentage={growthPercentage} isPositive />
        </div>
      </div>

      {/* Tab Filters with sliding indicator */}
      <div
        className="bg-[#F8F8FF] rounded-[14.77px] p-1.5 relative"
        ref={containerRef}
      >
        {/* Animated sliding indicator */}
        <div
          className="absolute top-[6px] bottom-[6px] bg-[#1D222E] rounded-[13px] transition-all duration-300 ease-in-out"
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
            transform: direction === "right" ? "scaleX(1)" : "scaleX(1)",
            transformOrigin: direction === "right" ? "left" : "right",
          }}
        />

        <div className="flex gap-1 relative">
          {TABS.map((tab, index) => (
            <button
              key={tab}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              onClick={() => onTabChange(tab)}
              className={`px-4 py-2.5 rounded-[13px] text-sm font-medium transition-colors duration-300 relative z-10 ${
                activeTab === tab
                  ? "text-white"
                  : "text-[#9291A5] hover:text-[#1D222E]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
