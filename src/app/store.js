import { configureStore } from '@reduxjs/toolkit';
import bannerReducer from '../resources/banners/banner.slice'
import produtoReducer from '../resources/produtos/produto.slice'

export const store = configureStore({
  reducer: {
      banner: bannerReducer,
      produto: produtoReducer,
  },
});
