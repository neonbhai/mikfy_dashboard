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

          {/* Change Indicator - Only show if change is provided */}
          {change && (
            <div className="flex items-center gap-1.5">
              {isPositive ? (
                <TrendUp width={14} height={10} />
              ) : (
                <TrendDown width={14} height={10} />
              )}
              <span
                className="text-[16px] font-normal leading-[1em]"
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
