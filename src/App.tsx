import { CssBaseline } from '@mui/material';
import './App.css';
import AppRouter from './routes/router';

import SvgSprite from './components/SpriteSVG';
import { ThemeColorProvider } from './context/ThemeColorProvider';

function App() {
  return (
    <ThemeColorProvider>
      <CssBaseline />
      <AppRouter />
      <SvgSprite />
    </ThemeColorProvider>
  );
}

export default App;
