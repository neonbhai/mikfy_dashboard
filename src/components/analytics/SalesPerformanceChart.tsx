"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import TabFilter from "./TabFilter";
import {
  type TabOption,
  weeklyData,
  dailyData,
  monthlyData,
} from "./salesPerformanceData";

const TAB_OPTIONS = ["Daily", "Weekly", "Monthly"] as const;

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
    color: string;
  }>;
  label?: string;
}

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1E1B39] rounded-lg px-4 py-3 shadow-lg min-w-[140px]">
        <p className="text-white text-xs font-semibold mb-2 uppercase">
          {label}
        </p>
        {payload.map((entry, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-3 mb-1"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <p className="text-[#9291A5] text-xs capitalize">
                {entry.dataKey}
              </p>
            </div>
            <p className="text-white text-xs font-medium">
              ${(entry.value / 1000).toFixed(0)}k
            </p>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function SalesPerformanceChart() {
  const [activeTab, setActiveTab] = useState<TabOption>("Monthly");

  const getData = () => {
    switch (activeTab) {
      case "Daily":
        return dailyData;
      case "Weekly":
        return weeklyData;
      case "Monthly":
        return monthlyData;
      default:
        return weeklyData;
    }
  };

  const data = getData();

  return (
    <div className="w-full h-[537px] bg-white border border-[rgba(21,21,21,0.1)] rounded-[10px] p-[34px]">
      {/* Header Section */}
      <div className="flex items-start justify-between mb-6">
        {/* Card Info */}
        <div>
          <p className="text-[#9291A5] text-sm uppercase tracking-[0.06em] mb-1">
            Statistics
          </p>
          <h3 className="text-[#151515] text-[24px] font-semibold leading-tight">
            Sales Performance
          </h3>
        </div>

        {/* Tab Filters */}
        <TabFilter
          options={TAB_OPTIONS}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#E5E5EF] mb-6" />

      {/* Chart */}
      <div className="w-full h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
            barSize={activeTab === "Monthly" ? 15 : 12}
            barGap={2}
            style={{ outline: "none" }}
          >
            <defs>
              {/* USA - deep blue/purple */}
              <linearGradient id="barGradient2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4A3AFF" stopOpacity={1} />
                <stop offset="100%" stopColor="#7B68EE" stopOpacity={1} />
              </linearGradient>
              {/* Canada - light lilac */}
              <linearGradient id="barGradient3" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E0C6FD" stopOpacity={1} />
                <stop offset="100%" stopColor="#F0E6FF" stopOpacity={1} />
              </linearGradient>
              {/* UK - vivid purple */}
              <linearGradient id="barGradient4" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#962DFF" stopOpacity={1} />
                <stop offset="100%" stopColor="#B07AFF" stopOpacity={1} />
              </linearGradient>
              {/* Australia - soft blue */}
              <linearGradient id="barGradient1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C6D2FD" stopOpacity={1} />
                <stop offset="100%" stopColor="#E0E8FF" stopOpacity={1} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="0"
              stroke="#E5E5EF"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#151515", fontSize: 14, fontWeight: 400 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#151515", fontSize: 14, fontWeight: 400 }}
              tickFormatter={(value) => {
                if (value === 0) return "0";
                if (value >= 1000000) return `${value / 1000000}M`;
                return `${value / 1000}k`;
              }}
              domain={[0, 1200000]}
              ticks={[0, 200000, 400000, 600000, 800000, 1000000, 1200000]}
              dx={-10}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(74, 58, 255, 0.05)" }}
            />
            <Bar
              dataKey="usa"
              fill="url(#barGradient2)"
              radius={[8, 8, 0, 0]}
            />
            <Bar
              dataKey="canada"
              fill="url(#barGradient3)"
              radius={[8, 8, 0, 0]}
            />
            <Bar dataKey="uk" fill="url(#barGradient4)" radius={[8, 8, 0, 0]} />
            <Bar
              dataKey="australia"
              fill="url(#barGradient1)"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
