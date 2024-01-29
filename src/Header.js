import React from 'react'

const Header = () => {
  return (
    <header className="header">
        <img className="trollFace" src= {require("./images/TrollFace.png")} alt="troll-face"/>
        <h2 className="title">Meme Generator</h2>
        <h4 className="SubTitle">React Course - Project 3</h4>
    </header>
  )
}

export default Header