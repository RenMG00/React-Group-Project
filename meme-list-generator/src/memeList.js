import React from "react";

function MemeList(props) {

    return (
        <div>
            <div className='memeContainer'>
                <h2 className="top">{props.topText}</h2>
                <img src={props.url} alt="" />
                <h2 className="bottom">{props.bottomText}</h2>
                <div>
                    {/* <button onClick={() => props.handleEdit(props.meme.id)}>Edit</button> */}
                    <button onClick={() => props.handleDelete(props.meme.id)}>Delete</button>
                </div>
                <form className="editForm" onSubmit={console.log("hi")}>
                    <input
                        name='topText'
                        type='text'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        name='bottomText'
                        type='text'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Edit Meme</button>
                </form>
            </div>
        </div>
    )
}

export default MemeList;