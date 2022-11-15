import { CSSProperties } from 'react';
import { Product } from '../redux/features/cart/cart.types';
import { addItem } from '../redux/features/cart/cart';
import { useDispatchActionCallback } from './ShoppingCart.utils';

const style: Record<string, CSSProperties> = {
  addButton: {
    appearance: 'none',
    background: '#369',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '1px 1px 12px -5px rgba(0,0,0,0.7)',
    color: 'var(--background-color)',
    cursor: 'pointer',
    marginBottom: '1rem',
    padding: '0.5rem 1rem',
  },
  component: {
    alignItems: 'center',
    borderRadius: '8px',
    boxShadow: '1px 2px 8px -5px rgba(0,0,0,0.7)',
    display: 'flex',
    flexDirection: 'column',
    height: '20rem',
    justifyContent: 'space-between',
    overflow: 'hidden',
    width: '20rem',
    wordWrap: 'break-word',
  },
  image: {
    background: 'white',
    borderRadius: '8px',
    height: '12rem',
    marginTop: '1rem',
  },
};

type Props = {
  product: Product;
};

export function ProductItem({ product }: Props) {
  return (
    <div style={style.component}>
      <img alt={`Picture of ${product.title}`} src={product.image} style={style.image} />
      <h2 style={style.title}>{product.title}</h2>
      <button style={style.addButton} onClick={useDispatchActionCallback(() => addItem(product))}>
        Put in cart {product.price}€
      </button>
    </div>
  );
}
