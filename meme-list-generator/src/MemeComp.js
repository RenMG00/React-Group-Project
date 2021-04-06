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
            url: this.state.currentMeme.url
        }
        this.setState(prevState => ({
            ...prevState,
            memeList: [...prevState.memeList, newMeme]
        }))
        this.refresh(e)
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

    handleEdit = (meme, topText, bottomText) => {
       
        this.setState(prevState => {
            let editList = [...prevState.memeList]
            let index = prevState.memeList.findIndex(oldMeme => oldMeme.id === meme.id)
            editList[index] = { ...editList[index], topText: topText, bottomText: bottomText }
            return {
                ...prevState,
                memeList: editList
            }
        })
        
    }

    handleDelete = (id) => {
        console.log(id)
        this.setState(prevState => ({
            memeList: prevState.memeList.filter(meme => meme.id !== id)
        }))
    }


    render() {
        let memesList = this.state.memeList.map(meme => {
            return <MemeList
                topText={meme.topText}
                url={meme.url}
                bottomText={meme.bottomText}
                meme={meme}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
            />
        })
        return (
            <>
                <div className="form-container">
                    <Form
                        topText={this.state.topText}
                        bottomText={this.state.bottomText}
                        handleChange={this.handleChange}
                        createMeme={this.createMeme}
                    />
                    <div className="meme">
                        <h2 className="top">{this.state.topText}</h2>
                        <img src={this.state.currentMeme.url} alt="" />
                        <h2 className="bottom">{this.state.bottomText}</h2>
                    </div>
                    <div>
                        {memesList}
                    </div>
                </div>
            </>
        )
    }
}

export default MemeComp;