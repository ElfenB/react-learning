import { Container, Typography } from '@mui/material';
import { Changelog } from './Changelog';

export function Thirteen() {
  const currentVersion = import.meta.env.VITE_PACKAGE_VERSION;

  return (
    <Container sx={{ position: 'relative' }}>
      <Typography sx={{ mb: 2 }} variant="h2">
        Changelog
      </Typography>

      <Typography sx={{ position: 'absolute', right: '2em', textAlign: 'right', top: '2em' }} variant="subtitle1">
        v{currentVersion}
      </Typography>

      <Changelog />
    </Container>
  );
}
