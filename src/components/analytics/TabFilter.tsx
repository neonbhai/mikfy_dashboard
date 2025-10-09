"use client";

import { useEffect, useRef, useState } from "react";

interface TabFilterProps<T extends string> {
  options: readonly T[];
  activeTab: T;
  onTabChange: (tab: T) => void;
}

export default function TabFilter<T extends string>({
  options,
  activeTab,
  onTabChange,
}: TabFilterProps<T>) {
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [direction, setDirection] = useState<"left" | "right">("right");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const prevLeftRef = useRef(0);

  useEffect(() => {
    const activeIndex = options.indexOf(activeTab);
    const activeRef = tabRefs.current[activeIndex];
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (activeRef && containerRect) {
      const buttonRect = activeRef.getBoundingClientRect();
      const left = buttonRect.left - containerRect.left;
      const width = buttonRect.width;

      // Determine direction based on indicator movement
      if (left > prevLeftRef.current) {
        setDirection("right");
      } else if (left < prevLeftRef.current) {
        setDirection("left");
      }

      prevLeftRef.current = left;
      setIndicatorStyle({ left, width });
    }
  }, [activeTab, options]);

  return (
    <div
      className="bg-[#F8F8FF] rounded-[10px] p-[6px] relative"
      ref={containerRef}
    >
      {/* Animated sliding indicator */}
      <div
        className="absolute top-[6px] bottom-[6px] bg-[#1E1B39] rounded-[10px] transition-all duration-300 ease-in-out"
        style={{
          left: `${indicatorStyle.left}px`,
          width: `${indicatorStyle.width}px`,
          transform: direction === "right" ? "scaleX(1)" : "scaleX(1)",
          transformOrigin: direction === "right" ? "left" : "right",
        }}
      />

      <div className="flex gap-3 relative">
        {options.map((option, index) => (
          <button
            key={option}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            onClick={() => onTabChange(option)}
            className={`px-4 py-2.5 text-sm uppercase tracking-[0.06em] transition-colors duration-300 relative z-10 ${
              activeTab === option ? "text-white" : "text-[#9291A5]"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
