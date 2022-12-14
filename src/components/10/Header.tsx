import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from './ShoppingCartIcon';
import logo from './assets/redux.svg';

const style: Record<string, CSSProperties> = {
  component: {
    alignItems: 'center',
    boxShadow: '1px 2px 5px -2px rgba(0, 0, 0, 0.7)',
    color: 'var(--color)',
    display: 'flex',
    height: '5vh',
    justifyContent: 'space-between',
    padding: '.3rem 1rem',
  },
  logo: {
    height: '80%',
    padding: '1rem',
  },
  logoBox: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
  },
  title: {
    display: 'inline-block',
    fontSize: 'inherit',
    margin: 0,
  },
};

export function Header() {
  return (
    <header style={style.component}>
      <div style={style.logoBox}>
        <Link style={style.logoBox} to={'/ten'}>
          <img alt="Logo" src={logo} style={style.logo} />
        </Link>

        <h1 style={style.title}>Redux Shopping Cart</h1>
      </div>

      <ShoppingCartIcon />
    </header>
  );
}
