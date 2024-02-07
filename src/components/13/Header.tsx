import { useMemo, useState } from 'react';
import type { SxProps, Theme } from '@mui/material';
import { Box, Container, TextField, Typography } from '@mui/material';
import { getIsVersionValid } from './Changelog.utils';

type Props = {
  handleInputChange: (newVal: string) => void;
  sx?: SxProps<Theme>;
};

export function Header({ handleInputChange, sx }: Props) {
  const [tempVal, setTempVal] = useState('');

  const currentVersion = import.meta.env.VITE_PACKAGE_VERSION;

  const isValidVersion = useMemo(() => (tempVal === '' ? true : getIsVersionValid(tempVal)), [tempVal]);

  return (
    <Box sx={{ background: '#fafafa', boxShadow: '0px 2px 3px 0px rgba(99, 99, 99, 0.2)', py: 2, ...sx }}>
      <Container sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
        <Typography flex={1} variant="h3">
          Changelog
        </Typography>

        <TextField
          error={!isValidVersion}
          placeholder="Filter version number"
          sx={{ my: 2 }}
          onChange={(e) => {
            handleInputChange(e.target.value);
            setTempVal(e.target.value);
          }}
        />

        <Typography sx={{ flex: 1, textAlign: 'right' }} variant="subtitle1">
          v{currentVersion}
        </Typography>
      </Container>
    </Box>
  );
}
