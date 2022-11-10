import { decreaseAmountBy, increaseAmountBy, removeItem } from '../redux/features/cart/cart';
import { useDispatchAction, useDispatchAction2 } from './ShoppingCart.utils';

import { CSSProperties } from 'react';
import { CartItem } from '../redux/features/cart/cart.types';
import placeholderProduct from './assets/placeholderProduct.webp';

const style: Record<string, CSSProperties> = {
  amount: {
    minWidth: '2rem',
    textAlign: 'right',
  },
  amountBox: {
    alignItems: 'center',
    display: 'flex',
  },
  arrowBox: {
    display: 'inline-flex',
    flexDirection: 'column',
  },
  arrows: {
    fontSize: '1.2rem',
  },
  component: {
    alignItems: 'center',

    borderRadius: '8px',
    // border: '1px solid red',
    boxShadow: '0px 2px 12px -8px rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    paddingRight: '1rem',
  },
  delete: {
    color: '#e03619',
    fontSize: '1.5rem',
  },
  disabled: {
    filter: 'brightness(30%)',
    pointerEvents: 'none',
  },
  image: {
    borderRadius: '8px',
    margin: '1rem',
    maxHeight: '8rem',
    maxWidth: '8rem',
    userSelect: 'none',
  },
  noButtons: {
    appearance: 'none',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'block',
    userSelect: 'none',
  },
  price: {
    padding: '1rem',
  },
  title: {
    fontSize: '1.5rem',
    marginLeft: '1rem',
    width: '100%',
  },
};

type Props = {
  data: CartItem;
};

export function ShoppingCartItem({ data }: Props) {
  const handleIncreaseNEW = useDispatchAction2(increaseAmountBy, { amount: 1, productId: data.productId });
  const handleDecreaseNEW = useDispatchAction2(decreaseAmountBy, { amount: 1, productId: data.productId });
  const handleDeleteNEW = useDispatchAction2(removeItem, data.productId);

  return (
    <div style={style.component}>
      <img alt={`Image of ${data.title}`} src={placeholderProduct} style={style.image} />

      <span style={style.title}>{data.title}</span>

      {/* <span>{JSON.stringify(data)}</span> */}

      <span style={style.price}>{data.price.toFixed(2)}€</span>

      <div style={style.amountBox}>
        <span style={style.amount}>{data.amount}</span>

        <div style={style.arrowBox}>
          <button style={{ ...style.arrows, ...style.noButtons }} onClick={handleIncreaseNEW}>
            ▲
          </button>
          <button
            style={{ ...style.arrows, ...style.noButtons, ...(data.amount === 1 ? style.disabled : {}) }}
            onClick={handleDecreaseNEW}
          >
            ▼
          </button>
        </div>

        <button style={{ ...style.delete, ...style.noButtons }} onClick={handleDeleteNEW}>
          🗑
        </button>
      </div>
    </div>
  );
}
