import React from "react";

interface StockProgressProps {
  current: number;
  max: number;
}

const StockProgress: React.FC<StockProgressProps> = ({ current, max }) => {
  const percentage = (current / max) * 100;

  return (
    <div className="w-full h-[9px] bg-[#EBEBEB] rounded-full overflow-hidden">
      <div
        className="h-full bg-[#34C759] rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default StockProgress;

