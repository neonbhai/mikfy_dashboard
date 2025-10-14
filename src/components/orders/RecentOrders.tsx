"use client";

import Image from "next/image";
import Link from "next/link";
import { StarsIcon } from "@/components/icons";

interface Order {
  id: string;
  customerName: string;
  timestamp: string;
  amount: string;
  avatarUrl?: string;
}

const orders: Order[] = [
  {
    id: "1",
    customerName: "Sarah Chen",
    timestamp: "10 minutes ago",
    amount: "+₩189,000",
    avatarUrl: "/avatars/avatar-sarah-chen.png",
  },
  {
    id: "2",
    customerName: "Sarah Chen",
    timestamp: "10 minutes ago",
    amount: "+₩189,000",
    avatarUrl: "/avatars/avatar-sarah-chen.png",
  },
  {
    id: "3",
    customerName: "Sarah Chen",
    timestamp: "10 minutes ago",
    amount: "+₩189,000",
    avatarUrl: "/avatars/avatar-sarah-chen.png",
  },
];

export default function RecentOrders() {
  return (
    <div className="bg-white rounded-[20px] border-[0.5px] border-[rgba(21,21,21,0.1)] p-[23px_30px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-[30px]">
        <div className="flex items-center gap-[15px]">
          <div className="w-[30px] h-[30px] rounded-[5px] flex items-center justify-center">
            <StarsIcon size={30} />
          </div>
          <h2 className="text-[20px] font-normal leading-[1em] text-[#151515]">
            Recent Orders
          </h2>
        </div>
        <Link
          href="/orders"
          className="text-[16px] font-normal leading-[1em] text-black hover:underline"
        >
          See All
        </Link>
      </div>

      {/* Orders List */}
      <div className="flex flex-col gap-[15px]">
        {orders.map((order) => (
          <Link
            key={order.id}
            href="/orders"
            className="bg-white border-[0.5px] border-[rgba(30,30,30,0.1)] rounded-[10px] p-4 transition-all duration-300 cursor-pointer hover:shadow-[0_0_25px_rgba(30,30,30,0.15)] block"
          >
            <div className="flex justify-between items-center gap-4">
              {/* Customer Info */}
              <div className="flex items-center gap-[11px]">
                {/* Avatar with Gradient Border */}
                <div className="relative w-[51px] h-[51px]">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src={order.avatarUrl || "/avatars/avatar-default.png"}
                      alt={order.customerName}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Name and Timestamp */}
                <div className="flex flex-col gap-[12px]">
                  <h3 className="text-[20px] font-medium leading-[1em] text-[#1E1E1E]">
                    {order.customerName}
                  </h3>
                  <div className="flex items-center gap-[10px]">
                    <span className="text-[16px] font-normal leading-[1em] text-[#747474]">
                      {order.timestamp}
                    </span>
                  </div>
                </div>
              </div>

              {/* Amount */}
              <div className="text-[24px] font-medium leading-[1em] text-[#00961B]">
                {order.amount}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
