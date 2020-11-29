
import { setMovies } from './state/movies'
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