import React from "react";
import { IconProps } from "./IconBase";

const Filter: React.FC<IconProps> = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group cursor-pointer"
    >
      {/* Lines - full width */}
      <g>
        {/* Top line */}
        <path
          d="M3.4375 6.74124H26.5625"
          stroke="#151515"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        {/* Middle line */}
        <path
          d="M3.4375 15H26.5625"
          stroke="#151515"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        {/* Bottom line */}
        <path
          d="M3.4375 23.2587H26.5625"
          stroke="#151515"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </g>

      {/* Slider circles - filled with white to cover the line */}
      <g>
        {/* Top slider circle */}
        <circle
          cx="19.955"
          cy="6.74124"
          r="2.725"
          stroke="#151515"
          strokeWidth="1.5"
          fill="white"
          className="transition-all duration-300 group-hover:-translate-x-3"
        />
        {/* Middle slider circle */}
        <circle
          cx="8.3925"
          cy="15"
          r="2.725"
          stroke="#151515"
          strokeWidth="1.5"
          fill="white"
          className="transition-all duration-300 group-hover:translate-x-3"
        />
        {/* Bottom slider circle */}
        <circle
          cx="16.6513"
          cy="23.2587"
          r="2.725"
          stroke="#151515"
          strokeWidth="1.5"
          fill="white"
          className="transition-all duration-300 group-hover:-translate-x-1.5"
        />
      </g>
    </svg>
  );
};

export default Filter;
