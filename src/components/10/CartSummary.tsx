import type { CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import { selectDistinctNumOfItems, selectTotalAmount, selectTotalItems } from '../redux/features/cart/cart.selectors';

import type { RootState } from '../redux/store';

const style: Record<string, CSSProperties> = {
  component: {
    position: 'relative',
  },
  countOfItems: {
    position: 'absolute',
    right: 0,
    top: '1rem',
  },
  line: {
    display: 'block',
  },
  numberBox: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export function CartSummary() {
  const { cart } = useSelector((state: RootState) => state.cartState);
  const totalPrice = selectTotalAmount(cart);
  const numberOfItems = selectTotalItems(cart);

  return (
    <div style={style.component}>
      <hr style={style.line} />
      <span style={style.countOfItems}>{selectDistinctNumOfItems(cart)}</span>

      <h3>Summary of cart</h3>
      <div style={style.numberBox}>
        <span>
          {numberOfItems} {numberOfItems > 1 ? 'Items' : 'Item'}
        </span>

        <span>Total: {totalPrice.toFixed(2)}€</span>
      </div>
    </div>
  );
}
