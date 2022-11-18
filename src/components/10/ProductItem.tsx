import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../redux/features/cart/cart.types';
import { addItem } from '../redux/features/cart/cart';
import { useDispatchActionCallback } from './ShoppingCart.utils';

const style: Record<string, CSSProperties> = {
  addButton: {
    appearance: 'none',
    background: 'var(--action-color)',
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
  const handleAddToCart = useDispatchActionCallback(() => addItem({ amount: 1, product }));

  return (
    <div style={style.component}>
      <Link to={`product/${product.productId}`}>
        <img alt={`Picture of ${product.title}`} src={product.image} style={style.image} />
      </Link>

      <h2 style={style.title}>{product.title}</h2>
      <button style={style.addButton} onClick={handleAddToCart}>
        Get 1 for {product.price.toFixed(2)}€
      </button>
    </div>
  );
}
