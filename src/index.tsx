import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import i18nReducer from './store/stock/stock.store';

const store = configureStore({
  reducer: {
    i18n: i18nReducer
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}  >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

