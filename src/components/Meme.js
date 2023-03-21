import React from "react";

function Meme() {
    return(

        <main>
            <form className="form">
                <input type="text" placeholder="Top text" />
                <input type="text" placeholder="bottom text"/>
                <br/>
                <br/>
                <button>
                    Get meme Image
                </button>
            </form>
        </main>

    )
}

export default Meme