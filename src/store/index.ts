import { configureStore } from '@reduxjs/toolkit';

import i18nReducer from './stock/stock.store';

const store = configureStore({
  reducer: {
    i18n: i18nReducer 
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;