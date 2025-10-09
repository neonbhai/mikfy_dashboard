"use client";

import { useState, useRef, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDownIcon } from "@/components/icons";

// Data for different time periods with steep exponential growth
const dataByPeriod = {
  Month: [
    { period: "1 - 10 Aug", value: 18, amount: 12200 },
    { period: "11 - 20 Aug", value: 35, amount: 16800 },
    { period: "21 - 30 Aug", value: 62, amount: 23500 },
    { period: "1 - 10 Nov", value: 95, amount: 34000 },
  ],
  Week: [
    { period: "Week 1", value: 15, amount: 10500 },
    { period: "Week 2", value: 32, amount: 15200 },
    { period: "Week 3", value: 58, amount: 22800 },
    { period: "Week 4", value: 92, amount: 33500 },
  ],
  Year: [
    { period: "Q1", value: 20, amount: 11000 },
    { period: "Q2", value: 38, amount: 16500 },
    { period: "Q3", value: 65, amount: 25000 },
    { period: "Q4", value: 98, amount: 38000 },
  ],
};

type PeriodType = keyof typeof dataByPeriod;

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
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>("Month");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const periodOptions: PeriodType[] = ["Month", "Week", "Year"];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get data for selected period
  const chartData = dataByPeriod[selectedPeriod];

  // Active data - first 3 periods only
  const activeData = [
    ...chartData.slice(0, 3),
    { ...chartData[3], value: null, amount: null }, // null to end the line
  ];

  // Calculate current percentage (from 3rd data point - currently active)
  const currentPercentage = chartData[2].value;

  console.log("SalesGoalChart - Selected period:", selectedPeriod);
  console.log("SalesGoalChart - Chart data:", chartData);
  console.log("SalesGoalChart - Current percentage:", currentPercentage);

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
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3 px-4 py-2.5 bg-[#F8F8FF] rounded-[20px] hover:bg-[#F0F0FF] transition-colors"
          >
            <span className="text-[#615E83] text-sm font-normal">
              {selectedPeriod}
            </span>
            <ChevronDownIcon
              size={16}
              className={`text-[#615E83] transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-[16px] shadow-lg border border-[rgba(21,21,21,0.1)] py-2 z-10">
              {periodOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSelectedPeriod(option);
                    setIsDropdownOpen(false);
                    console.log("Period changed to:", option);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                    selectedPeriod === option
                      ? "bg-[#F8F8FF] text-[#1D222E] font-medium"
                      : "text-[#615E83] hover:bg-[#F8F8FF]"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
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
            style={{ outline: "none" }}
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
