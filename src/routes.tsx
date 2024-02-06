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
import { MainAttractions } from './components/attractions/MainAttractions';
import { Navigation } from './components/Navigation';
import { ErrorPage } from './ErrorPage';

export const router = createBrowserRouter([
  {
    element: <MainAttractions />,
    errorElement: <ErrorPage />,
    path: '/',
  },
  {
    element: <Navigation />,
    errorElement: <ErrorPage />,
    path: '/all',
  },
  {
    element: <One />,
    errorElement: <ErrorPage />,
    path: '/one',
  },
  {
    element: <Two />,
    errorElement: <ErrorPage />,
    path: '/two',
  },
  {
    element: <Three />,
    errorElement: <ErrorPage />,
    path: '/three',
  },
  {
    element: <Four />,
    errorElement: <ErrorPage />,
    path: '/four',
  },
  {
    element: <Five />,
    errorElement: <ErrorPage />,
    path: '/five',
  },
  {
    element: <Six />,
    errorElement: <ErrorPage />,
    path: '/six',
  },
  {
    element: <Seven />,
    errorElement: <ErrorPage />,
    path: '/seven',
  },
  {
    element: <Eight />,
    errorElement: <ErrorPage />,
    path: '/eight',
  },
  {
    element: <Nine />,
    errorElement: <ErrorPage />,
    path: '/nine',
  },
  {
    children: [
      {
        // path: 'shop',
        element: <TenShop />,
        errorElement: <ErrorPage />,
        index: true,
      },
      {
        element: <TenCart />,
        errorElement: <ErrorPage />,
        path: 'cart',
      },
      {
        element: <Product />,
        errorElement: <ProductError />,
        path: 'product/:id',
      },
    ],
    element: <Ten />,
    errorElement: <ErrorPage />,
    path: '/ten',
  },
  {
    element: <Eleven />,
    errorElement: <ErrorPage />,
    path: '/eleven',
  },
  {
    element: <Twelve />,
    errorElement: <ErrorPage />,
    path: '/twelve',
  },
]);
