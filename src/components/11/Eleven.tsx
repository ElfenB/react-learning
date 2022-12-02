import { Button, Typography } from '@mui/material';

export function Eleven() {
  return (
    <>
      <Typography variant="h2">This works! (More to come)</Typography>
      <Button variant="contained" onClick={() => alert('hi')}>
        Hello
      </Button>
    </>
  );
}
