export interface TrendIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export function TrendUp({
  className,
  width = 14,
  height = 10,
}: TrendIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9 0.5V1.5H12.293L8 5.793L5.8535 3.6465C5.75974 3.55276 5.63258 3.50011 5.5 3.50011C5.36742 3.50011 5.24026 3.55276 5.1465 3.6465L0 8.793L0.707 9.5L5.5 4.707L7.6465 6.8535C7.74026 6.94724 7.86742 6.99989 8 6.99989C8.13258 6.99989 8.25974 6.94724 8.3535 6.8535L13 2.207V5.5H14V0.5H9Z"
        fill="#00961B"
      />
    </svg>
  );
}
