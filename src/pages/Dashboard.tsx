import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  CircularProgress,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
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

import { DashboardService } from "../api/services/dashboard.service";

const Dashboard: React.FC = () => {
  const { t } = useTranslation();

  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const paginationModel = { page: 0, pageSize: 5 };

  const columns: any[] = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "firstName", headerName: "First name", flex: 1 },
    { field: "lastName", headerName: "Last name", flex: 1 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      flex: 1,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 1,
      valueGetter: (__value: any, row: any) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
  ];

  useEffect(() => {
    DashboardService.getDashboard().then((res: any) => {
      if (res.data) {
        setData(res.data);
        setLoading(false);
      }
    });
  }, []);

  return !loading ? (
    <Box sx={{ p: 2 }} display={"flex"} flexDirection={"column"} gap={2}>
      <Grid container spacing={2}>
        <Grid size="grow">
          <Card elevation={0}>
            <CardContent>
              <Typography variant="subtitle2" gutterBottom>
                {t("totalUsers")}
              </Typography>
              <Typography variant="h5" color="primary">
                {data.kpiData.totalUsers}
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
                {data.kpiData.totalSales}
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
                {data.kpiData.newMessages}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid size="grow">
          <Card elevation={0}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {t("weeklyRevenue")}
              </Typography>
              <ResponsiveContainer width="100%" height={240}>
                <LineChart data={data.chartsData}>
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
                  {t("annualDistribution")}
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
                      data={data.pieChartData}
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
                        data.pieChartData.reduce(
                          (sum: any, item: any) => sum + item.value,
                          0
                        )}
                    </Label>
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Card elevation={0} sx={{ flex: 1 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Kullanıcılar
            </Typography>

            <DataGrid
              rows={data.users}
              columns={columns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              sx={{ border: 0, width: "100%" }}
            />
          </CardContent>
        </Card>
      </Grid>
    </Box>
  ) : (
    <Box
      sx={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Dashboard;
