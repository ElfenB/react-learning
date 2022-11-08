import { CSSProperties } from 'react';
import logo from './assets/shop.svg';

const style: Record<string, CSSProperties> = {
  component: {
    alignItems: 'center',
    boxShadow: '1px 2px 5px -2px rgba(0, 0, 0, 0.7)',
    display: 'flex',
    height: '5vh',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    padding: '0.3rem',
  },
  logo: {
    height: '100%',
  },
  logoBox: {
    alignItems: 'center',
    display: 'flex',
  },
};

export function Header() {
  return (
    <header style={style.component}>
      <span style={style.logoBox}>
        <img alt="Logo" src={logo} style={style.logo} />
        <h1>Meme Generator</h1>
      </span>
      <span>Redux - Shopping Cart example</span>
      {/* TODO: Component with shopping cart and badge with item count */}
    </header>
  );
}
