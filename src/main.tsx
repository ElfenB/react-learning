import './global.css';
import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Provider from 'react-redux/es/components/Provider';
import { App } from './App';
import { store } from './components/redux/store';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
