import { StatCard } from "./StatCard";

interface StatData {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  backgroundColor?: string;
}

interface StatsCardsRowProps {
  stats: StatData[];
}

export function StatsCardsRow({ stats }: StatsCardsRowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 xl:gap-6 max-w-[1600px] mx-auto mb-6">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          isPositive={stat.isPositive}
          backgroundColor={stat.backgroundColor}
        />
      ))}
    </div>
  );
}
