import React from 'react'

const Header = () => {
  return (
    <header className="Header">
        <img className="TrollFace" src= {require("./images/TrollFace.png")} alt="troll-face"/>
        <h2 className="Title">Meme Generator</h2>
        <h4 className="SubTitle">React Course - Project 3</h4>
    </header>
  )
}

export default Header