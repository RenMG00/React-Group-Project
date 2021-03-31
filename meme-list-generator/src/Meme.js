import React from "react";

const Meme = props => {

    const {topText, url, bottomText, handleEdit, handleDelete} = props
    return (
        <div className="memeContainer">
                <h2 className="top">{topText}</h2>
                <img src={url} alt="" />
                <h2 className="bottom">{bottomText}</h2>
                <div>
                    <button onClick={handleEdit(props.meme)}>Edit</button>
                    <button onClick={handleDelete(props.meme.id)}>Delete</button>
                </div>
        </div>
    )
}

export default Meme;