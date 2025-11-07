import { http, HttpResponse } from "msw";

export const dashboardHandlers = [
  http.get("/api/dashboard", () => {
    return HttpResponse.json({
      kpiData: {
        totalUsers: 1280,
        totalSales: 53200,
        newMessages: 24,
      },
      pieChartData: [
        { name: "Group A", value: 400, fill: "#0088FE" },
        { name: "Group B", value: 300, fill: "#00C49F" },
        { name: "Group C", value: 300, fill: "#FFBB28" },
        { name: "Group D", value: 200, fill: "#FF8042" },
      ],
      chartsData: [
        { day: "2020", revenue: 5000 },
        { day: "2021", revenue: 7000 },
        { day: "2022", revenue: 6000 },
        { day: "2023", revenue: 8000 },
        { day: "2024", revenue: 7500 },
        { day: "2025", revenue: 9000 },
        { day: "2026", revenue: 8500 },
      ],
      users: [
        { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
        { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
        { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
        { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
        { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 25 },
        { id: 6, lastName: "Melisandre", firstName: "Cadı", age: 150 },
        { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
        { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
        { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
      ],
    });
  }),
];
