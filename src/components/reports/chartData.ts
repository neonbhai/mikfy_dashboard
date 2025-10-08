export const monthlyData = [
  { month: "JAN", value: 2800, sales: 1120 },
  { month: "FEB", value: 3200, sales: 1280 },
  { month: "MAR", value: 2400, sales: 960 },
  { month: "APR", value: 3800, sales: 1520 },
  { month: "MAY", value: 3000, sales: 1200 },
  { month: "JUN", value: 4200, sales: 1680 },
  { month: "JUL", value: 3348, sales: 1348 },
  { month: "AUG", value: 3900, sales: 1560 },
  { month: "SEP", value: 2900, sales: 1160 },
  { month: "OCT", value: 4500, sales: 1800 },
  { month: "NOV", value: 3700, sales: 1480 },
  { month: "DEC", value: 4100, sales: 1640 },
];

export const weeklyData = [
  { month: "Week 1", value: 3200, sales: 1280 },
  { month: "Week 2", value: 2800, sales: 1120 },
  { month: "Week 3", value: 3800, sales: 1520 },
  { month: "Week 4", value: 4200, sales: 1680 },
];

export const dailyData = [
  { month: "Mon", value: 3200, sales: 1280 },
  { month: "Tue", value: 2800, sales: 1120 },
  { month: "Wed", value: 3800, sales: 1520 },
  { month: "Thu", value: 4200, sales: 1680 },
  { month: "Fri", value: 3900, sales: 1560 },
  { month: "Sat", value: 2900, sales: 1160 },
  { month: "Sun", value: 3400, sales: 1360 },
];

export type TabOption = "Daily" | "Weekly" | "Annually";

export interface ChartDataPoint {
  month: string;
  value: number;
  sales: number;
}

