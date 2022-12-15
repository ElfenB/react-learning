import './global.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Provider from 'react-redux/es/components/Provider';
import { App } from './App';
import { store } from './components/redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
