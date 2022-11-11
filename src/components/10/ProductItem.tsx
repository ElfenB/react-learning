import { CSSProperties } from 'react';
import { Product } from '../redux/features/cart/cart.types';

const style: Record<string, CSSProperties> = {
  component: {
    height: '20rem',
    overflow: 'hidden',
    width: '20rem',
    wordWrap: 'break-word',
  },
};

type Props = {
  product: Product;
};

export function ProductItem({ product }: Props) {
  return (
    <div style={style.component}>
      <h1>{product.title}</h1>
      {JSON.stringify(product)}
    </div>
  );
}
