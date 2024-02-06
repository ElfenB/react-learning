import type { ChangeEvent, CSSProperties} from 'react';
import { useCallback, useState } from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItem } from '../redux/features/cart/cart';
import type { RootState } from '../redux/store';
import { useDispatchActionCallback } from './ShoppingCart.utils';

const style: Record<string, CSSProperties> = {
  addButton: {
    background: 'var(--action-color)',
    borderRadius: '8px',
    color: 'var(--background-color)',
    cursor: 'pointer',
    userSelect: 'none',
  },
  buyBox: {
    display: 'flex',
    gap: '1rem',
  },
  component: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    justifyContent: 'space-evenly',
    margin: '0 20vw',
  },
  controls: {
    appearance: 'none',
    border: 'none',
    boxShadow: '1px 1px 8px -5px rgba(0,0,0,0.5)',
    padding: '1rem',
  },
  image: {
    background: 'white',
    border: '3px dashed rgba(0,0,0,0.3)',
    borderRadius: '8px',
    padding: '1rem',
    userSelect: 'none',
    width: '20rem',
  },
  numberInput: {
    minWidth: '4rem',
  },
};

export function Product() {
  const { id } = useParams();
  const { products } = useSelector((state: RootState) => state.cartState);
  const product = products.filter((item) => item.productId === Number(id))[0];

  const [amount, setAmount] = useState<number>(1);

  const handleAmountChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAmount(Number(value));
  }, []);

  const handleAddToCart = useDispatchActionCallback(() => addItem({ amount, product }));

  return (
    <div style={style.component}>
      <h1>{product.title}</h1>

      <img alt={product.title} src={product.image} style={style.image} />

      <p>{product.description}</p>

      <span>{product.price.toFixed(2)}€</span>

      <div style={style.buyBox}>
        <input
          id="amount"
          min={1}
          name="amount"
          style={{ ...style.controls, ...style.numberInput }}
          type="number"
          value={amount}
          onChange={handleAmountChange}
        />

        <button style={{ ...style.controls, ...style.addButton }} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
