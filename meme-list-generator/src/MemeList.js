import React from "react";
import Meme from "./Meme";

const MemeList = props => {

   const memesList = props.memeList.map((meme, i) => <Meme key = {i} {...meme} />);
    return (
        <div>
            {memesList}
        </div>
    )
}

export default MemeList;