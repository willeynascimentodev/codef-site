import { configureStore } from '@reduxjs/toolkit';
import bannerReducer from '../resources/banners/banner.slice'

export const store = configureStore({
  reducer: {
      banner: bannerReducer,
  },
});
