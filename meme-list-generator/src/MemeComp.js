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

<<<<<<< HEAD
    componentDidMount() {
=======
// Mounts random meme image to page
    componentDidMount = () => {
>>>>>>> 9b2a30295f18efbe1e8057793719c820b6252edd
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

<<<<<<< HEAD
=======
// This function should allow the user to enter their data and submit as a caption for the meme
>>>>>>> 9b2a30295f18efbe1e8057793719c820b6252edd
    createMeme = e => {
        e.preventDefault()
        // New meme variable
        const newMeme = {
            id: this.state.currentMeme.id,
            topText: this.state.topText,
            bottomText: this.state.bottomText,
            url: this.state.currentMeme.url
        }
<<<<<<< HEAD
=======
        // State change upon meme submission
>>>>>>> 9b2a30295f18efbe1e8057793719c820b6252edd
        this.setState(prevState => ({
            ...prevState,
            memeList: [...prevState.memeList, newMeme]
        }))
        this.refresh(e)
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
<<<<<<< HEAD
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
=======
        console.log(this.state)
        const memeList = this.state.memeList.map((meme) => { return <MemeList meme = {meme.id} img={meme.url}/>})
        return (
            <>
                <img className="meme" src={this.state.currentMeme.url} alt="" value={this.state.name} onChange={this.handleChange}/>
                <div className="form-container" >
>>>>>>> 9b2a30295f18efbe1e8057793719c820b6252edd
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
<<<<<<< HEAD
                        {memesList}
=======
                        {memeList}
>>>>>>> 9b2a30295f18efbe1e8057793719c820b6252edd
                    </div>
                </div>
            </>
        )
    }
}

export default MemeComp;