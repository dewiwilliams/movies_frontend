import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../state/movies';

export default configureStore({
  reducer: {
    movies: moviesReducer
  },
});
