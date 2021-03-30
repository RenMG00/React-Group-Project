import React, { Component } from "react";
import memeList from "./memeList";

class memeComponent extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            currentMeme: {
                id: '',
                url: ''
            },
            allMemesList: {
                id: '',
                url: ''
            },
            memeList: []
        }
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                console.log(response.data);
                const { memes } = response.data;
                this.setState({
                    currentMeme: memes[Math.floor(Math.random() * this.state.allMemesList.length)]
                })
            })
    }

    addMeme(evt) {

    }
    handleChange(evt) {
        const { name, value } = evt.target;
        this.setState({ [name]: value })
    }

    deleteMeme(evt) {

    }


    render() {

        let memeList = this.state.memeList.map(meme => {

            return <memeList
                url={meme.url}
                topText={meme.topText}
                bottomText={meme.bottomText}
                meme={meme}
            />
        })

        return (
            <div className="form-container">
                <div className='test'>
                    <form className="meme-form">
                        <input
                            type="text"
                            name="topText"
                            placeholder="Top Text"
                            value={this.state.topText}
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            name="bottomText"
                            placeholder="Bottom Text"
                            value={this.state.bottomText}
                            onChange={this.handleChange}
                        />
                        <button onClick={this.addMeme}>Add</button>
                    </form>
                    <div className="meme">
                        <img src={this.state.currentMeme.url} alt="" />
                        <h2 className="top">{this.state.topText}</h2>
                        <h2 className="bottom">{this.state.bottomText}</h2>
                    </div>
                    <div>
                        {memeList}
                    </div>
                </div>
            </div>
        )
    }
}

export default memeComponent;
