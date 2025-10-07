import React from "react";
import { IconProps } from "./IconBase";

const Filter: React.FC<IconProps> = ({ className, size = 30, title }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : "presentation"}
      aria-label={title}
      className={className}
    >
      <rect width="30" height="30" rx="5" fill="white" />
      <path
        d="M20 10H10M18 15H12M16 20H14"
        stroke="#151515"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Filter;
