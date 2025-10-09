import React from "react";
import Stars from "../icons/Stars";
import { FilterButton } from "@/components/shared";

interface OrdersHeaderProps {
  title?: string;
}

const OrdersHeader: React.FC<OrdersHeaderProps> = ({
  title = "Requires Attention",
}) => {
  return (
    <div className="flex justify-between items-center gap-16 w-full">
      {/* Left side - Stars icon and title */}
      <div className="flex items-center gap-[15px]">
        <Stars size={30} className="flex-shrink-0" />
        <h2 className="text-[#151515] font-normal text-xl leading-none">
          {title}
        </h2>
      </div>

      {/* Right side - Filter icon */}
      <FilterButton />
    </div>
  );
};

export default OrdersHeader;
