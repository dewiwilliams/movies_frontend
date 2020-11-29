import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: {},
    },
    reducers: {
        setMovies: (state, action) => {
            state.movies = {};
            action.payload.forEach(item => {
                state.movies[item.movieid] = {
                    title: item.title,
                    released: item.released
                };
            });
        },
        addMovie: (state, action) => {
            const item = action.payload;
            state.movies[item.movieid] = {
                title: item.title,
                released: item.released
            };
        },
        changeMovie: (state, action) => {
            const item = action.payload;
            state.movies[item.movieid] = {
                title: item.title,
                released: item.released
            };
        }
    },
});

export const { setMovies, addMovie, changeMovie } = moviesSlice.actions;

export const movies = state => state.movies.movies;

export default moviesSlice.reducer;
