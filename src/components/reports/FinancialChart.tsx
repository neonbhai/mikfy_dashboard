"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data matching the Figma design
const monthlyData = [
  { month: "JAN", value: 2800, sales: 1120 },
  { month: "FEB", value: 3200, sales: 1280 },
  { month: "MAR", value: 2400, sales: 960 },
  { month: "APR", value: 3800, sales: 1520 },
  { month: "MAY", value: 3000, sales: 1200 },
  { month: "JUN", value: 4200, sales: 1680 },
  { month: "JUL", value: 3348, sales: 1348 },
  { month: "AUG", value: 3900, sales: 1560 },
  { month: "SEP", value: 2900, sales: 1160 },
  { month: "OCT", value: 4500, sales: 1800 },
  { month: "NOV", value: 3700, sales: 1480 },
  { month: "DEC", value: 4100, sales: 1640 },
];

const weeklyData = [
  { month: "Week 1", value: 3200, sales: 1280 },
  { month: "Week 2", value: 2800, sales: 1120 },
  { month: "Week 3", value: 3800, sales: 1520 },
  { month: "Week 4", value: 4200, sales: 1680 },
];

const dailyData = [
  { month: "Mon", value: 3200, sales: 1280 },
  { month: "Tue", value: 2800, sales: 1120 },
  { month: "Wed", value: 3800, sales: 1520 },
  { month: "Thu", value: 4200, sales: 1680 },
  { month: "Fri", value: 3900, sales: 1560 },
  { month: "Sat", value: 2900, sales: 1160 },
  { month: "Sun", value: 3400, sales: 1360 },
];

type TabOption = "Daily" | "Weekly" | "Annually";

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: {
      sales: number;
    };
  }>;
}

// Custom Tooltip Component
const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="relative">
        <div className="bg-[#1D222E] rounded-lg px-4 py-2 shadow-lg">
          <p className="text-white text-base font-medium text-center">
            ${payload[0].value.toLocaleString()}
          </p>
          <p className="text-[#E5E5EF] text-sm text-center">
            {payload[0].payload.sales.toLocaleString()} sales
          </p>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#1D222E]" />
      </div>
    );
  }
  return null;
};

export default function FinancialChart() {
  const [activeTab, setActiveTab] = useState<TabOption>("Annually");

  const getData = () => {
    switch (activeTab) {
      case "Daily":
        return dailyData;
      case "Weekly":
        return weeklyData;
      case "Annually":
        return monthlyData;
      default:
        return monthlyData;
    }
  };

  const data = getData();
  const totalSales = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="bg-white rounded-[20px] border border-[rgba(21,21,21,0.1)] p-8 w-full">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        {/* Card Info */}
        <div>
          <p className="text-[#9291A5] text-lg">Sales 2022</p>
          <h2 className="text-[#1D222E] text-[32px] font-bold leading-[1.5] mt-1">
            ${(totalSales / 1000).toFixed(1)}k
          </h2>
          <div className="flex items-center gap-2 mt-4">
            {/* Growth Indicator Icon */}
            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 0L11.1962 10.5H0.803848L6 0Z" fill="#04CE00" />
            </svg>
            <span className="text-[#04CE00] text-sm font-bold">1.3%</span>
            <span className="text-[#9291A5] text-sm uppercase tracking-wider">
              VS LAST YEAR
            </span>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="bg-[#F8F8FF] rounded-[14.77px] p-1.5 flex gap-1">
          {(["Daily", "Weekly", "Annually"] as TabOption[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 rounded-[13px] text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#1D222E] text-white"
                  : "bg-transparent text-[#9291A5] hover:text-[#1D222E]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#765DFF" stopOpacity={1} />
                <stop offset="48%" stopColor="#CFCAFF" stopOpacity={1} />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="0"
              stroke="#E5E5EF"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#151515", fontSize: 14, fontWeight: 400 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#151515", fontSize: 16, fontWeight: 400 }}
              tickFormatter={(value) => {
                if (value === 0) return "0";
                return `${value / 1000}k`;
              }}
              ticks={[0, 1000, 2000, 3000, 4000, 5000]}
              dx={-10}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#4A3AFF",
                strokeWidth: 2,
                strokeDasharray: "0",
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#4A3AFF"
              strokeWidth={3}
              fill="url(#colorValue)"
              activeDot={{
                r: 6,
                fill: "#4A3AFF",
                stroke: "#FFFFFF",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
