import React, { Component } from "react";
import MemeList from "./MemeList";
import Form from "./Form";

class MemeComp extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            currentMeme: [],
            randomMemes: [],
            memeList: []
        }
    }


    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                console.log(response.data);
                let { memes } = response.data;
                console.log(memes[Math.floor(Math.random() * memes.length)])
                this.setState({
                    randomMemes: memes,
                    currentMeme: memes[Math.floor(Math.random() * memes.length)]
                })
                console.log(this.state.currentMeme, 111);
            })
    }


    createMeme = e => {
        e.preventDefault()

        const newMeme = {
            id: this.state.currentMeme.id,
            topText: this.state.topText,
            bottomText: this.state.bottomText,
            url: this.state.currentMeme.url,
            edited: false
        }

        this.setState(prevState => ({
            ...prevState,
            memeList: [...prevState.memeList, newMeme]
        }))
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState(({
            [name]: value
        }))
    }

    refresh = e => {
        e.preventDefault();
        this.setState({
            topText: "",
            bottomText: "",
            currentMeme: this.state.randomMemes[Math.floor(Math.random() * this.state.randomMemes.length)]
        })
    }


    render() {
        console.log(this.state)
        return (
            <>
                <img className="meme" src={this.state.currentMeme.url} alt="" />
                <div className="form-container">
                    <Form
                        topText={this.state.topText}
                        bottomText={this.state.bottomText}
                        handleChange={this.handleChange}
                        createMeme={this.createMeme}
                    />
                    <div>
                        <MemeList memeList={this.state.memeList} />
                    </div>
                </div>
            </>
        )
    }
}

export default MemeComp;