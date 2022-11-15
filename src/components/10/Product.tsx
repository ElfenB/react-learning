import { CSSProperties, ChangeEvent, useCallback, useState } from 'react';

import { RootState } from '../redux/store';
import { addItem } from '../redux/features/cart/cart';
import { useDispatchActionCallback } from './ShoppingCart.utils';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const style: Record<string, CSSProperties> = {
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
  },
  numberInput: {
    width: '3rem',
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

  return (
    <div style={style.component}>
      <h1>Product {product.title}</h1>

      <img alt={`Image of ${product.title}`} src={product.image} style={style.image} />

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

        <button style={style.controls} onClick={useDispatchActionCallback(() => addItem({ amount, product }))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
