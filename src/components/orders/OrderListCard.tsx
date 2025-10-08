"use client";

import { EyeIcon } from "@/components/icons";

export type OrderStatus = "Cancelled" | "Delivered" | "Processing" | "Pending";

interface OrderListCardProps {
  orderId: string;
  status: OrderStatus;
  customerName: string;
  amount: string;
  itemCount: number;
  date: string;
  onView?: (orderId: string) => void;
}

const statusStyles: Record<
  OrderStatus,
  { bg: string; text: string; textColor: string }
> = {
  Cancelled: {
    bg: "bg-[#B5200C]",
    text: "text-white",
    textColor: "#B5200C",
  },
  Delivered: {
    bg: "bg-[#00961B]",
    text: "text-white",
    textColor: "#00961B",
  },
  Processing: {
    bg: "bg-[#FF9500]",
    text: "text-white",
    textColor: "#FF9500",
  },
  Pending: {
    bg: "bg-[#737373]",
    text: "text-white",
    textColor: "#737373",
  },
};

export default function OrderListCard({
  orderId,
  status,
  customerName,
  amount,
  itemCount,
  date,
  onView,
}: OrderListCardProps) {
  const statusStyle = statusStyles[status];

  return (
    <div className="w-full h-[140px] bg-white border border-[#F3F3EE] rounded-[10px] p-4">
      <div className="flex flex-col gap-[10px]">
        {/* Header Row */}
        <div className="flex justify-between items-start">
          <p className="text-[#151515] text-[20px] font-normal leading-[1em] font-geist">
            {orderId}
          </p>

          <div className="flex items-center gap-[10px]">
            <div
              className={`${statusStyle.bg} rounded-full px-[15px] h-[24px] flex items-center justify-center`}
            >
              <span
                className={`${statusStyle.text} text-[14px] font-normal leading-[1em] font-geist`}
              >
                {status}
              </span>
            </div>

            <button
              onClick={() => onView?.(orderId)}
              className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
              aria-label="View order details"
            >
              <EyeIcon className="w-6 h-6 text-[#151515]" />
            </button>
          </div>
        </div>

        {/* Customer Name */}
        <p
          className="text-[14px] font-light leading-[1.3em] font-geist"
          style={{ color: statusStyle.textColor }}
        >
          {customerName}
        </p>

        {/* Amount */}
        <p className="text-[#151515] text-[14px] font-light leading-[1.3em] font-geist">
          {amount}
        </p>

        {/* Meta Info */}
        <p className="text-[rgba(21,21,21,0.52)] text-[14px] font-light leading-[1.3em] font-geist">
          {itemCount} items • {date}
        </p>
      </div>
    </div>
  );
}
