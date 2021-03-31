import React from "react";

const Form = props => {

    const { topText, bottomText, handleChange, createMeme, refresh } = props
    return (
        <div>
            <form className="meme-form">
                <input
                    type="text"
                    name="topText"
                    placeholder="Top Text"
                    value={topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="bottomText"
                    placeholder="Bottom Text"
                    value={bottomText}
                    onChange={handleChange}
                />
                <button onClick={createMeme}>Create Meme</button>
                <button onClick={refresh}>Refresh Meme</button>
            </form>
        </div>
    )
}

export default Form;