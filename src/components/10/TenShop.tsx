import { CSSProperties } from 'react';
import { ProductItem } from './ProductItem';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

const style: Record<string, CSSProperties> = {
  component: {
    margin: '0 20vw',
  },
  products: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'space-between',
  },
};

export function TenShop() {
  const { products } = useSelector((state: RootState) => state.cartState);

  return (
    <div style={style.component}>
      <h1>Shop</h1>
      <div style={style.products}>
        {products.map((product) => (
          <ProductItem key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
}
