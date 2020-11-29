
import Movie from './Movie';
import AddNewPlaceholder from './AddNewPlaceholder';

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const MovieList = props => {
    const { movies, onAddNew, onEdit } = props;

    return (<div className="movielist">
        {
            Object.keys(movies).map(id => {
                const item = movies[id]
                return (<Movie
                    key={ id }
                    movie={ item }
                    id={ id }
                    onEdit={ id => { onEdit(id) } }
                />)
            })
        }
        <AddNewPlaceholder onAddNew = { onAddNew } />
    </div>)
};
export default MovieList;

