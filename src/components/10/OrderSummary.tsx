import { Box, Button, SxProps, Theme, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectDistinctNumOfItems, selectTotalAmount } from '../redux/features/cart/cart.selectors';

import { RootState } from '../redux/store';

const sx: Record<string, SxProps<Theme>> = {
  backdropClicker: {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  complete: {
    bottom: '1rem',
    left: '40%',
    position: 'absolute',
  },
  component: {
    alignItems: 'center',
    border: '1px solid red',
    display: 'flex',
    height: '110vh',
    justifyContent: 'center',
    left: '-5vw',
    position: 'fixed',
    top: '-5vh',
    width: '110vw',
  },
  heading: {
    marginTop: 0,
  },
  modal: {
    background: 'var(--background-color)',
    borderRadius: 'var(--border-radius)',
    boxShadow: '0 0 0 50vw rgba(0,0,0,0.5), 1px 2px 15px -5px rgba(0,0,0,0.7)',
    height: '30vh',
    padding: '1rem',
    position: 'relative',
    width: '30vw',
  },
};

type Props = {
  handleCloseSummary: () => void;
};

export function OrderSummary({ handleCloseSummary }: Props) {
  const { cart } = useSelector((state: RootState) => state.cartState);

  const handleCompletion = () => alert(`Order completed, please pay ${selectTotalAmount(cart).toFixed(2)}€ now!`);

  return (
    <Box sx={sx.component}>
      <Box sx={sx.backdropClicker} onClick={handleCloseSummary}></Box>

      <Box sx={sx.modal}>
        <Typography sx={sx.heading} variant="h2">
          Summary of order
        </Typography>

        <Typography>
          {selectDistinctNumOfItems(cart)} items for {selectTotalAmount(cart).toFixed(2)}€
        </Typography>

        <Button className="button" sx={sx.complete} onClick={handleCompletion}>
          Complete order
        </Button>
      </Box>
    </Box>
  );
}
