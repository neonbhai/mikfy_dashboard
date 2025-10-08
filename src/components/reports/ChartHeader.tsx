import { TabOption } from "./chartData";
import GrowthIndicator from "./GrowthIndicator";

interface ChartHeaderProps {
  totalSales: number;
  activeTab: TabOption;
  onTabChange: (tab: TabOption) => void;
  year?: string;
  growthPercentage?: number;
}

export default function ChartHeader({
  totalSales,
  activeTab,
  onTabChange,
  year = "2022",
  growthPercentage = 1.3,
}: ChartHeaderProps) {
  const tabs: TabOption[] = ["Daily", "Weekly", "Annually"];

  return (
    <div className="flex justify-between items-start mb-8">
      {/* Card Info */}
      <div>
        <p className="text-[#9291A5] text-lg">Sales {year}</p>
        <h2 className="text-[#1D222E] text-[32px] font-bold mt-1">
          ${(totalSales / 1000).toFixed(1)}k
        </h2>
        <div className="mt-4">
          <GrowthIndicator percentage={growthPercentage} isPositive />
        </div>
      </div>

      {/* Tab Filters */}
      <div className="bg-[#F8F8FF] rounded-[14.77px] p-1.5 flex gap-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`px-4 py-2.5 rounded-[13px] text-sm font-medium transition-all ${
              activeTab === tab
                ? "bg-[#1D222E] text-white"
                : "bg-transparent text-[#9291A5] hover:text-[#1D222E]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
