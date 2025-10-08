import React from "react";
import ProductToggle from "./ProductToggle";

interface ProductActionsProps {
  isActive: boolean;
  onToggle: () => void;
  onEdit: () => void;
}

const ProductActions: React.FC<ProductActionsProps> = ({
  isActive,
  onToggle,
  onEdit,
}) => {
  return (
    <div className="flex flex-col items-end gap-[26px] w-[176px]">
      <ProductToggle isActive={isActive} onToggle={onToggle} />

      <button
        onClick={onEdit}
        className="w-full cursor-pointer py-[10px] px-[10px] bg-[#151515] text-white rounded-[10px] text-[16px] font-normal leading-[1.3em] hover:bg-[#2a2a2a] transition-colors"
      >
        Edit Product
      </button>
    </div>
  );
};

export default ProductActions;
