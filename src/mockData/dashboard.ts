import { type TFunction } from "i18next";

export interface KPIData {
  totalUsers: number;
  totalSales: number;
  newMessages: number;
}

export interface ChartDataPoint {
  day: string;
  revenue: number;
}

export const kpiData: KPIData = {
  totalUsers: 1280,
  totalSales: 53200,
  newMessages: 24,
};

export const getRevenueChartData = (t: TFunction): ChartDataPoint[] => [
  { day: t("day.mon"), revenue: 5000 },
  { day: t("day.tue"), revenue: 7000 },
  { day: t("day.wed"), revenue: 6000 },
  { day: t("day.thu"), revenue: 8000 },
  { day: t("day.fri"), revenue: 7500 },
  { day: t("day.sat"), revenue: 9000 },
  { day: t("day.sun"), revenue: 8500 },
];

export const pieChartData = [
  { name: "Group A", value: 400, fill: "#0088FE" },
  { name: "Group B", value: 300, fill: "#00C49F" },
  { name: "Group C", value: 300, fill: "#FFBB28" },
  { name: "Group D", value: 200, fill: "#FF8042" },
];
