import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  Divider,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  drawerWidth: number;
  selectedPage: string;
}

const Sidebar: React.FC<SidebarProps> = ({ drawerWidth }) => {
  const { t } = useTranslation();

  const menuItems = [
    { text: t('dashboard'), path: '/dashboard', icon: <DashboardIcon /> },
    { text: t('users'), path: '/users', icon: <PeopleIcon /> },
    { text: t('settings'), path: '/settings', icon: <SettingsIcon /> },
  ];
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#fff',
          borderRight: '1px solid #e5e7eb',
        },
      }}
    >
      <Toolbar>
        <Box
          className="flex items-center flex-row space-x-2 mx-auto"
          color={'var(--mui-palette-primary-main)'}
        >
          <svg className="h-10" viewBox="0 0 152 43" fill="currentColor">
            <use xlinkHref="#admin-logo" />
          </svg>
        </Box>
      </Toolbar>

      <Divider />

      <Box sx={{ overflowY: 'auto' }}>
        <List>
          {menuItems.map((item) => (
            <NavLink
              key={item.text}
              to={item.path}
              className={({ isActive }) =>
                `no-underline text-inherit block transition-all ${
                  isActive ? 'bg-gray-100 border-l-4 border-blue-500' : ''
                }`
              }
              style={({ isActive }) => (isActive ? { borderColor: 'var(--' } : undefined)}
            >
              {({ isActive }) => (
                <ListItem disablePadding>
                  <ListItemButton className="transition-all hover:bg-gray-100 w-full">
                    <ListItemIcon
                      sx={{
                        minWidth: 40,
                        color: isActive ? 'var(--mui-palette-primary-main)' : '#2b2b2b',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={t(item.text)}
                      primaryTypographyProps={{
                        className: 'text-gray-700 text-sm font-medium',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              )}
            </NavLink>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
