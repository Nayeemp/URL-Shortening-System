/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import urlReducer from '../features/url/urlSlice';

export const store = configureStore({
  reducer: {
    url: urlReducer
  }
});
