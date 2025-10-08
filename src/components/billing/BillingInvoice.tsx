"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Invoice {
  id: string;
  customerName: string;
  date: string;
  status: "Paid" | "Pending" | "Overdue";
  amount: string;
}

const mockInvoices: Invoice[] = [
  {
    id: "#INV_1000",
    customerName: "Jaesung Park",
    date: "25/7/2025",
    status: "Paid",
    amount: "₩189,000",
  },
  {
    id: "#INV_1001",
    customerName: "Sarah Kim",
    date: "24/7/2025",
    status: "Paid",
    amount: "₩245,000",
  },
  {
    id: "#INV_1002",
    customerName: "Michael Lee",
    date: "23/7/2025",
    status: "Paid",
    amount: "₩320,000",
  },
  {
    id: "#INV_1003",
    customerName: "Emily Chen",
    date: "22/7/2025",
    status: "Paid",
    amount: "₩156,000",
  },
  {
    id: "#INV_1004",
    customerName: "David Park",
    date: "21/7/2025",
    status: "Paid",
    amount: "₩189,000",
  },
  {
    id: "#INV_1005",
    customerName: "Jessica Wong",
    date: "20/7/2025",
    status: "Paid",
    amount: "₩275,000",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Paid":
      return "text-[#00961B]";
    case "Pending":
      return "text-[#FF9500]";
    case "Overdue":
      return "text-[#FF3B30]";
    default:
      return "text-[#5E5E5E]";
  }
};

export const BillingInvoice: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInvoices = mockInvoices.filter(
    (invoice) =>
      invoice.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-[20px] border-[0.5px] border-[rgba(21,21,21,0.1)] p-[18px_30px] w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-[27px]">
        <div className="flex items-center gap-[15px]">
          <div className="w-[30px] h-[30px] rounded-[5px]">
            <Image
              src="/icons/stars-icon.svg"
              alt="Stars"
              width={30}
              height={30}
            />
          </div>
          <h2 className="text-[20px] leading-[1em] text-[#151515] font-normal">
            Billing & Invoice
          </h2>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white border-[0.5px] border-[rgba(30,30,30,0.1)] rounded-[1000px] w-[316px]">
          <input
            type="text"
            placeholder="Search for invoices"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 text-[16px] leading-[1em] text-[#5E5E5E] placeholder:text-[#737373] outline-none bg-transparent"
          />
          <Image
            src="/icons/search-icon-small.svg"
            alt="Search"
            width={16}
            height={16}
          />
        </div>
      </div>

      {/* Table */}
      <div className="flex flex-col gap-[10px]">
        {/* Table Header */}
        <div className="flex items-center bg-[#F2F2F2] rounded-[10px]">
          <div className="flex-1 flex justify-center items-center py-[15px] px-[45px]">
            <span className="text-[16px] leading-[1em] text-[#5E5E5E] text-center">
              Invoice
            </span>
          </div>
          <div className="flex-1 flex justify-center items-center py-[15px] px-[45px]">
            <span className="text-[16px] leading-[1em] text-[#5E5E5E] text-center">
              Customer Name
            </span>
          </div>
          <div className="flex-1 flex justify-center items-center py-[15px] px-[45px]">
            <span className="text-[16px] leading-[1em] text-[#5E5E5E] text-center">
              Date
            </span>
          </div>
          <div className="flex-1 flex justify-center items-center py-[15px] px-[45px]">
            <span className="text-[16px] leading-[1em] text-[#5E5E5E] text-center">
              Status
            </span>
          </div>
          <div className="flex-1 flex justify-center items-center py-[15px] px-[45px]">
            <span className="text-[16px] leading-[1em] text-[#5E5E5E] text-center">
              Amount
            </span>
          </div>
        </div>

        {/* Table Rows */}
        {filteredInvoices.map((invoice, index) => (
          <React.Fragment key={invoice.id}>
            <div className="flex items-center h-[46px]">
              <div className="flex-1 flex justify-center items-center py-[15px] px-[45px]">
                <span className="text-[16px] leading-[1em] text-[#5E5E5E] text-center">
                  {invoice.id}
                </span>
              </div>
              <div className="flex-1 flex justify-center items-center py-[15px] px-[45px]">
                <span className="text-[16px] leading-[1em] text-[#5E5E5E] text-center">
                  {invoice.customerName}
                </span>
              </div>
              <div className="flex-1 flex justify-center items-center py-[15px] px-[45px]">
                <span className="text-[16px] leading-[1em] text-[#5E5E5E] text-center">
                  {invoice.date}
                </span>
              </div>
              <div className="flex-1 flex justify-center items-center py-[15px] px-[45px]">
                <span
                  className={`text-[16px] leading-[1em] text-center ${getStatusColor(
                    invoice.status
                  )}`}
                >
                  {invoice.status}
                </span>
              </div>
              <div className="flex-1 flex justify-center items-center py-[15px] px-[45px]">
                <span className="text-[16px] leading-[1em] text-[#5E5E5E] text-center">
                  {invoice.amount}
                </span>
              </div>
            </div>
            {index < filteredInvoices.length - 1 && (
              <div className="w-full h-[0.8px] bg-[#F2F2F2]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
