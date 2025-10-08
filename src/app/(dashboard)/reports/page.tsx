import {
  FinancialChart,
  SalesGoalChart,
  DonutChartCard,
  SignupsLineChartCard,
} from "@/components/reports";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-normal text-[#1D222E]">
          Financial Reports
        </h1>
        <p className="text-[#9291A5] mt-1">
          Revenue, profit analysis and financial insights
        </p>
      </div>

      <FinancialChart />

      <div className="flex flex-col lg:flex-row gap-6 my-6">
        <SalesGoalChart />
        <DonutChartCard />
      </div>

      <SignupsLineChartCard />
    </div>
  );
}
