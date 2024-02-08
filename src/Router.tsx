import { createBrowserRouter } from 'react-router-dom';
import { One } from './components/1/One';
import { Two } from './components/2/Two';
import { Three } from './components/3/Three';
import { Four } from './components/4/Four';
import { Five } from './components/5/Five';
import { Six } from './components/6/Six';
import { Seven } from './components/7/Seven';
import { Eight } from './components/8/Eight';
import { Nine } from './components/9/Nine';
import { Product } from './components/10/Product';
import { ProductError } from './components/10/ProductError';
import { Ten } from './components/10/Ten';
import { TenCart } from './components/10/TenCart';
import { TenShop } from './components/10/TenShop';
import { Eleven } from './components/11/Eleven';
import { Twelve } from './components/12/Twelve';
import { Thirteen } from './components/13/Thirteen';
import { MainAttractions } from './components/attractions/MainAttractions';
// eslint-disable-next-line import/no-cycle -- this is known and intended
import { Navigation } from './components/Navigation';
import { ErrorPage } from './ErrorPage';

export const router = createBrowserRouter([
  { element: <MainAttractions />, path: '/' },
  { element: <Navigation />, path: '/all' },
  { element: <One />, path: '/one' },
  { element: <Two />, path: '/two' },
  { element: <Three />, path: '/three' },
  { element: <Four />, path: '/four' },
  { element: <Five />, path: '/five' },
  { element: <Six />, path: '/six' },
  { element: <Seven />, path: '/seven' },
  { element: <Eight />, path: '/eight' },
  { element: <Nine />, path: '/nine' },
  {
    children: [
      { element: <TenShop />, index: true },
      { element: <TenCart />, path: 'cart' },
      { element: <Product />, errorElement: <ProductError />, path: 'product/:id' },
    ],
    element: <Ten />,
    path: '/ten',
  },
  {
    element: <Eleven />,
    loader: async () => fetch(`https://api.thecatapi.com/v1/images/search?limit=10`),
    path: '/eleven',
  },
  { element: <Twelve />, path: '/twelve' },
  { element: <Thirteen />, path: '/thirteen' },
  // Error element
  { element: <ErrorPage />, path: '*' },
]);
