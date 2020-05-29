import React from 'react';

const Board = ({formula,date}) => {
    console.log('formula: ', formula);
    
    return ( 
        <div className="board">
            <div className="formulaScreen">{formula}</div>
            <div className="outputScreen" id="display">{date}</div>
        </div>
    );
}
 
export default Board;