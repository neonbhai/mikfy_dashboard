"use client";

import { AttentionOrders } from "@/components/orders";

// Sample data matching the Figma design
const sampleOrders = [
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
    orderId: "#MK-2024-089",
    priority: "High" as const,
    customerName: "Seoul Beauty Supply",
    amount: "₩3,250,000",
    status: "Address confirmation required",
  },
  {
    id: "3",
    orderId: "#MK-2024-089",
    priority: "High" as const,
    customerName: "Seoul Beauty Supply",
    amount: "₩3,250,000",
    status: "Address confirmation required",
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
      <AttentionOrders
        orders={sampleOrders}
        onFilterClick={handleFilterClick}
        onReviewOrder={handleReviewOrder}
      />
    </div>
  );
}
