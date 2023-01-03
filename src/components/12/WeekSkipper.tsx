import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button, Tooltip } from '@mui/material';

type Props = {
  direction: 'back' | 'forward';
  onClick: () => void;
};

export function WeekSkipper({ direction, onClick }: Props) {
  return (
    <Tooltip
      placement={direction === 'back' ? 'left' : 'right'}
      title={direction === 'back' ? '1 Woche zurück' : '1 Woche vor'}
    >
      <Button sx={{color: 'primary.main'}} onClick={onClick}>
        {direction === 'back' && <ArrowBackIosNewIcon />}
        {direction === 'forward' && <ArrowForwardIosIcon />}
      </Button>
    </Tooltip>
  );
}
