import React from "react";

interface PriorityBadgeProps {
  level: "High" | "Medium" | "Low";
}

const PriorityBadge: React.FC<PriorityBadgeProps> = ({ level }) => {
  const getStyles = () => {
    switch (level) {
      case "High":
        return "bg-[#B5200C] text-white";
      case "Medium":
        return "bg-orange-500 text-white";
      case "Low":
        return "bg-gray-300 text-gray-800";
      default:
        return "bg-gray-300 text-gray-800";
    }
  };

  return (
    <div
      className={`inline-flex items-center justify-center px-[15px] py-[10px] rounded-full h-6 ${getStyles()}`}
    >
      <span className="text-sm font-normal leading-none">{level}</span>
    </div>
  );
};

export default PriorityBadge;
