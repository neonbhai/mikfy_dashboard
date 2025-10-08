interface GrowthIndicatorProps {
  percentage: number;
  isPositive?: boolean;
}

export default function GrowthIndicator({
  percentage,
  isPositive = true,
}: GrowthIndicatorProps) {
  const color = isPositive ? "#04CE00" : "#FF0000";
  const rotation = isPositive ? "" : "rotate-180";

  return (
    <div className="flex items-center gap-2">
      <svg
        width="12"
        height="11"
        viewBox="0 0 12 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={rotation}
      >
        <path d="M6 0L11.1962 10.5H0.803848L6 0Z" fill={color} />
      </svg>
      <span className="text-sm font-bold" style={{ color }}>
        {percentage}%
      </span>
      <span className="text-[#9291A5] text-sm uppercase tracking-wider">
        VS LAST YEAR
      </span>
    </div>
  );
}
