import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: 'var(--background-color)',
      paper: 'var(--background-color)',
    },
    text: {
      primary: 'var(--color)',
      secondary: 'var(--text-shade)',
    },
  },
  typography: {
    fontFamily: ['Inter'].join(','),
  },
});
