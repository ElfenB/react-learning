import type { PaletteMode } from '@mui/material';
import type { PaletteOptions } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: PaletteMode) => {
  const theme = createTheme({
    palette: getMuiPalette(mode),
    typography: {
      fontFamily: ['Inter'].join(','),
    },
  });
  return theme;
};

// Be careful when changing, css variables in index.css might differ
function getMuiPalette(mode: PaletteMode): PaletteOptions {
  const dark = {
    background: {
      default: '#242424',
      paper: '#242424',
    },
    mode: mode,
    primary: { main: '#ffa500' },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'gray',
    },
  };
  const light = {
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    mode: mode,
    primary: { main: '#ffa500' },
    text: {
      primary: '#213547',
      secondary: 'gray',
    },
  };
  return mode === 'light' ? light : dark;
}
