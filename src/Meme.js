import React, { useEffect, useState } from "react";
//import memesData from './memesData'

const Meme = () => {

    const [meme, setMeme] = useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    });
    
    //const [allMeme,setAllMeme] = useState(memesData)

    const [allMeme,setAllMeme] = useState()

    useEffect(()=> {
        const fetchMeme = async() => {
            const response = await fetch("https://api.imgflip.com/get_memes")
            const data = await response.json()
            setAllMeme(data.data.memes)
        }
        fetchMeme()
    },[])

    function getMemeImage() {   
        //const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomNumber].url

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage : url
        }))      
    }  
console.log(meme)
    function handleChange(event){
        const {name,value} = event.target
        setMeme(prevMeme => (
            {
                ...prevMeme,
                [name] : value
            }
        ))
    }
    
    return (
        <main>
           <div className="form">
              
                <input 
                    className="formInput"
                    type="text"
                    placeholder="Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
            
                <input 
                    className="formInput"
                    type="text"
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
            
                <button 
                    className="formButton" 
                    onClick={getMemeImage}>
                    Get a new meme image  🖼
                </button>
                
            </div>

            <div className="meme">
                    <img src={meme.randomImage} alt="random meme"  className="memeImage" />
                    <h2 className="memeText top">{meme.topText}</h2>
                    <h2 className="memeText bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme