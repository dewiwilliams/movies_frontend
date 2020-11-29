import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
    },
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
    },
});

export const { setMovies } = moviesSlice.actions;

export const movies = state => state.movies.movies;

export default moviesSlice.reducer;
