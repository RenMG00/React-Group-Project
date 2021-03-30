import React from "react";

const Meme = props => {
    return (
        <div className="memeContainer">
            <div className='meme'>
                <img src={props.url} alt="" />
                <h2 className="top">{props.topText}</h2>
                <h2 className="bottom">{props.bottomText}</h2>
                <div>
                    <button onClick={() => props.handleEdit(props.meme)}>Edit</button>
                    <button onClick={() => props.handleDelete(props.meme.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Meme;