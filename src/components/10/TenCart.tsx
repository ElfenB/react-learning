import { CSSProperties, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CartSummary } from './CartSummary';
import { OrderSummary } from './OrderSummary';
import { Purchase } from './Purchase';
import { RootState } from '../redux/store';
import { ShoppingCartItem } from './ShoppingCartItem';
import { emptyCart } from '../redux/features/cart/cart';

const style: Record<string, CSSProperties> = {
  component: {
    padding: '0 20vw',
  },
};

export function TenCart() {
  const { cart } = useSelector((state: RootState) => state.cartState);
  const dispatch = useDispatch();

  const [showSummary, setShowSummary] = useState(false);

  const handleCheckout = useCallback(() => {
    setShowSummary(true);
  }, []);

  const handleOrderFinished = useCallback(() => {
    dispatch(emptyCart());
    setShowSummary(false);
  }, [dispatch]);

  return (
    <div style={style.component}>
      <h1>Cart</h1>

      {cart.map((cartItem) => (
        <ShoppingCartItem key={cartItem.productId} data={cartItem} />
      ))}

      <CartSummary />

      <Purchase handleCheckout={handleCheckout} />

      {showSummary && <OrderSummary handleCloseSummary={handleOrderFinished} />}
    </div>
  );
}
