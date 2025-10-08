"use client";

import {
  AttentionOrders,
  OrderTimelineCard,
  OrdersHeader,
} from "@/components/orders";

// Data for attention list
const attentionOrders = [
  {
    id: "1",
    orderId: "#MK-2024-089",
    priority: "High" as const,
    customerName: "Seoul Beauty Supply",
    amount: "₩3,250,000",
    status: "Address confirmation required",
  },
  {
    id: "2",
    orderId: "#MK-2024-090",
    priority: "High" as const,
    customerName: "Seoul Beauty Supply",
    amount: "₩3,250,000",
    status: "Address confirmation required",
  },
  {
    id: "3",
    orderId: "#MK-2024-091",
    priority: "High" as const,
    customerName: "Seoul Beauty Supply",
    amount: "₩3,250,000",
    status: "Address confirmation required",
  },
];

// Data for timelines, inspired by Figma
const timelineOrders = [
  {
    orderId: "#MK-2024-089",
    status: "Processing",
    customerName: "Seoul Beauty Supply",
    amount: "₩3,250,000",
    timestamps: {
      placed: "2024-01-15 10:30",
      paid: "2024-01-15 10:45",
      processing: "2024-01-15 11:10",
      delivered: "",
    },
  },
  {
    orderId: "#MK-2024-090",
    status: "Processing",
    customerName: "Seoul Beauty Supply",
    amount: "₩3,250,000",
    timestamps: {
      placed: "2024-01-16 09:20",
      paid: "2024-01-16 09:35",
      processing: "2024-01-16 10:00",
      delivered: "",
    },
  },
  {
    orderId: "#MK-2024-091",
    status: "Processing",
    customerName: "Seoul Beauty Supply",
    amount: "₩3,250,000",
    timestamps: {
      placed: "2024-01-17 13:05",
      paid: "2024-01-17 13:20",
      processing: "2024-01-17 13:50",
      delivered: "",
    },
  },
];

export default function OrdersPage() {
  const handleFilterClick = () => {
    console.log("Filter clicked - implement filter logic");
  };

  const handleReviewOrder = (orderId: string) => {
    console.log("Review order:", orderId);
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Order & Fulfillment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <AttentionOrders
          orders={attentionOrders}
          onFilterClick={handleFilterClick}
          onReviewOrder={handleReviewOrder}
        />

        <div className="flex flex-col gap-[10px] p-[23px_30px] bg-white border border-[rgba(21,21,21,0.1)] rounded-[20px] w-full max-w-[563px]">
          <div className="flex flex-col gap-[30px] w-full">
            <OrdersHeader
              title="Order Timeline"
              onFilterClick={handleFilterClick}
            />
            <div className="flex flex-col gap-[15px] w-full">
              {timelineOrders.map((o) => (
                <OrderTimelineCard
                  key={o.orderId}
                  orderId={o.orderId}
                  status={o.status}
                  customerName={o.customerName}
                  amount={o.amount}
                  timestamps={o.timestamps}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
