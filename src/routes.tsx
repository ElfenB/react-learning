/* eslint-disable sort-keys-fix/sort-keys-fix */

import { App } from './App';
import { Eight } from './components/8/Eight';
import { ErrorPage } from './ErrorPage';
import { Five } from './components/5/Five';
import { Four } from './components/4/Four';
import { One } from './components/1/One';
import { Seven } from './components/7/Seven';
import { Six } from './components/6/Six';
import { Three } from './components/3/Three';
import { Two } from './components/2/Two';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
]);
