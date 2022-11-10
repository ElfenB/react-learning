import { CSSProperties, useCallback } from 'react';
import { decreaseAmountBy, increaseAmountBy, removeItem } from '../redux/features/cart/cart';

import { CartItem } from '../redux/features/cart/cart.types';
import placeholderProduct from './assets/placeholderProduct.webp';
import { useDispatch } from 'react-redux';
import { useDispatchAction } from './ShoppingCart.utils';

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
  image: {
    borderRadius: '8px',
    margin: '1rem',
    maxHeight: '8rem',
    maxWidth: '8rem',
  },
  noButtons: {
    appearance: 'none',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'block',
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
  const dispatch = useDispatch();

  const handleIncreaseNEW = useDispatchAction(increaseAmountBy, { amount: 1, productId: data.productId });

  // const handleIncrease = useCallback(
  //   () => dispatch(increaseAmountBy({ amount: 1, productId: data.productId })),
  //   [data.productId, dispatch]
  // );
  const handleDecrease = useCallback(
    () => dispatch(decreaseAmountBy({ amount: 1, productId: data.productId })),
    [data.productId, dispatch]
  );
  const handleDelete = useCallback(() => dispatch(removeItem(data.productId)), [data.productId, dispatch]);

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
          <button style={{ ...style.arrows, ...style.noButtons }} onClick={handleDecrease}>
            ▼
          </button>
        </div>

        <button style={{ ...style.delete, ...style.noButtons }} onClick={handleDelete}>
          🗑
        </button>
      </div>
    </div>
  );
}
