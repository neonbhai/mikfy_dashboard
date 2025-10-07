import React from "react";
import { IconProps } from "./IconBase";

const Stars: React.FC<IconProps> = ({ className, size = 30, title }) => {
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
      <image href="/icons/stars-icon.svg" width="30" height="30" />
    </svg>
  );
};

export default Stars;
