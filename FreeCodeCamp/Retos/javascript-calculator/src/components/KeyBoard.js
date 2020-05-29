import React from 'react';
import Board from './Board';

const KeyBoard = ({date, formula, datesUpDate}) => {
    return ( 
        <div className="grid-container">
            <Board 
                date={date}
                formula={formula}
            />
            <button 
                className="Ac pink" id="clear" value="AC" onClick={datesUpDate}> 
                    AC 
            </button>
            <button 
                className="seven numbers" id="seven" value="7" onClick={datesUpDate}> 
                    7 
            </button>
            <button 
                className="eight numbers" id="eight" value="8" onClick={datesUpDate}> 
                    8 
            </button>
            <button 
                className="nine numbers" id="nine" value="9" onClick={datesUpDate}>
                     9 
            </button>
            <button 
                className="four numbers" id="four" value="4" onClick={datesUpDate}>
                     4 
            </button>
            <button 
                className="five numbers" id="five" value="5" onClick={datesUpDate}>
                     5 
            </button>
            <button 
                className="six numbers" id="six" value="6" onClick={datesUpDate}>
                     6 
            </button>
            <button 
                className="one numbers" id="one" value="1" onClick={datesUpDate}>
                     1 
            </button>
            <button 
                className="two numbers" id="two" value="2" onClick={datesUpDate}>
                     2 
            </button>
            <button 
                className="three numbers" id="three" value="3" onClick={datesUpDate}>
                     3 
            </button>
            <button 
                className="zero numbers" id="zero" value="0" onClick={datesUpDate}>
                     0 
            </button>
            <button 
                className="equal pink" id="equals" value="=" onClick={datesUpDate}> = 
            </button>
            <button 
                className="plus operators" id="add" value="+" onClick={datesUpDate}> + 
            </button>
            <button 
                className="point numbers" id="decimal" value="." onClick={datesUpDate}> 
                    . 
            </button>
            <button 
                className="-less operators" id="subtract" value="-" onClick={datesUpDate}> 
                    - 
            </button>
            <button 
                className="-multiplier operators" id="multiply" value="*" onClick={datesUpDate}> 
                    * 
            </button>
            <button 
                className="-divider operators" id="divide" value="/" onClick={datesUpDate}> 
                    / 
            </button>
        </div>

    );
}
 
export default KeyBoard;