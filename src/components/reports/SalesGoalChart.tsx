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

// Chart data matching Figma design - all periods
const chartData = [
  { period: "1 - 10 Aug", value: 45, amount: 18340 },
  { period: "11 - 20 Aug", value: 62, amount: 20150 },
  { period: "21 - 30 Aug", value: 75, amount: 23849 },
  { period: "1 - 10 Nov", value: 38, amount: 15200 },
];

// Active/highlighted data - first 3 periods only
const activeData = [
  { period: "1 - 10 Aug", value: 45, amount: 18340 },
  { period: "11 - 20 Aug", value: 62, amount: 20150 },
  { period: "21 - 30 Aug", value: 75, amount: 23849 },
  { period: "1 - 10 Nov", value: null, amount: null }, // null to end the line
];

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: {
      amount: number;
    };
  }>;
}

// Custom Tooltip Component matching Figma design
const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="relative">
        <div className="bg-[#1D222E] rounded-lg px-3.5 py-2 shadow-lg">
          <p className="text-white text-base font-normal text-center">
            ${payload[0].payload.amount.toLocaleString()}
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export default function SalesGoalChart() {
  const [selectedPeriod, setSelectedPeriod] = useState<string>("Month");

  // Calculate current percentage (from latest data point with highest value)
  const currentPercentage = chartData[2].value; // 21-30 Aug is active at 75%

  return (
    <div className="bg-white rounded-[20px] border border-[rgba(21,21,21,0.1)] p-9 w-full">
      {/* Card Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-[rgba(0,0,0,0.52)] text-lg font-normal">
            Statistics
          </p>
          <h3 className="text-[#1D222E] text-[22px] font-bold mt-1">
            Sales goal
          </h3>
        </div>

        {/* Dropdown Selector */}
        <button className="flex items-center gap-6 px-4 py-2.5 bg-[#F8F8FF] rounded-[20px] hover:bg-[#F0F0FF] transition-colors">
          <span className="text-[#615E83] text-sm font-normal">
            {selectedPeriod}
          </span>
          <div className="flex flex-col gap-0.5">
            <div className="w-1.5 h-1.5 bg-[#615E83] rounded-sm rotate-45 -translate-y-0.5" />
            <div className="w-1.5 h-1.5 bg-[#615E83] rounded-sm rotate-45 translate-y-0.5" />
          </div>
        </button>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#E5E5EF] mb-7" />

      {/* Percentage Display */}
      <div className="mb-8">
        <p className="text-[#1D222E] text-[42px] font-bold leading-tight">
          {currentPercentage}%
        </p>
      </div>

      {/* Chart */}
      <div className="w-full h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
            style={{ outline: 'none' }}
          >
            <defs>
              {/* Base gradient - lighter colors for all data */}
              <linearGradient id="baseGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E5EAFC" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.1} />
              </linearGradient>

              {/* Active gradient - darker/saturated colors for highlighted portion */}
              <linearGradient id="activeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#93AAFD" stopOpacity={1} />
                <stop offset="40%" stopColor="#C6D2FD" stopOpacity={1} />
                <stop offset="100%" stopColor="#E5EAFC" stopOpacity={0.9} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 7"
              stroke="#E5E5EF"
              strokeWidth={1.5}
              vertical={false}
            />

            <XAxis
              dataKey="period"
              axisLine={false}
              tickLine={false}
              tick={({ x, y, payload, index }) => (
                <text
                  x={x}
                  y={y + 10}
                  textAnchor="middle"
                  fill={index === 2 ? "#1D222E" : "rgba(0,0,0,0.52)"}
                  fontSize={14}
                  fontWeight={index === 2 ? 500 : 400}
                >
                  {payload.value}
                </text>
              )}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#615E83", fontSize: 14, fontWeight: 400 }}
              ticks={[0, 50, 100]}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#2D5BFF",
                strokeWidth: 1.5,
                strokeDasharray: "4 7",
              }}
            />

            {/* Base area - covers all data with lighter gradient */}
            <Area
              type="monotone"
              dataKey="value"
              stroke="#C6D2FD"
              strokeWidth={1.5}
              fill="url(#baseGradient)"
              fillOpacity={1}
              activeDot={{
                r: 7.5,
                fill: "#2D5BFF",
                stroke: "#FFFFFF",
                strokeWidth: 2,
              }}
            />

            {/* Active/highlighted area - covers first 3 periods with darker gradient */}
            <Area
              type="monotone"
              dataKey="value"
              data={activeData}
              stroke="#2D5BFF"
              strokeWidth={2}
              fill="url(#activeGradient)"
              fillOpacity={1}
              activeDot={{
                r: 7.5,
                fill: "#2D5BFF",
                stroke: "#FFFFFF",
                strokeWidth: 2,
              }}
              connectNulls={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
