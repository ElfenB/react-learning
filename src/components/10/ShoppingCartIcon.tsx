import type { CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectTotalItems } from '../redux/features/cart/cart.selectors';
import type { RootState } from '../redux/store';
import shoppingCart from './assets/shop.svg';

const style: Record<string, CSSProperties> = {
  badge: {
    background: 'red',
    borderRadius: '50%',
    fontFamily: 'monospace',
    fontSize: '.6rem',
    height: '1rem',
    left: '0.3rem',
    lineHeight: '1rem',
    padding: '0.15em',
    position: 'absolute',
    textAlign: 'center',
    top: '0.5rem',
    width: '1rem',
  },
  component: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    padding: '0 1rem',
    position: 'relative',
  },
  icon: {
    height: '50%',
  },
};

export function ShoppingCartIcon() {
  const { cart } = useSelector((state: RootState) => state.cartState);

  const badge = selectTotalItems(cart);

  return (
    <Link style={style.component} to="/ten/cart">
      <img alt="shopping cart icon" src={shoppingCart} style={style.icon} />
      {badge > 0 && <span style={style.badge}>{badge > 99 ? '99+' : badge}</span>}
    </Link>
  );
}
