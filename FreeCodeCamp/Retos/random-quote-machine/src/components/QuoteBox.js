import React from 'react';
import Buttons from './Buttons'


const QuoteBox = ({frase,color, cambiarFrase}) => {
    return (  

        <div id="wrapper"  className="container">
            <div id="quote-box">
                <div className="quote-text text-center">
                    <p id="text"><i className="fas fa-quote-left"></i> {frase.frase}</p>
                </div>
                <div className="quote-author text-right">
                    <small id="author">-{frase.autor}</small>
                </div><br/>
                <Buttons 
                frase= {frase}
                color = {color}
                cambiarFrase={cambiarFrase}
                />
                                
            </div>
            <p className="footer text-white">By Tatiana Pabón</p>

        </div>
        

    );
}
 
export default QuoteBox;