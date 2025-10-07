import { NotificationPanel } from "@/components/notifications";
import { RecentOrders } from "@/components/orders";
import { BillingInvoice } from "@/components/billing";

export default function OverviewPage() {
  return (
    <div className="min-h-screen p-6">
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

      {/* Billing & Invoice Section */}
      <div className="mt-6 max-w-[1600px] mx-auto">
        <BillingInvoice />
      </div>
    </div>
  );
}
