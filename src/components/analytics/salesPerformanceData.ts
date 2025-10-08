export type TabOption = "Daily" | "Weekly" | "Monthly";

export interface SalesData {
  day: string;
  usa: number;
  canada: number;
  uk: number;
  australia: number;
}

// Sample data for different time periods with 4 categories
export const weeklyData: SalesData[] = [
  {
    day: "MON",
    usa: 120000,
    canada: 280000,
    uk: 700000,
    australia: 180000,
  },
  {
    day: "TUE",
    usa: 80000,
    canada: 70000,
    uk: 150000,
    australia: 20000,
  },
  {
    day: "WED",
    usa: 90000,
    canada: 480000,
    uk: 220000,
    australia: 250000,
  },
  {
    day: "THU",
    usa: 90000,
    canada: 65000,
    uk: 120000,
    australia: 30000,
  },
  {
    day: "FRI",
    usa: 10000,
    canada: 25000,
    uk: 60000,
    australia: 20000,
  },
  {
    day: "SAT",
    usa: 400000,
    canada: 160000,
    uk: 300000,
    australia: 200000,
  },
  {
    day: "SUN",
    usa: 520000,
    canada: 180000,
    uk: 260000,
    australia: 50000,
  },
];

export const dailyData: SalesData[] = [
  {
    day: "12AM",
    usa: 50000,
    canada: 120000,
    uk: 80000,
    australia: 40000,
  },
  {
    day: "4AM",
    usa: 30000,
    canada: 80000,
    uk: 60000,
    australia: 20000,
  },
  {
    day: "8AM",
    usa: 150000,
    canada: 200000,
    uk: 120000,
    australia: 80000,
  },
  {
    day: "12PM",
    usa: 280000,
    canada: 320000,
    uk: 220000,
    australia: 150000,
  },
  {
    day: "4PM",
    usa: 380000,
    canada: 420000,
    uk: 280000,
    australia: 200000,
  },
  {
    day: "8PM",
    usa: 220000,
    canada: 260000,
    uk: 180000,
    australia: 120000,
  },
  {
    day: "11PM",
    usa: 120000,
    canada: 150000,
    uk: 100000,
    australia: 60000,
  },
];

export const monthlyData: SalesData[] = [
  {
    day: "Week 1",
    usa: 320000,
    canada: 450000,
    uk: 700000,
    australia: 210000,
  },
  {
    day: "Week 2",
    usa: 480000,
    canada: 520000,
    uk: 800000,
    australia: 260000,
  },
  {
    day: "Week 3",
    usa: 600000,
    canada: 580000,
    uk: 900000,
    australia: 300000,
  },
  {
    day: "Week 4",
    usa: 720000,
    canada: 640000,
    uk: 1000000,
    australia: 340000,
  },
  {
    day: "Week 5",
    usa: 850000,
    canada: 720000,
    uk: 1100000,
    australia: 380000,
  },
  {
    day: "Week 6",
    usa: 930000,
    canada: 780000,
    uk: 1150000,
    australia: 420000,
  },
  {
    day: "Week 7",
    usa: 1000000,
    canada: 840000,
    uk: 1200000,
    australia: 450000,
  },
];

