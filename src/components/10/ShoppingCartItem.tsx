import { decreaseAmountBy, increaseAmountBy, removeItem } from '../redux/features/cart/cart';

import { CSSProperties } from 'react';
import { CartItem } from '../redux/features/cart/cart.types';
import { Link } from 'react-router-dom';
import placeholderProduct from './assets/placeholderProduct.webp';
import { useDispatchAction2 } from './ShoppingCart.utils';

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

    boxShadow: '0px 2px 12px -8px rgba(0,0,0,0.7)',

    display: 'flex',
    // border: '1px solid red',
    height: 'calc(8rem + 2rem)', // Image height + Image margin
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
    background: 'white',
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

export function ShoppingCartItem({ data: product }: Props) {
  const handleIncreaseNEW = useDispatchAction2(increaseAmountBy, { amount: 1, productId: product.productId });
  const handleDecreaseNEW = useDispatchAction2(decreaseAmountBy, { amount: 1, productId: product.productId });
  const handleDeleteNEW = useDispatchAction2(removeItem, product.productId);

  return (
    <div style={style.component}>
      <Link to={`/ten/product/${product.productId}`}>
        <img alt={`Image of ${product.title}`} src={product.image || placeholderProduct} style={style.image} />
      </Link>

      <span style={style.title}>{product.title}</span>

      {/* <span>{JSON.stringify(data)}</span> */}

      <span style={style.price}>{product.price.toFixed(2)}€</span>

      <div style={style.amountBox}>
        <span style={style.amount}>{product.amount}</span>

        <div style={style.arrowBox}>
          <button style={{ ...style.arrows, ...style.noButtons }} onClick={handleIncreaseNEW}>
            ▲
          </button>
          <button
            style={{ ...style.arrows, ...style.noButtons, ...(product.amount === 1 ? style.disabled : {}) }}
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
