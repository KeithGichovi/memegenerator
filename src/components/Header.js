import React from "react";
import troll from '../images/Trollface.png'

function Header() {
    return(

        <header>
            <img src={troll} alt="none"/>
            <h1>Meme Generator </h1>
            <h2>A simple react project</h2>
        </header>

    )
}

export default Header