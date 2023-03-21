import React from "react";
import memesData from "./memesData";
let imgurl;
function Meme() {

    function handleClick() {
        //get the length of the meme array
        let memeLength = memesData.data.memes;
        // generate code to give us random number, it gives us a whole number
        let randomImg = Math.floor(Math.random() * memeLength.length);
        //with the nth element generated from the line above we use it to get a random image.
        imgurl = memeLength[randomImg].url;

    }

    return(

        <main>
            <div className="form">
                <input type="text" placeholder="Top text" />
                <input type="text" placeholder="bottom text"/>
                <br/>
                <br/>
                <button onClick={handleClick}>
                    Get meme Image
                </button>
            </div>
        </main>

    )
}

export default Meme