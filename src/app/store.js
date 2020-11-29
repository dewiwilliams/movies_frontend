import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import moviesReducer from '../state/movies';

export default configureStore({
  reducer: {
    movies: moviesReducer
    //counter: counterReducer,
  },
});
