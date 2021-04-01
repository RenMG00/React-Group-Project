import React from "react";

const Meme = props => {

    const { topText, url, bottomText, handleDelete, handleEdit, refresh } = props

    console.log(handleDelete)
    return (
        <div className="memeContainer">
            <h2 className="top">{topText}</h2>
            <img src={url} alt="" />
            <h2 className="bottom">{bottomText}</h2>
            <div>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleEdit}>Edit</button>
            {/* <form>
                <input
                name ="topText"
                type="text"
                value={topText}
                onChange={handleChange}
                />
                <input
                name ="bottomText"
                type="text"
                value={bottomText}
                onChange={handleChange}
                />
                <button>Submit</button>
            </form> */}
            </div>
        </div>
    )
}

export default Meme;