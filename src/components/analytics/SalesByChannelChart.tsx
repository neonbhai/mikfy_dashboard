"use client";

import { useMemo, useState } from "react";
import AnalyticsCardHeader from "./AnalyticsCardHeader";

type TabOption = "Monthly" | "Annually";

interface ChannelData {
  name: string;
  value: string; // formatted with commas
  barColor: string;
}

export default function SalesByChannelChart() {
  const [activeTab, setActiveTab] = useState<TabOption>("Annually");

  const channels: ChannelData[] = useMemo(() => [
    { name: "Instagram", value: "121,799", barColor: "#4A3AFF" },
    { name: "Facebook", value: "50,799", barColor: "#962DFF" },
    { name: "Twitter", value: "25,567", barColor: "#E0C6FD" },
    { name: "Google", value: "5,789", barColor: "#C6D2FD" },
  ], []);

  const numericValues = useMemo(
    () => channels.map((c) => Number(c.value.replace(/,/g, ""))),
    [channels]
  );

  // Cap the axis at 150k to match design while remaining responsive
  const axisMax = 150000;
  const ticks = [0, 25000, 50000, 75000, 150000];

  const percentOfAxis = (value: number) =>
    Math.min(100, (value / axisMax) * 100);

  return (
    <div className="w-full max-w-[510px] bg-white border border-[rgba(21,21,21,0.1)] rounded-[20px] p-6">
      <AnalyticsCardHeader
        title="Sales By Channel"
        options={["Monthly", "Annually"] as const}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        className="mb-2"
      />

      <div className="grid grid-cols-[auto_1fr_auto] gap-x-6">
        <div className="flex flex-col gap-6 pt-2">
          {channels.map((c) => (
            <p key={c.name} className="text-sm text-[#615E83] leading-none">
              {c.name}
            </p>
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-x-0 top-0 bottom-10">
            {ticks.map((t, idx) =>
              idx === 0 ? null : (
                <div
                  key={t}
                  className="absolute top-0 bottom-0 border-r border-dashed"
                  style={{
                    right: `${100 - percentOfAxis(t)}%`,
                    borderColor: "#E5E5EF",
                  }}
                />
              )
            )}
          </div>

          <div className="flex flex-col gap-6 relative pt-2">
            {channels.map((c, idx) => {
              const value = numericValues[idx];
              const widthPercent = percentOfAxis(value);
              return (
                <div key={c.name} className="flex items-center">
                  <div className="relative h-[12px] w-full rounded-[6px] bg-[#F8F8FF] overflow-hidden">
                    <div
                      className="h-full rounded-[6px]"
                      style={{
                        width: `${widthPercent}%`,
                        backgroundColor: c.barColor,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid grid-cols-5 text-sm text-[#615E83]">
            {ticks.map((t) => (
              <span key={t} className="text-center">
                {t === 0 ? "0" : t === 150000 ? "150k" : `${t / 1000}k`}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-2">
          {channels.map((c, idx) => (
            <p
              key={c.name}
              className="text-xs font-medium text-right"
              style={{ color: idx === 0 ? "#4A3AFF" : "#615E83" }}
            >
              {c.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
