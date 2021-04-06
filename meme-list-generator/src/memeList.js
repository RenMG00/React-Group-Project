import React, { Component } from "react";

class MemeList extends Component {
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: ""
        }
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <>
                <div className="meme-container">
                    <h2 className="top">{this.props.topText} </h2>

                    <img src={this.props.img} alt="" className="img" />
                    <h2 className="bottom">{this.props.bottomText}</h2>
                    <div>
                        <button onClick={() => this.props.handleDelete(this.props.meme.id)}>Delete</button>
                    </div>
                    <form className="edit-form" onClick={() => this.props.handleEdit(this.props.meme)}>
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
                        <button>Submit Edit</button>
                    </form>
                </div>
            </>
        )
    }
    }

export default MemeList;