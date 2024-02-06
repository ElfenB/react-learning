/* eslint-disable import/no-unused-modules */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './components/redux/store';
import './global.css';
import './index.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- react starting point
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
