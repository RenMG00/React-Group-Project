import React from "react";

class MemeList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topText: '',
            bottomText: ''
        }
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState(({
            [name]: value
        }))
    }

    render() {

        return (
            <div>
                <div className='memeContainer'>
                    <h2 className="top">{this.props.topText}</h2>
                    <img src={this.props.url} alt="" />
                    <h2 className="bottom">{this.props.bottomText}</h2>
                    <div>
                        <button onClick={() => this.props.handleDelete(this.props.meme.id)}>Delete</button>
                    </div>
                    <form className="editForm">
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
                        <button onClick={() => this.props.handleEdit(this.props.meme)}>Submit Edit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default MemeList;