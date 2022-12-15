import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { router } from './routes';

const style: Record<string, CSSProperties> = {
  component: {
    height: '100vh',
  },
  link: {
    background: 'var(--color)',
    border: '1px solid green',
    borderRadius: '8px',
    color: 'var(--background-color)',
    display: 'block',
    padding: '1rem',
  },
  list: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: '100%',
    justifyContent: 'space-evenly',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
};

export function App() {
  const routes = router.routes;

  return (
    <nav style={style.component}>
      <ul style={style.list}>
        {Object.values(routes).map((route) => (
          <Link key={route.id} style={style.link} to={`${route.path}`}>
            {route.path}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
