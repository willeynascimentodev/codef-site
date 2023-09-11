import { configureStore } from '@reduxjs/toolkit';
import bannerReducer from '../resources/banners/banner.slice'
import produtoReducer from '../resources/produtos/produto.slice'
import fornecedorReducer from '../resources/fornecedores/fornecedor.slice'
import leadReducer from '../resources/leads/lead.slice'
import categoriaReducer from '../resources/categorias/categoria.slice'
import infoReducer from '../resources/infos/info.slice'
import videoReducer from '../resources/videos/video.slice'

export const store = configureStore({
  reducer: {
      banner: bannerReducer,
      produto: produtoReducer,
      fornecedor: fornecedorReducer,
      lead: leadReducer,
      categoria: categoriaReducer,
      info: infoReducer,
      video: videoReducer
  },
});
