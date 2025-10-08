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
import {
  monthlyData,
  weeklyData,
  dailyData,
  type TabOption,
} from "./chartData";
import ChartHeader from "./ChartHeader";

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
        {/* <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#1D222E]" /> */}
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
      <ChartHeader
        totalSales={totalSales}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Chart */}
      <div className="w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
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
