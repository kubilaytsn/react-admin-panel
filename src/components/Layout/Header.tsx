import ColorizeIcon from '@mui/icons-material/Colorize';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  IconButton,
  InputBase,
  ListItemIcon,
  Menu,
  MenuItem,
  MenuItem as MUIMenuItem,
  Select,
  Toolbar,
  Typography,
  type SelectChangeEvent,
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useThemeColor } from '../../hooks/useThemeColor';
import { debounce } from '../../utils/debounce';

interface HeaderProps {
  drawerWidth: number;
  selectedPage: string;
}

const Header: React.FC<HeaderProps> = ({ drawerWidth, selectedPage }) => {
  const { i18n, t } = useTranslation();
  const { color, setColor } = useThemeColor();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const tempColorRef = React.useRef(color);

  const debouncedHandleColor = React.useMemo(
    () =>
      debounce((value: string) => {
        setColor(value); // burada state update
        tempColorRef.current = value;
      }, 200), // 200ms debounce
    [],
  );

  const handleChange = (event: SelectChangeEvent) => {
    const newLang = event.target.value as string;
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

  const handleColor = (newColor: string) => {
    setColor(newColor);
  };

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    handleMenuClose();
  };

  const handleLogout = () => {
    handleMenuClose();
  };

  const currentLang = i18n.language || 'en';

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        backgroundColor: '#fff',
        overflow: 'hidden',
        ml: `${drawerWidth}px`,
        borderBottom: '1px #e5e7eb solid',
      }}
    >
      <Toolbar
        className="bg-white text-black"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6" noWrap component="div">
          {t(selectedPage.toLowerCase())}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            position="relative"
            width={36}
            height={36}
            borderRadius={'8px'}
            overflow={'hidden'}
            border={'solid 4px #f0f0f0'}
            bgcolor={'#000'}
          >
            <InputBase
              type="color"
              value={tempColorRef.current}
              onChange={(e) => {
                const value = e.target.value;
                tempColorRef.current = value; // sadece ref update, render yok
                debouncedHandleColor(value); // debounced state update
              }}
              onBlur={(e: any) => {
                handleColor(e.target.value);
              }}
              sx={{
                height: '200% !important',
                width: '200% !important',
                padding: 0,
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '-50%',
                right: 0,
                margin: 'auto',
                '& .MuiInputBase-input': {
                  height: '100%',
                  cursor: 'pointer',
                },
                '& .MuiInputBase-input:hover': {
                  opacity: 0.9,
                },
              }}
            />
            <ColorizeIcon
              sx={{
                fontSize: 16,
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                margin: 'auto',
                zIndex: 2,
                color: '#fff',
                pointerEvents: 'none',
              }}
            />
          </Box>

          <Select
            variant="filled"
            value={currentLang}
            onChange={handleChange}
            size="small"
            disableUnderline
            sx={{
              minWidth: 120,
              backgroundColor: '#f0f0f0',
              borderRadius: '8px',
              '& .MuiSelect-select': {
                padding: '8px 14px',
                display: 'flex',
                alignItems: 'center',
              },
            }}
          >
            <MenuItem value="en">
              <span style={{ marginRight: 8 }}>🇬🇧</span>
              {t('en')}
            </MenuItem>
            <MenuItem value="tr">
              <span style={{ marginRight: 8 }}>🇹🇷</span>
              {t('tr')}
            </MenuItem>
          </Select>

          <Box
            onClick={handleAvatarClick}
            display={'flex'}
            alignItems={'center'}
            sx={{ cursor: 'pointer' }}
          >
            <IconButton size="small">
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  fontSize: 12,
                  bgcolor: 'var(--mui-palette-primary-main)',
                }}
                alt="Kubilay Tosun"
              >
                KT
              </Avatar>
            </IconButton>
            <Typography fontWeight={'500'}>Kubilay Tosun</Typography>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MUIMenuItem onClick={handleProfile}>
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              {t('profile')}
            </MUIMenuItem>
            <Divider />
            <MUIMenuItem onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              {t('logout')}
            </MUIMenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
