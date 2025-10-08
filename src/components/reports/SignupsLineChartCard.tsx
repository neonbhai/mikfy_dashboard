"use client";
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";

/**
 * SignupsLineChartCard
 * - two lines (lastMonth vs thisMonth)
 * - dashed horizontal gridlines and vertical separators for week boundaries
 * - header shows total signups and compact legend
 */
export default function SignupsLineChartCard() {
  // sample 28-day data (1..28)
  // day is numeric to allow ReferenceLine placement at week boundaries
  const data = [
    { day: 1, label: "1", lastMonth: 5400, thisMonth: 4700 },
    { day: 2, label: "2", lastMonth: 5200, thisMonth: 4300 },
    { day: 3, label: "3", lastMonth: 5000, thisMonth: 4800 },
    { day: 4, label: "4", lastMonth: 4800, thisMonth: 5200 },
    { day: 5, label: "5", lastMonth: 4600, thisMonth: 5100 },
    { day: 6, label: "6", lastMonth: 4400, thisMonth: 1200 },
    { day: 7, label: "7", lastMonth: 1200, thisMonth: 3100 },

    { day: 8, label: "8", lastMonth: 5200, thisMonth: 5000 },
    { day: 9, label: "9", lastMonth: 4800, thisMonth: 5300 },
    { day: 10, label: "10", lastMonth: 5200, thisMonth: 4700 },
    { day: 11, label: "11", lastMonth: 6000, thisMonth: 5100 },
    { day: 12, label: "12", lastMonth: 5200, thisMonth: 4800 },
    { day: 13, label: "13", lastMonth: 2100, thisMonth: 1200 },
    { day: 14, label: "14", lastMonth: 3300, thisMonth: 4300 },

    { day: 15, label: "15", lastMonth: 6100, thisMonth: 5600 },
    { day: 16, label: "16", lastMonth: 5300, thisMonth: 5900 },
    { day: 17, label: "17", lastMonth: 5800, thisMonth: 6400 },
    { day: 18, label: "18", lastMonth: 4900, thisMonth: 4200 },
    { day: 19, label: "19", lastMonth: 5400, thisMonth: 6000 },
    { day: 20, label: "20", lastMonth: 4600, thisMonth: 5100 },
    { day: 21, label: "21", lastMonth: 1200, thisMonth: 1400 },

    { day: 22, label: "22", lastMonth: 4300, thisMonth: 4800 },
    { day: 23, label: "23", lastMonth: 4200, thisMonth: 5200 },
    { day: 24, label: "24", lastMonth: 3900, thisMonth: 6100 },
    { day: 25, label: "25", lastMonth: 5200, thisMonth: 6800 },
    { day: 26, label: "26", lastMonth: 6200, thisMonth: 7200 },
    { day: 27, label: "27", lastMonth: 1300, thisMonth: 1900 },
    { day: 28, label: "28", lastMonth: 4900, thisMonth: 5200 },
  ];

  // total signups (thisMonth) displayed in header
  const totalThisMonth = data.reduce((s, d) => s + d.thisMonth, 0);

  // x-axis tick labels only at week starts (day: 1,8,15,22 -> Week 1..4)
  const weekTicks = [1, 8, 15, 22];

  const formatTick = (tick: number) => {
    const idx = weekTicks.indexOf(tick);
    if (idx >= 0) return `Week ${idx + 1}`;
    return "";
  };

  const kFormatter = (num: number) => {
    if (num >= 1000) return `${Math.round(num / 1000)}k`;
    return String(num);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 w-full">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm text-gray-500">Sign-ups</div>
          <div className="flex items-baseline space-x-3">
            <div className="text-2xl font-extrabold text-gray-900">
              {totalThisMonth.toLocaleString()}
            </div>
            <div className="text-sm text-gray-400">past 30 days</div>
          </div>
        </div>

        {/* compact legend */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: "#7C3AED" }}
            />
            <span className="text-sm text-gray-600">Last Month</span>
          </div>
          <div className="flex items-center space-x-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: "#F7C7D8" }}
            />
            <span className="text-sm text-gray-600">This Month</span>
          </div>
        </div>
      </div>

      <div className="h-64 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 8, right: 12, left: 0, bottom: 0 }}
          >
            {/* dashed horizontal grid lines */}
            <CartesianGrid
              strokeDasharray="4 6"
              vertical={false}
              stroke="#E6E6F0"
            />

            <XAxis
              dataKey="day"
              type="number"
              domain={[1, 28]}
              ticks={weekTicks}
              tickFormatter={formatTick}
              axisLine={false}
              tickLine={false}
              padding={{ left: 0, right: 0 }}
            />
            <YAxis
              tickFormatter={kFormatter}
              axisLine={false}
              tickLine={false}
            />

            {/* vertical separators at week boundaries */}
            <ReferenceLine x={8} stroke="#EFEFF5" strokeDasharray="4 6" />
            <ReferenceLine x={15} stroke="#EFEFF5" strokeDasharray="4 6" />
            <ReferenceLine x={22} stroke="#EFEFF5" strokeDasharray="4 6" />

            <Tooltip
              formatter={(value) =>
                new Intl.NumberFormat().format(Number(value))
              }
              labelFormatter={(label) => `Day ${label}`}
            />

            <Line
              type="monotone"
              dataKey="lastMonth"
              stroke="#7C3AED"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="thisMonth"
              stroke="#F7A8C6"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
