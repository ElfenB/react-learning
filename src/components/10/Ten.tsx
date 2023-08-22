import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export function Ten() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
