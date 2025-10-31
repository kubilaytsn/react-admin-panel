import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Settings from "../pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" />,
        handle: { title: "Dashboard" },
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        handle: { title: "Dashboard" },
      },
      {
        path: "users",
        element: <Users />,
        handle: { title: "Users" },
      },
      {
        path: "settings",
        element: <Settings />,
        handle: { title: "Settings" },
      },
    ],
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
