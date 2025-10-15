"use client";

import React, { useState } from "react";
import PriorityBadge from "./PriorityBadge";
import { ConnectShopifyModal } from "../shared";

interface OrderCardProps {
  orderId: string;
  priority: "High" | "Medium" | "Low";
  customerName: string;
  amount: string;
  status: string;
  onReview?: () => void;
}

const OrderCard: React.FC<OrderCardProps> = ({
  orderId,
  priority,
  customerName,
  amount,
  status,
  onReview,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReviewClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <ConnectShopifyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className="flex flex-col gap-[10px] p-4 bg-white border border-[#F3F3EE] rounded-[10px] w-full max-w-[461px]">
        <div className="flex flex-col gap-[10px] w-full">
          {/* Order ID and Priority */}
          <div className="flex justify-between items-start gap-10 w-full">
            <span className="text-[#151515] font-normal text-xl leading-none">
              {orderId}
            </span>
            <PriorityBadge level={priority} />
          </div>

          {/* Customer Name */}
          <span className="text-[#B5200C] font-light text-sm leading-[1.3]">
            {customerName}
          </span>

          {/* Amount */}
          <span className="text-[#151515] font-light text-sm leading-[1.3]">
            {amount}
          </span>

          {/* Status */}
          <span className="text-[rgba(21,21,21,0.52)] font-light text-sm leading-[1.3]">
            {status}
          </span>
        </div>

        {/* Review Button */}
        <button
          onClick={handleReviewClick}
          className="flex cursor-pointer items-center justify-center w-full px-[10px] py-[10px] bg-[#151515] rounded-[10px] hover:bg-[#2a2a2a] transition-colors"
        >
          <span className="text-white font-normal text-base leading-[1.3]">
            Review Order
          </span>
        </button>
      </div>
    </>
  );
};

export default OrderCard;
