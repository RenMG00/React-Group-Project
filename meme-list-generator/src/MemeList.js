import React from "react";

const memeList = props => {
    return (
        <div>
            <div className="memeList">
                <div className='meme'>
                    <img src={this.props.url} alt="" />
                    <h2 className="top">{this.props.topText}</h2>
                    <h2 className="bottom">{this.props.bottomText}</h2>
                    <div>
                        <button onClick={() => this.props.handleEdit(this.props.meme)}>Edit</button>
                        <button onClick={() => this.props.handleDelete(this.props.meme.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memeList;