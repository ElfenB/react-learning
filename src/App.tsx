import { CssBaseline, PaletteMode, ThemeProvider, useMediaQuery } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect, useMemo, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { getTheme } from './theme';

export function App() {
  // TODO: Move into Redux state and add button that can set this
  // TODO: Then put it into localStorage so it remembers the last setting
  const [mode, setMode] = useState<PaletteMode>('light');

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const theme = useMemo(() => getTheme(mode), [mode]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        {/* Collection of CSS style-normalizations */}
        <CssBaseline />
        {/* TanStack Query DevTools */}
        <ReactQueryDevtools />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
