import { Fade, LinearProgress } from '@mui/material';
import { Box } from '@mui/system';

type Props = {
  delayMs: number;
  loading: boolean;
};

export function DelayedSpinner({ delayMs, loading }: Props) {
  return (
    // Set fixed height for no movement when transitioning
    <Box sx={{ height: 2, m: 1 }}>
      <Fade
        in={loading}
        style={{
          transitionDelay: loading ? `${delayMs}ms` : '0ms',
        }}
        unmountOnExit
      >
        {/* Empty Box is alternative when not loading so that height does not bug around */}
        {loading ? <LinearProgress /> : <Box />}
      </Fade>
    </Box>
  );
}
