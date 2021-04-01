import React, { Component } from "react";
import MemeList from "./MemeList";
import Form from "./Form";
import Meme from "./Meme";

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
                let { memes } = response.data;
                this.setState({
                    randomMemes: memes,
                    currentMeme: memes[Math.floor(Math.random() * memes.length)]
                })
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

    handleDelete = (e, id) => {
        e.preventDefault();
        console.log(e)
        this.setState(prevState => ({
            memeList: prevState.memeList.filter(meme => meme.id !== id)
        }))
    }

    handleEdit(meme) {
        this.setState({
            topText: meme.topText,
            currentMeme: {
                url: meme.url
            },
            memeList: this.state.memeList.filter(m => {
                return m.id !== meme.id
            })
        })
    }
    render() {

        return (
            <>
                <div className="form-container">
                    <Form
                        topText={this.state.topText}
                        bottomText={this.state.bottomText}
                        handleChange={this.handleChange}
                        createMeme={this.createMeme}
                    />
                    <img className="meme" src={this.state.currentMeme.url} alt="" />
                    <div>
                        <MemeList
                            memeList={this.state.memeList}
                            topText={this.state.topText}
                            url={this.state.url}
                            bottomText={this.state.bottomText}
                            handleDelete={this.handleDelete}
                            handleEdit={this.handleEdit}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default MemeComp;