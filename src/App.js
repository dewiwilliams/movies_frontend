import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initialiseApi, fetchAllMovies } from './api';
import MovieList from './components/MovieList';
import { movies } from './state/movies';

import './App.css';

function App() {

  const movieList = useSelector(movies);
  console.log(movieList);

  useEffect(() => {
    initialiseApi(process.env.REACT_APP_API_LOCATION);
    fetchAllMovies();
  }, []);

  return (
    <div className="App">
      <MovieList
          movies={ movieList }
      />
    </div>
  );
}

export default App;
