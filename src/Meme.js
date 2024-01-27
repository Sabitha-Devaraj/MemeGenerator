import React, { useState } from "react";
import memesData from './memesData'

const Meme = () => {

    const [meme, setMeme] = useState({
        topText : "",
        bottomText : "",
        randomImage : ""
    });
    const [allMemeImages,setAllMemeImages] = useState(memesData)

    function getMemeImage() {   
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage : url
        }))      
    }  
    
    return (
        <main>
           <div className="form">
                <div>
                    <label className="formLabel">Top Text</label>
                    <input 
                        className="formInput"
                        type="text"
                        placeholder="Top Text"
                    />
                </div>
                <div>
                <label className="formLabel">Bottom Text</label>
                    <input 
                        className="formInput"
                        type="text"
                        placeholder="Bottom Text"
                    />
                
                </div>
                <button 
                    className="formButton" 
                    onClick={getMemeImage}>
                    Get a new meme image  🖼
                </button>
            </div>
            {meme.randomImage &&<img src={meme.randomImage} alt="random meme" className="memeImage"/>}
        </main>
    )
}

export default Meme