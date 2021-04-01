import React from "react";
import Meme from "./Meme";

const MemeList = props => {
    console.log(props)
    if (props.memeList != null) {
        const memesList = props.memeList.map((meme, i) =>
            <Meme
                key={i}
                {...meme}
                handleDelete={props.handleDelete}
            />);
        return (
            <div>
                {memesList}
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default MemeList;