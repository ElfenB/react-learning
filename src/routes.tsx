/* eslint-disable sort-keys-fix/sort-keys-fix */

import { createBrowserRouter } from 'react-router-dom';
import { One } from './components/1/One';
import { Product } from './components/10/Product';
import { ProductError } from './components/10/ProductError';
import { Ten } from './components/10/Ten';
import { TenCart } from './components/10/TenCart';
import { TenShop } from './components/10/TenShop';
import { Eleven } from './components/11/Eleven';
import { Two } from './components/2/Two';
import { Three } from './components/3/Three';
import { Four } from './components/4/Four';
import { Five } from './components/5/Five';
import { Six } from './components/6/Six';
import { Seven } from './components/7/Seven';
import { Eight } from './components/8/Eight';
import { Nine } from './components/9/Nine';
import { MainAttractions } from './components/attractions/MainAttractions';
import { Navigation } from './components/Navigation';
import { ErrorPage } from './ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainAttractions />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/all',
    element: <Navigation />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/one',
    element: <One />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/two',
    element: <Two />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/three',
    element: <Three />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/four',
    element: <Four />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/five',
    element: <Five />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/six',
    element: <Six />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/seven',
    element: <Seven />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/eight',
    element: <Eight />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/nine',
    element: <Nine />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/ten',
    element: <Ten />,
    errorElement: <ErrorPage />,
    children: [
      {
        // path: 'shop',
        element: <TenShop />,
        errorElement: <ErrorPage />,
        index: true,
      },
      {
        path: 'cart',
        element: <TenCart />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'product/:id',
        element: <Product />,
        errorElement: <ProductError />,
      },
    ],
  },
  {
    path: '/eleven',
    element: <Eleven />,
    errorElement: <ErrorPage />,
  },
]);
