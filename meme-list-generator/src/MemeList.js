import React from "react";

class MemeList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topText: '',
            bottomText: '',
            editMode: false
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState(({
            [name]: value
        }))
    }

    switchEditMode = () => {
        console.log(this.state.editMode)
        this.setState(({
            editMode: true
        }))
    }

    render() {
        console.log(this.state.editMode)
        if (this.state.editMode === true) {
            console.log("Edit mode is true")
            return (
                <div>
                    <div className='memeContainer'>
                        <h2 className="topText">{this.props.topText}</h2>
                        <img src={this.props.url} alt="" />
                        <h2 className="bottomText">{this.props.bottomText}</h2>
                        <div>
                            <button>Edit</button>
                            <button onClick={() => this.props.handleDelete(this.props.meme.id)}>Delete</button>
                        </div>
                        <form className="editForm" >
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
                            <button onClick={(e) => {
                                e.preventDefault()
                                console.log(this.state)
                                this.props.handleEdit(this.props.meme, this.state.topText, this.state.bottomText)
                            }}>Submit Edit</button>
                        </form>
                    </div>
                </div>
            )
        } else {
            console.log("Edit mode is false")
            return (
                <div>
                    <div className='memeContainer'>
                        <h2 className="topText">{this.props.topText}</h2>
                        <img src={this.props.url} alt="" />
                        <h2 className="bottomText">{this.props.bottomText}</h2>
                        <div>
                            <button onClick={() => this.switchEditMode()}>Edit</button>
                            <button onClick={() => this.props.handleDelete(this.props.meme.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
export default MemeList;