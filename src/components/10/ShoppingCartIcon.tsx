import { CSSProperties } from 'react';
import { RootState } from '../redux/store';
import shoppingCart from './assets/shop.svg';
import { useSelector } from 'react-redux';

const style: Record<string, CSSProperties> = {
  badge: {
    background: 'red',
    borderRadius: '50%',
    fontFamily: 'monospace',
    fontSize: '.8rem',
    height: '1.15rem',
    left: '-.8rem',
    lineHeight: '1.15rem',
    padding: '0.15em',
    position: 'absolute',
    textAlign: 'center',
    top: '0.2rem',
    width: '1.15rem',
  },
  component: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    position: 'relative',
  },
  icon: {
    height: '50%',
  },
};

export function ShoppingCartIcon() {
  const cartSize = useSelector((state: RootState) => state.cartState.cart.length);
  // TODO: Fix error that this is not being rerendered when state changes
  console.log('carticon rendered');

  return (
    <div style={style.component}>
      <img alt="shopping cart icon" src={shoppingCart} style={style.icon} />
      {cartSize > 0 && <span style={style.badge}>{cartSize > 99 ? '99+' : cartSize}</span>}
    </div>
  );
}
