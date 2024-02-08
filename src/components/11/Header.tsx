import type { SxProps, Theme } from '@mui/material';
import { Box, Container, Typography } from '@mui/material';

type Props = {
  sx?: SxProps<Theme>;
};

export function Header({ sx }: Props) {
  const currentVersion = import.meta.env.VITE_PACKAGE_VERSION;

  return (
    <Box sx={{ background: '#fafafa', boxShadow: '0px 2px 3px 0px rgba(99, 99, 99, 0.2)', py: 2, ...sx }}>
      <Container sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4">React Router: loading data</Typography>

        <Typography sx={{ textAlign: 'right' }} variant="subtitle1">
          v{currentVersion}
        </Typography>
      </Container>
    </Box>
  );
}
