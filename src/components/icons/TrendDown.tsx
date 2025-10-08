export interface TrendIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export function TrendDown({
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
        d="M9 9.5V8.5H12.293L8 4.207L5.8535 6.3535C5.75974 6.44724 5.63258 6.49989 5.5 6.49989C5.36742 6.49989 5.24026 6.44724 5.1465 6.3535L0 1.207L0.707 0.5L5.5 5.293L7.6465 3.1465C7.74026 3.05276 7.86742 3.00011 8 3.00011C8.13258 3.00011 8.25974 3.05276 8.3535 3.1465L13 7.793V4.5H14V9.5H9Z"
        fill="#960000"
      />
    </svg>
  );
}
