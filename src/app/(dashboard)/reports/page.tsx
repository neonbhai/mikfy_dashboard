import { FinancialChart } from "@/components/reports";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#1D222E]">Financial Reports</h1>
        <p className="text-[#9291A5] mt-1">
          Track your sales and revenue performance
        </p>
      </div>

      <FinancialChart />
    </div>
  );
}
