import { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Changelog } from './Changelog';
import { Header } from './Header';

export function Thirteen() {
  const [inputValue, setInputValue] = useState('');

  return (
    <Box>
      <Header
        handleInputChange={(v) => {
          setInputValue(v);
        }}
        sx={{ mb: 3, position: 'sticky', top: 0, zIndex: 1 }}
      />

      <Container sx={{ pb: 3, position: 'relative' }}>
        <Changelog cutOff={inputValue} />
      </Container>

      <Typography sx={{ color: 'text.secondary', pb: 2, textAlign: 'center' }} variant="body2">
        ©2024 Benjamin Elfen - v{import.meta.env.VITE_PACKAGE_VERSION}
      </Typography>
    </Box>
  );
}
