import {
  SalesPerformanceChart,
  SalesByChannelChart,
  PopularCountriesChart,
} from "@/components/analytics";
import { StatsCardsRow } from "@/components/overview";

export default function AnalyticsPage() {
  const analyticsStats = [
    {
      title: "Total Sessions",
      value: "12,847",
      change: "+18.2% vs last month",
      isPositive: true,
      backgroundColor: "#F0E6FF",
    },
    {
      title: "Page Views",
      value: "45,923",
      change: "+22.1% vs last month",
      isPositive: true,
      backgroundColor: "#E6F7FF",
    },
    {
      title: "Bounce Rate",
      value: "42.8%",
      change: "-3.4% vs last month",
      isPositive: true,
      backgroundColor: "#E6FFE9",
    },
    {
      title: "Avg. Session Duration",
      value: "3m 24s",
      change: "+15.6% vs last month",
      isPositive: true,
      backgroundColor: "#FFE6F0",
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-[#F8F9FA]">
      <div className="max-w-[1400px] mx-auto">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#1E1B39]">Analytics</h1>
          <p className="text-[#615E83] mt-2">
            Performance insights and trends for MIKFY
          </p>
        </div>

        {/* Stats Cards */}
        <StatsCardsRow stats={analyticsStats} />

        {/* Charts Grid */}
        <div className="grid grid-cols-1 gap-6">
          {/* Sales Performance Chart - Full Width */}
          <div className="w-full">
            <SalesPerformanceChart />
          </div>

          {/* Bottom Row - Two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-[510px_287px] gap-6">
            <SalesByChannelChart />
            <PopularCountriesChart />
          </div>
        </div>
      </div>
    </div>
  );
}
