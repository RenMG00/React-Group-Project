import React from "react";

const Form = props => {

<<<<<<< HEAD
    const { topText, bottomText, handleChange, url, currentMeme ,createMeme, refresh } = props
=======
    const { topText, bottomText, handleChange, createMeme, refresh } = props
>>>>>>> 9b2a30295f18efbe1e8057793719c820b6252edd
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