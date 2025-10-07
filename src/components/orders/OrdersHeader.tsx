import React from "react";
import Stars from "../icons/Stars";
import Filter from "../icons/Filter";

interface OrdersHeaderProps {
  title?: string;
  onFilterClick?: () => void;
}

const OrdersHeader: React.FC<OrdersHeaderProps> = ({
  title = "Requires Attention",
  onFilterClick,
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
      <button
        onClick={onFilterClick}
        className="flex-shrink-0 hover:opacity-70 transition-opacity"
        aria-label="Filter orders"
      >
        <Filter size={30} />
      </button>
    </div>
  );
};

export default OrdersHeader;
