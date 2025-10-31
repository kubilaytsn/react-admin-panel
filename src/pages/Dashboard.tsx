import React from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Label,
} from "recharts";
import {
  getRevenueChartData,
  kpiData,
  pieChartData,
} from "../mockData/dashboard";

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const chartData = getRevenueChartData(t);

  return (
    <Box sx={{ p: 2 }} display={"flex"} flexDirection={"column"} gap={2}>
      <Grid container spacing={2}>
        <Grid size="grow">
          <Card elevation={0}>
            <CardContent>
              <Typography variant="subtitle2" gutterBottom>
                {t("totalUsers")}
              </Typography>
              <Typography variant="h5" color="primary">
                {kpiData.totalUsers}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size="grow">
          <Card elevation={0}>
            <CardContent>
              <Typography variant="subtitle2" gutterBottom>
                {t("totalSales")}
              </Typography>
              <Typography variant="h5" color="primary">
                {kpiData.totalSales}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size="grow">
          <Card elevation={0}>
            <CardContent>
              <Typography variant="subtitle2" gutterBottom>
                {t("newMessages")}
              </Typography>
              <Typography variant="h5" color="primary">
                {kpiData.newMessages}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid size="grow">
          <Card elevation={0}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {t("weeklyRevenue")}
              </Typography>
              <ResponsiveContainer width="100%" height={240}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />

                  <YAxis
                    tickFormatter={(value) => `$${value}`}
                    type="number"
                    label={{
                      value: t("revenue"),
                      style: { textAnchor: "middle" },
                      angle: -90,
                      position: "left",
                      offset: 0,
                    }}
                    allowDataOverflow
                    width="auto"
                  />
                  <Tooltip
                    formatter={(value: number) => [`$${value}`, t("revenue")]}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="var(--mui-palette-primary-main)"
                    style={{ outline: "none" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid size="grow">
          <Box>
            <Card elevation={0}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {t("weeklyRevenue")}
                </Typography>
                <ResponsiveContainer width={240} height={240}>
                  <PieChart
                    style={{
                      width: "100%",
                      maxHeight: "240px",
                      aspectRatio: 2,
                    }}
                    responsive
                  >
                    <Pie
                      data={pieChartData}
                      innerRadius="80%"
                      outerRadius="100%"
                      // Corner radius is the rounded edge of each pie slice
                      cornerRadius="100%"
                      fill="#8884d8"
                      // padding angle is the gap between each pie slice
                      paddingAngle={5}
                      dataKey="value"
                      isAnimationActive={true}
                      style={{ outline: "none" }}
                    />

                    <Tooltip
                      formatter={(value: number) => [`$${value}`, t("revenue")]}
                    />
                    <Label position="center" fill="#666" fontSize={"36"}>
                      {"$" +
                        pieChartData.reduce((sum, item) => sum + item.value, 0)}
                    </Label>
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
