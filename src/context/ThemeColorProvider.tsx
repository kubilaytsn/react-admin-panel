import type { PaletteOptions } from '@mui/material';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { createContext, useEffect, useMemo, useState } from 'react';

interface ThemeColorContextType {
  color: string;
  setColor: (color: string) => void;
}

const ThemeColorContext = createContext<ThemeColorContextType | undefined>(undefined);

export const ThemeColorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [color, setColor] = useState(window.localStorage.getItem('themeColor') || '#f25757');

  const theme = useMemo(
    () =>
      createTheme({
        cssVariables: true,
        palette: {
          primary: { main: color },
        } as PaletteOptions,
      }),
    [color],
  );
  useEffect(() => {
    window.localStorage.setItem('themeColor', color);
  }, [color]);

  return (
    <ThemeColorContext.Provider value={{ color, setColor }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeColorContext.Provider>
  );
};

export { ThemeColorContext };
