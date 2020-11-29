import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { initialiseApi, fetchAllMovies, createNewMovie, updateMovie } from './api';
import MovieList from './components/MovieList';
import EditMovieDialog from './components/EditMovieDialog';
import { movies } from './state/movies';

import './App.css';

function App() {

  const movieList = useSelector(movies);

  const [editingVisible, setEditingVisible] = useState(false);
  const [editingID, setEditingID] = useState(null);

  useEffect(() => {
    initialiseApi(process.env.REACT_APP_API_LOCATION);
    fetchAllMovies();
  }, []);

  const onAddNewMovie = () => {
    setEditingID(null);
    setEditingVisible(true);
  };
  const onEditMovie = id => {
    setEditingID(id);
    setEditingVisible(true);
  };
  const onSubmitEditChanges = (title, released) => {
    if (editingID === null)
      createNewMovie(title, released);
    else
      updateMovie(editingID, title, released);

    setEditingVisible(false);
  };

  return (
    <div className="app">
      <h1>Dewi's movie database</h1>
      <MovieList
          movies={ movieList }
          onAddNew = { onAddNewMovie }
          onEdit = { onEditMovie }
      />
      {
        editingVisible &&
          (<EditMovieDialog
              title = { (editingID && movieList[editingID].title) || null }
              released = { (editingID && movieList[editingID].released) || null }
              onCancel = { () => { setEditingVisible(false); } }
              onSubmitChanges = { onSubmitEditChanges }
          />)
      }

    </div>
  );
}

export default App;
