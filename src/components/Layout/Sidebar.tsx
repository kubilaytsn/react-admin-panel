import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  alpha,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useTheme,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  drawerWidth: number;
  selectedPage: string;
}

const Sidebar: React.FC<SidebarProps> = ({ drawerWidth }) => {
  const { t } = useTranslation();
  const theme = useTheme();

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
                `no-underline text-inherit block transition-all ${isActive ? 'border-l-4' : ''}`
              }
              style={({ isActive }) =>
                isActive
                  ? {
                      backgroundColor: alpha(theme.palette.primary.main, 0.05),
                      borderColor: theme.palette.primary.main,
                    }
                  : undefined
              }
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
