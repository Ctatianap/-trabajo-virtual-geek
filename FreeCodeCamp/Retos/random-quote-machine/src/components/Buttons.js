import React from 'react';

const Buttons = ({color, cambiarFrase, frase}) => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(frase.frase)}`;
    const tumblrUrl = `https://www.tumblr.com/`;
    return ( 
        <div className="buttons">
                    
            <a href={twitterUrl} id="tweet-quote" m-r="2" type="button" className="btn"  target="_blank" rel="noopener noreferrer" style={{backgroundColor: color}}><i className="fab fa-twitter" style={{color: "white"}}></i></a>

            <a href={tumblrUrl} id="tumblr" type="button" className="btn" target="_blank" rel="noopener noreferrer" style={{backgroundColor: color}}><i className="fab fa-tumblr " style={{color: "white"}}></i></a>

            <a href="/" onClick={(e) => e.preventDefault() || cambiarFrase()} id="new-quote" type="button" className="btn text-white" style={{backgroundColor: color}}>New quote</a>
        
        </div>
    );
}
 
export default Buttons;