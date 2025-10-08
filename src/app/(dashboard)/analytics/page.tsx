import {
  SalesPerformanceChart,
  SalesByChannelChart,
  PopularCountriesChart,
} from "@/components/analytics";
import { StatsCardsRow } from "@/components/overview";
import { PageTitle } from "@/components/shared";

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
    <div className="min-h-screen p-6">
      <div className="max-w-[1400px] mx-auto">
        <PageTitle
          title="Analytics"
          description="Performance insights and trends for MIKFY"
        />

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
