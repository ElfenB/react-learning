import { Header } from './Header';
import { Outlet } from 'react-router-dom';

export function Ten() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
