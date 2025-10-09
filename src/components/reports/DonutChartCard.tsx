"use client";
import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Sector } from "recharts";

/**
 * DonutChartCard
 * - uses Pie with innerRadius/outerRadius, paddingAngle and cornerRadius for rounded segments & gaps
 * - draws % label inside the slice
 */
export default function DonutChartCard() {
  const slices = [
    { name: "Approved", value: 410, color: "#4C6EF5" }, // blue
    { name: "Pending", value: 142, color: "#E9D7FF" }, // light purple
    { name: "Under review", value: 340, color: "#8B5CF6" }, // purple
    { name: "Rejected", value: 590, color: "#D9E6FF" }, // pale blue
  ];

  // Custom active shape for hover effect - scales the slice outward
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderActiveShape = (props: any) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      percent,
      cornerRadius,
    } = props;

    const RAD = Math.PI / 180;
    const midAngle = (startAngle + endAngle) / 2;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
    const x = cx + radius * Math.cos(-midAngle * RAD);
    const y = cy + radius * Math.sin(-midAngle * RAD);

    const pct = Math.round(percent * 100);

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 8} // Scale outward by 8px
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          cornerRadius={cornerRadius}
        />
        <text
          x={x}
          y={y}
          fill="#fff"
          fontSize={14}
          fontWeight={700}
          textAnchor="middle"
          dominantBaseline="central"
          pointerEvents="none"
        >
          {pct}%
        </text>
      </g>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 w-full">
      <div className="text-sm text-gray-400">Statistics</div>
      <div className="text-xl font-semibold text-gray-800 mb-4">
        Monthly activity
      </div>

      <div className="relative h-64 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={slices}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={72}
              outerRadius={110}
              startAngle={90}
              endAngle={-270}
              paddingAngle={6} // space between segments
              cornerRadius={10} // rounded ends
              labelLine={false} // Disable connector lines
              activeShape={renderActiveShape} // Scale slice on hover - shows label on hover
            >
              {slices.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center metric */}
        <div className="absolute flex flex-col items-center z-1">
          <div className="text-3xl font-extrabold text-gray-900">1.05</div>
          <div className="text-sm text-gray-400">Average range</div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 space-y-3">
        {slices.map((s) => (
          <div key={s.name} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span
                style={{ background: s.color }}
                className="w-3 h-3 rounded-full inline-block"
              />
              <span className="text-sm text-gray-700">{s.name}</span>
            </div>
            <div className="text-sm text-gray-400">{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
