"use client";

import React, { useState } from "react";
import ProductToggle from "./ProductToggle";
import { ConnectShopifyModal } from "../shared";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <ConnectShopifyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className="flex flex-col items-end gap-[26px] w-[176px]">
        <ProductToggle isActive={isActive} onToggle={onToggle} />

        <button
          onClick={handleEditClick}
          className="w-full cursor-pointer py-[10px] px-[10px] bg-[#151515] text-white rounded-[10px] text-[16px] font-normal leading-[1.3em] hover:bg-[#2a2a2a] transition-colors"
        >
          Edit Product
        </button>
      </div>
    </>
  );
};

export default ProductActions;
