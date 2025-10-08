import {
  FinancialChart,
  SalesGoalChart,
  DonutChartCard,
  SignupsLineChartCard,
} from "@/components/reports";
import { PageTitle } from "@/components/shared";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] p-6">
      <PageTitle
        title="Financial Reports"
        description="Revenue, profit analysis and financial insights"
      />

      <FinancialChart />

      <div className="flex flex-col lg:flex-row gap-6 my-6">
        <SalesGoalChart />
        <DonutChartCard />
      </div>

      <SignupsLineChartCard />
    </div>
  );
}
