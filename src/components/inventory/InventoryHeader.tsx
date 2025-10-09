import React from "react";
import { StarsIcon } from "@/components/icons";
import { FilterButton } from "@/components/shared";

const InventoryHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between gap-16 w-full">
      <div className="flex items-center gap-[15px] w-[309px]">
        <StarsIcon size={30} className="flex-shrink-0" />
        <h2 className="font-normal text-[20px] leading-[1em] text-[#151515]">
          Product Catalog
        </h2>
      </div>

      <FilterButton />
    </div>
  );
};

export default InventoryHeader;
