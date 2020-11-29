import React, { useState } from "react";

const EditMovieDialog = props => {

    const { onSubmitChanges, onCancel } = props;

    const [title, setTitle] = useState(props.title || "");
    const [released, setReleased] = useState(props.released || 2020);

    const handleTitleChange = event => {
        setTitle(event.target.value);
    };
    const handleReleasedChange = event => {
        setReleased(event.target.value);
    };
    const handleOnSubmit = (event) => {
        event.preventDefault();

        if (title.length === 0)
        {
            alert("You must provide a title");
            return;
        }
        const year = parseInt(released);
        if (isNaN(year) || year<1900)
        {
            alert("You must provide a valid year");
            return;
        }

        onSubmitChanges(title, released);
    };

    return (<div className="edit-movie__container">
        <div className="edit-movie__modal">
            <div className="edit-movie__close" onClick={ onCancel }>X</div>
            <h2 className="edit-movie__heading">{ props.title ? "Edit movie" : "Add new movie"}</h2>
            <form  onSubmit={ handleOnSubmit }>
                <span className="edit-movie__field-title">Movie name:</span><input type="text" value={ title } onChange={ handleTitleChange } /><br />
                <span className="edit-movie__field-title">Year released:</span><input type="number" value={ released } onChange={ handleReleasedChange } /><br />

                <input type="submit" value="Submit" className="edit-movie__submit" />
            </form>
        </div>
    </div>)
};
export default EditMovieDialog;