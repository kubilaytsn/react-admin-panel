import React from 'react';
import { Box, Toolbar } from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet, useMatches } from 'react-router-dom';

interface RouteHandle {
  title?: string;
}

const drawerWidth = 240;

const Layout: React.FC = () => {
  const matches = useMatches();

  const currentMatch = [...matches].reverse().find((m) => (m.handle as RouteHandle)?.title);

  const selectedPageTitle = (currentMatch?.handle as RouteHandle)?.title || 'Dashboard';

  return (
    <Box sx={{ display: 'flex' }} className="font-sans">
      <Header drawerWidth={drawerWidth} selectedPage={selectedPageTitle} />
      <Sidebar drawerWidth={drawerWidth} selectedPage={selectedPageTitle} />
      <Box component="main" sx={{ p: 3 }} className="bg-gray-100 min-h-screen w-full">
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
