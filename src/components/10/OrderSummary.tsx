import { CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import { selectDistinctNumOfItems, selectTotalAmount } from '../redux/features/cart/cart.selectors';

import { RootState } from '../redux/store';

const style: Record<string, CSSProperties> = {
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
    <div style={style.component}>
      <div style={style.backdropClicker} onClick={handleCloseSummary}></div>

      <div style={style.modal}>
        <h2 style={style.heading}>Summary of order</h2>

        <p>
          {selectDistinctNumOfItems(cart)} items for {selectTotalAmount(cart).toFixed(2)}€
        </p>

        <button className="button" style={style.complete} onClick={handleCompletion}>
          Complete order
        </button>
      </div>
    </div>
  );
}
