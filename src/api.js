
import { setMovies, addMovie, changeMovie } from './state/movies'
import store from './app/store';

let rootLocation = "";

export const initialiseApi = (root) =>
{
    rootLocation = root;
};
export const fetchAllMovies = () =>
{
    const url = `${rootLocation}/movies`;
    fetch(url).then(response => {
        return response.json();
    }).then(json => {
        store.dispatch(setMovies(json));
    }).catch(() => {
        alert("Failed to fetch movies, check REACT_APP_API_LOCATION in your .env file")
    });
};
export const createNewMovie = (title, released) =>
{
    const url = `${rootLocation}/movies`;
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title,
            released
        })
    }).then(response => {
        return response.json();
    }).then(json => {
        store.dispatch(addMovie(json));
        console.log(json);
    }).catch(() => {
        alert("Failed to create new movie")
    });
};
export const updateMovie = (id, title, released) =>
{
    const url = `${rootLocation}/movies/${id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title,
            released
        })
    }).then(response => {
        return response.json();
    }).then(json => {
        store.dispatch(changeMovie(json));
        console.log(json);
    }).catch(() => {
        alert("Failed to create new movie")
    });
};