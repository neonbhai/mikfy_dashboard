"use client";

import {
  AttentionOrders,
  OrderTimelineCard,
  OrdersHeader,
  AllOrdersList,
  OrderListItem,
} from "@/components/orders";
import { PageTitle } from "@/components/shared";
import { StatsCardsRow } from "@/components/overview";

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

// Data for all orders list
const allOrders: OrderListItem[] = [
  {
    id: "1",
    orderId: "#MK-2024-089",
    status: "Cancelled",
    customerName: "Seoul Beauty Supply",
    amount: "₩3,250,000",
    itemCount: 3,
    date: "2024-01-15",
  },
  {
    id: "2",
    orderId: "#MK-2024-090",
    status: "Delivered",
    customerName: "Seoul Beauty Supply",
    amount: "₩3,250,000",
    itemCount: 3,
    date: "2024-01-15",
  },
  {
    id: "3",
    orderId: "#MK-2024-091",
    status: "Delivered",
    customerName: "Seoul Beauty Supply",
    amount: "₩3,250,000",
    itemCount: 3,
    date: "2024-01-15",
  },
  {
    id: "4",
    orderId: "#MK-2024-092",
    status: "Processing",
    customerName: "Seoul Beauty Supply",
    amount: "₩3,250,000",
    itemCount: 5,
    date: "2024-01-16",
  },
  {
    id: "5",
    orderId: "#MK-2024-093",
    status: "Pending",
    customerName: "Seoul Beauty Supply",
    amount: "₩2,150,000",
    itemCount: 2,
    date: "2024-01-16",
  },
];

export default function OrdersPage() {
  const orderStats = [
    {
      title: "Pending",
      value: "54 Orders",
      change: "+8.5% vs last month",
      isPositive: true,
      backgroundColor: "#FFFBEA",
    },
    {
      title: "Processing",
      value: "54 Orders",
      change: "+12.3% vs last month",
      isPositive: true,
      backgroundColor: "#EDE9FE",
    },
    {
      title: "Delivered",
      value: "54 Orders",
      change: "+15.7% vs last month",
      isPositive: true,
      backgroundColor: "#DCFCE7",
    },
    {
      title: "Cancelled",
      value: "54 Orders",
      change: "-2.1% vs last month",
      isPositive: true,
      backgroundColor: "#FECDD3",
    },
  ];

  const handleFilterClick = () => {
    console.log("Filter clicked - implement filter logic");
  };

  const handleReviewOrder = (orderId: string) => {
    console.log("Review order:", orderId);
  };

  const handleViewOrder = (orderId: string) => {
    console.log("View order details:", orderId);
  };

  return (
    <div className="min-h-screen p-8">
      <PageTitle
        title="Orders & Fulfillment"
        description="Manage and track all customer orders"
      />

      <StatsCardsRow stats={orderStats} />

      <div className="flex flex-row gap-6 items-start">
        <AttentionOrders
          orders={attentionOrders}
          onFilterClick={handleFilterClick}
          onReviewOrder={handleReviewOrder}
        />

        <div className="flex flex-col gap-[10px] p-[23px_30px] bg-white border border-[rgba(21,21,21,0.1)] rounded-[20px] w-full">
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

      {/* All Orders List Component */}
      <div className="my-6">
        <AllOrdersList orders={allOrders} onView={handleViewOrder} />
      </div>
    </div>
  );
}
