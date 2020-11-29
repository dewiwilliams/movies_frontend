import React from "react";

const MovieList = props => {

    const { movie } = props;

    return (<div>
        { movie.title }
    </div>)
};
export default MovieList;