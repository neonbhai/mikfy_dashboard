import React from "react";
import OrdersHeader from "./OrdersHeader";
import OrderCard from "./OrderCard";

interface Order {
  id: string;
  orderId: string;
  priority: "High" | "Medium" | "Low";
  customerName: string;
  amount: string;
  status: string;
}

interface AttentionOrdersProps {
  orders?: Order[];
  onFilterClick?: () => void;
  onReviewOrder?: (orderId: string) => void;
}

const AttentionOrders: React.FC<AttentionOrdersProps> = ({
  orders = [],
  onFilterClick,
  onReviewOrder,
}) => {
  console.log("AttentionOrders rendered with orders:", orders);

  return (
    <div className="flex flex-col gap-[10px] p-[23px_30px] bg-white border border-[rgba(21,21,21,0.1)] rounded-[20px] w-full max-w-[521px]">
      <div className="flex flex-col gap-[30px] w-full">
        {/* Header */}
        <OrdersHeader onFilterClick={onFilterClick} />

        {/* Orders List */}
        <div className="flex flex-col gap-[15px] w-full">
          {orders.length === 0 ? (
            <p className="text-[rgba(21,21,21,0.52)] font-light text-sm text-center py-8">
              No orders requiring attention
            </p>
          ) : (
            orders.map((order) => (
              <OrderCard
                key={order.id}
                orderId={order.orderId}
                priority={order.priority}
                customerName={order.customerName}
                amount={order.amount}
                status={order.status}
                onReview={() => onReviewOrder?.(order.id)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AttentionOrders;
