import { api } from "../client";

export const DashboardService = {
  getDashboard: () => api.get("/dashboard"),
  getUsers: () => api.get("/users"),
};
