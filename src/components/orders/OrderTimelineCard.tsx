"use client";

import React from "react";
import Image from "next/image";

interface OrderTimelineCardProps {
  orderId: string;
  status: string;
  customerName: string;
  amount: string;
  timestamps: {
    placed?: string;
    paid?: string;
    processing?: string;
    delivered?: string;
  };
}

const OrderTimelineCard: React.FC<OrderTimelineCardProps> = ({
  orderId,
  status,
  customerName,
  amount,
  timestamps,
}) => {
  console.log("Render OrderTimelineCard", {
    orderId,
    status,
    customerName,
    amount,
    timestamps,
  });

  return (
    <div className="flex flex-col gap-[20px] p-4 bg-white border border-[#F3F3EE] rounded-[10px] w-full max-w-[503px]">
      <div className="flex flex-col gap-[5px] w-full">
        <div className="flex items-center justify-between gap-10 w-full">
          <span className="text-[#151515] font-normal text-xl leading-none">
            {orderId}
          </span>
          <div className="inline-flex items-center justify-center px-[15px] py-[10px] rounded-full h-6 bg-[#C2C2C2]">
            <span className="text-sm font-normal leading-none text-black">
              {status}
            </span>
          </div>
        </div>

        <span className="text-[#B5200C] font-light text-sm leading-[1.3]">
          {customerName}
        </span>
        <span className="text-[#151515] font-light text-sm leading-[1.3]">
          {amount}
        </span>
      </div>

      <div className="flex flex-col gap-5 w-full">
        <div className="w-full">
          <Image
            src="/temp-figma/order-timeline-progress.svg"
            alt="Order timeline progress"
            width={401}
            height={12}
            className="w-full h-[12px] object-contain"
          />
        </div>

        <div className="grid grid-cols-4 gap-8 w-full">
          <div className="flex flex-col gap-[5px]">
            <span className="text-[14px] leading-[1em] text-black">
              Order Placed
            </span>
            <span className="text-[10px] leading-[1em] text-[rgba(0,0,0,0.52)]">
              {timestamps.placed || ""}
            </span>
          </div>
          <div className="flex flex-col gap-[5px]">
            <span className="text-[14px] leading-[1em] text-black">
              Payment Confirmed
            </span>
            <span className="text-[10px] leading-[1em] text-[rgba(0,0,0,0.52)]">
              {timestamps.paid || ""}
            </span>
          </div>
          <div className="flex flex-col gap-[5px]">
            <span className="text-[14px] leading-[1em] text-black">
              Processing
            </span>
            <span className="text-[10px] leading-[1em] text-[rgba(0,0,0,0.52)]">
              {timestamps.processing || ""}
            </span>
          </div>
          <div className="flex flex-col gap-[5px]">
            <span className="text-[14px] leading-[1em] text-black">
              Delivered
            </span>
            <span className="text-[10px] leading-[1em] text-[rgba(0,0,0,0.52)]">
              {timestamps.delivered || ""}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTimelineCard;
