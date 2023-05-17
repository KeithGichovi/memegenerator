import React, {useState} from "react";
import memesData from "./memesData";

function Meme() {
    const [meme, setMeme] = useState({

        topText: "",
        bottomText: "",
        randomImg: ""

    })

    const[allMemeImages, setAllMemeImages] = useState(memesData);

    function handleClick() {

        //get the length of the meme array
        let memeLength = allMemeImages.data.memes;
        // generate code to give us random number, it gives us a whole number
        let randomImg = Math.floor(Math.random() * memeLength.length);
        //with the nth element generated from the line above we use it to get a random image.
        //we are also using the React use state function that I declared to attain the link of the image.
        const url = memeLength[randomImg].url;

        setMeme(prevMeme=> {
            return (
                {
                    ...prevMeme,
                    randomImg: url
                }
            );
        });
    }

    function handleChange(event) {

        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
        
    }

     
    return(

        <main>
            <div className="form">
                <input type="text" placeholder="Top text" name="topText" value={meme.topText} onChange={handleChange}/>
                <input type="text" placeholder="bottom text" name="bottomText" value={meme.bottomText} onChange={handleChange}/>
                <br/>
                <br/>
                <button onClick={handleClick}>
                    Get meme Image
                </button>
            </div>
            <div className="imgholder">
                <img className="img-meme" src={meme.randomImg} alt="" />
                <h2>{meme.topText}</h2>
                <h2>{meme.bottomText}</h2>
            </div>
        </main>

    )
}

export default Meme