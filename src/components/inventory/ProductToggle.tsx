import React from "react";

interface ProductToggleProps {
  isActive: boolean;
  onToggle: () => void;
}

const ProductToggle: React.FC<ProductToggleProps> = ({
  isActive,
  onToggle,
}) => {
  return (
    <div className="flex items-center gap-[15px]">
      <span className="font-normal text-[14px] leading-[1.3em] text-[#151515]">
        Active
      </span>
      <button
        onClick={onToggle}
        className={`w-[51px] h-[28px] rounded-full px-1 py-[2px] flex items-center transition-colors duration-200 ${
          isActive ? "bg-[#34C759] justify-end" : "bg-gray-300 justify-start"
        }`}
        aria-label={isActive ? "Deactivate product" : "Activate product"}
      >
        <div className="w-6 h-6 bg-white rounded-full" />
      </button>
    </div>
  );
};

export default ProductToggle;

