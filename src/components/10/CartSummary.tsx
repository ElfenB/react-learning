import { selectDistinctNumOfItems, selectTotalAmount, selectTotalItems } from '../redux/features/cart/cart.selectors';

import { CSSProperties } from 'react';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

const style: Record<string, CSSProperties> = {
  component: {
    position: 'relative',
  },
  countOfItems: {
    position: 'absolute',
    right: 0,
    top: 0,
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
