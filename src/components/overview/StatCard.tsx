"use client";
import { TrendUp, TrendDown } from "../icons";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  backgroundColor?: string;
}

export function StatCard({
  title,
  value,
  change,
  isPositive = true,
  backgroundColor = "#E4F5FF",
}: StatCardProps) {
  return (
    <div
      className="rounded-[10px] cursor-default p-4 sm:p-5  xl:p-7 flex flex-col justify-center gap-2 sm:gap-2.5 min-h-[140px] sm:min-h-[155px] md:min-h-[169px] overflow-hidden transition-all duration-300"
      style={{
        backgroundColor,
        boxShadow: `0 0 0 ${backgroundColor}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 30px ${backgroundColor}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 0 ${backgroundColor}`;
      }}
    >
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
        {/* Title */}
        <div className="flex items-center gap-1.5">
          <span className="text-base sm:text-lg md:text-[20px] font-medium leading-[1em] text-black">
            {title}
          </span>
        </div>

        {/* Value and Change */}
        <div className="flex flex-col gap-[7px]">
          <span className="text-2xl sm:text-[28px] md:text-[32px] font-normal leading-[1em] text-black">
            {value}
          </span>

          {/* Change Indicator - Only show if change is provided */}
          {change && (
            <div className="flex items-center gap-1.5">
              {isPositive ? (
                <TrendUp width={14} height={10} />
              ) : (
                <TrendDown width={14} height={10} />
              )}
              <span
                className="text-sm sm:text-[15px] md:text-[16px] font-normal leading-[1em]"
                style={{ color: isPositive ? "#00961B" : "#960000" }}
              >
                {change}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
