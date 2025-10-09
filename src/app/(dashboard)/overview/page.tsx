import { NotificationPanel } from "@/components/notifications";
import { RecentOrders } from "@/components/orders";
import { BillingInvoice } from "@/components/billing";
import { StatsCardsRow } from "@/components/overview";
import { PageTitle } from "@/components/shared";

export default function OverviewPage() {
  const stats = [
    {
      title: "Total Revenue",
      value: "₩2,245,800",
      change: "+12.5% vs last month",
      isPositive: true,
      backgroundColor: "#E4F5FF",
    },
    {
      title: "Total Orders",
      value: "1,284",
      change: "+8.3% vs last month",
      isPositive: true,
      backgroundColor: "#FFF4E6",
    },
    {
      title: "Avg. Order Value",
      value: "₩19,150",
      change: "+4.2% vs last month",
      isPositive: true,
      backgroundColor: "#F0FFF4",
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "-0.8% vs last month",
      isPositive: false,
      backgroundColor: "#FFF0F5",
    },
  ];

  const secondaryStats = [
    {
      title: "Conversion Rate",
      value: "30.2%",
      change: "+12.5% vs last month",
      isPositive: true,
      backgroundColor: "#FFFFFF",
    },
    {
      title: "Avg. Order Value",
      value: "₩189,000",
      change: "+12.5% vs last month",
      isPositive: true,
      backgroundColor: "#FFFFFF",
    },
    {
      title: "Return Rate",
      value: "2.1%",
      change: "-2.5% vs last month",
      isPositive: false,
      backgroundColor: "#FFFFFF",
    },
    {
      title: "Customer Satisfaction",
      value: "4.8/5",
      change: "+12.5% vs last month",
      isPositive: true,
      backgroundColor: "#FFFFFF",
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-[1600px] mx-auto">
        <PageTitle
          title="Overview"
          description="Welcome back! Here's what's happening with MIKFY today."
        />
      </div>

      {/* Stats Cards */}
      <StatsCardsRow stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1600px] mx-auto">
        {/* Left Side - Notifications */}
        <div className="w-full">
          <NotificationPanel />
        </div>

        {/* Right Side - Recent Orders */}
        <div className="w-full">
          <RecentOrders />
        </div>
      </div>

      <div className="mt-6">
        <StatsCardsRow stats={secondaryStats} />
      </div>

      {/* Billing & Invoice Section */}
      <div className="mt-6 max-w-[1600px] mx-auto">
        <BillingInvoice />
      </div>
    </div>
  );
}
