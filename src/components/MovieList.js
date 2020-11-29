
import Movie from './Movie';

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const MovieList = props => {
    const { movies } = props;

    return (<>
        {
            movies.map(item => {
                return (<Movie
                    movie={ item }
                />)
            })
        }
    </>)
};
export default MovieList;

