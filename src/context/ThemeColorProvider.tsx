import React, { createContext, useMemo, useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import type { PaletteOptions } from '@mui/material';

interface ThemeColorContextType {
  color: string;
  setColor: (color: string) => void;
}

const ThemeColorContext = createContext<ThemeColorContextType | undefined>(undefined);

export const ThemeColorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [color, setColor] = useState('#f25757');

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
