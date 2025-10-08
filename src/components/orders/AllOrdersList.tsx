"use client";

import { useState, useMemo } from "react";
import { StarsIcon } from "@/components/icons";
import Image from "next/image";
import OrderListCard, { OrderStatus } from "./OrderListCard";
import OrderFilterDropdown from "./OrderFilterDropdown";

export interface OrderListItem {
  id: string;
  orderId: string;
  status: OrderStatus;
  customerName: string;
  amount: string;
  itemCount: number;
  date: string;
}

interface AllOrdersListProps {
  orders: OrderListItem[];
  onView?: (orderId: string) => void;
}

export default function AllOrdersList({ orders, onView }: AllOrdersListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All orders");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  // Filter orders based on selected filter and search query
  const filteredOrders = useMemo(() => {
    let filtered = orders;

    // Filter by status
    if (selectedFilter !== "All orders") {
      filtered = filtered.filter((order) => order.status === selectedFilter);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (order) =>
          order.orderId.toLowerCase().includes(query) ||
          order.customerName.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [orders, selectedFilter, searchQuery]);

  return (
    <div className="w-full bg-white border-[0.5px] border-[rgba(21,21,21,0.1)] rounded-[20px] px-[30px] py-[18px] flex flex-col gap-[27px]">
      {/* Header */}
      <div className="h-[40px] flex items-center justify-between w-full">
        {/* Title Section */}
        <div className="flex items-center gap-[15px]">
          <div className="w-[30px] h-[30px] rounded-[5px] overflow-hidden flex items-center justify-center">
            <StarsIcon className="w-[30px] h-[30px]" />
          </div>
          <h2 className="text-[#151515] text-[20px] font-normal leading-[1em] font-geist">
            All Orders
          </h2>
        </div>

        {/* Search and Filter Section */}
        <div className="flex items-center gap-[17px]">
          {/* Search Bar */}
          <div className="w-[316px] h-full bg-white border-[0.5px] border-[rgba(30,30,30,0.1)] rounded-[1000px] px-4 py-3 flex items-center gap-2">
            <input
              type="text"
              placeholder="Search for orders"
              value={searchQuery}
              onChange={handleSearch}
              className="flex-1 text-[#737373] text-[16px] font-normal leading-[1em] font-geist outline-none bg-transparent placeholder:text-[#737373]"
            />
            <Image
              src="/icons/search-icon-small.svg"
              alt="Search"
              width={16}
              height={16}
            />
          </div>

          {/* Filter Dropdown */}
          <OrderFilterDropdown
            selectedFilter={selectedFilter}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>

      {/* Orders List */}
      <div className="flex flex-col gap-[15px]">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <OrderListCard
              key={order.id}
              orderId={order.orderId}
              status={order.status}
              customerName={order.customerName}
              amount={order.amount}
              itemCount={order.itemCount}
              date={order.date}
              onView={onView}
            />
          ))
        ) : (
          <div className="flex items-center justify-center py-12">
            <p className="text-[#737373] text-[16px] font-light font-geist">
              No orders found
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
