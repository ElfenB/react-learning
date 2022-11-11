import { CSSProperties } from 'react';
import { CartSummary } from './CartSummary';
import { RootState } from '../redux/store';
import { ShoppingCartItem } from './ShoppingCartItem';
import { useSelector } from 'react-redux';

const style: Record<string, CSSProperties> = {
  component: {
    padding: '0 20vw',
  },
};

export function TenCart() {
  const { cart } = useSelector((state: RootState) => state.cartState);

  return (
    <div style={style.component}>
      <h1>Shopping cart</h1>

      {cart.map((cartItem) => (
        <ShoppingCartItem key={cartItem.productId} data={cartItem} />
      ))}

      <CartSummary />
    </div>
  );
}
