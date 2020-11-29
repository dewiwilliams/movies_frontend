import React from "react";

const Movie = props => {

    const { id, movie, onEdit } = props;

    return (<div className="movie__container">
        <div className="edit-movie__close" onClick={ () => { onEdit(id); } }>&#x270E;</div>
        <h3>{ movie.title }</h3>
        <div>Released: { movie.released }</div>
    </div>)
};
export default Movie;