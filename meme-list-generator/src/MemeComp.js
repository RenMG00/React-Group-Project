import React, { Component } from "react";
import MemeList from "./MemeList";
import Form from "./Form";


class MemeComp extends Component {
    state = {
        topText: "",
        bottomText: "",
        currentMeme: [],
        randomMemes: [],
        memeList: []
    }

// Mounts random meme image to page
    componentDidMount = () => {
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

// This function should allow the user to enter their data and submit as a caption for the meme
    createMeme = e => {
        e.preventDefault()
        // New meme variable
        const newMeme = {
            id: this.state.currentMeme.id,
            topText: this.state.topText,
            bottomText: this.state.bottomText,
            url: this.state.currentMeme.url,
            edited: false
        }
        // State change upon meme submission
        this.setState(prevState => ({
            ...prevState,
            memeList: [...prevState.memeList, newMeme]
        }))
    }
    // Handle Change function used to display preview
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    // refreshes meme image
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
        const memeList = this.state.memeList.map((meme) => { return <MemeList meme = {meme.id} img={meme.url}/>})
        return (
            <>
                <img className="meme" src={this.state.currentMeme.url} alt="" value={this.state.name} onChange={this.handleChange}/>
                <div className="form-container" >
                    <Form
                        topText={this.state.topText}
                        bottomText={this.state.bottomText}
                        handleChange={this.handleChange}
                        createMeme={this.createMeme}
                    />
                    <div>
                        {memeList}
                    </div>
                </div>
            </>
        )
    }
}

export default MemeComp;