import { configureStore } from '@reduxjs/toolkit';
import bannerReducer from '../resources/banners/banner.slice'
import produtoReducer from '../resources/produtos/produto.slice'
import fornecedorReducer from '../resources/fornecedores/fornecedor.slice'

export const store = configureStore({
  reducer: {
      banner: bannerReducer,
      produto: produtoReducer,
      fornecedor: fornecedorReducer,
  },
});