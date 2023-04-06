import React, {useState} from "react";
import memesData from "./memesData";

function Meme() {
    const [meme, setMeme] = useState({

        topText: "",
        bottomText: "",
        randomImg: ""

    })

    const[allMemeImg, setAllMemeImgs] = useState(memesData);

    function handleClick() {
        //get the length of the meme array
        let memeLength = allMemeImg.data.memes;
        // generate code to give us random number, it gives us a whole number
        let randomImg = Math.floor(Math.random() * memeLength.length);
        //with the nth element generated from the line above we use it to get a random image.
        //we are also using the React use state function that I declared to attain the link of the image.
        const url = memeLength[randomImg].url;
        setMeme(prevMeme => ({...prevMeme,randomImg: url}));

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
            <div className="imgholder">
                <img className="img-meme" src={meme.randomImg} alt="" />
            </div>

        </main>

    )
}

export default Meme