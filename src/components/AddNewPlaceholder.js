import React from "react";

const AddNewPlaceholder = props => {

    const { onAddNew } = props;

    return (<div className="movie__container" onClick={ onAddNew }>
        <div className="movie__add-new"><span className="movie__add-new-plus">+</span> Add new</div>
    </div>)
};
export default AddNewPlaceholder;