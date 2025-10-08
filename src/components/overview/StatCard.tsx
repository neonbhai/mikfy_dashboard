interface StatCardProps {
  title: string;
  value: string;
  change: string;
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
      className="rounded-[10px] p-7 flex flex-col justify-center gap-2.5 h-[169px]"
      style={{ backgroundColor }}
    >
      <div className="flex flex-col gap-10">
        {/* Title */}
        <div className="flex items-center gap-1.5">
          <span className="text-[20px] font-medium leading-[1em] text-black">
            {title}
          </span>
        </div>

        {/* Value and Change */}
        <div className="flex flex-col gap-[7px]">
          <span className="text-[32px] font-normal leading-[1em] text-black">
            {value}
          </span>

          {/* Change Indicator */}
          <div className="flex items-center gap-1.5">
            <svg
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: isPositive ? "none" : "rotate(180deg)",
              }}
            >
              <path
                d="M7 0L13.9282 9H0.0717969L7 0Z"
                fill={isPositive ? "#00961B" : "#FF3B30"}
              />
            </svg>
            <span
              className="text-[16px] font-normal leading-[1em]"
              style={{ color: isPositive ? "#00961B" : "#FF3B30" }}
            >
              {change}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
