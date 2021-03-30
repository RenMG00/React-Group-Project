import React from "react";
import Meme from "./Meme";

const MemeList = props => {

    const memeList = props.memes.map((meme, i) => <Meme key = {i} {...meme} />);
         
    return (
        <div>
            {memeList}
        </div>
    )
}

export default MemeList;