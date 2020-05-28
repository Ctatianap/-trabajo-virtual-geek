import React from 'react';

const ComponentTextarea = ({texto, cambiarTexto}) => {
    return ( 

        <div>
            <div className='textarea' id="editor-header"> 
            <i className="fas fa-edit icons" style={{color: "white"}}></i> 
            Editor            
            <i className="fas fa-expand-arrows-alt ampliarVentana" style={{color: "white"}} ></i>
            </div>
            <textarea id="editor" value={texto} onChange={(e)=>cambiarTexto(e.target.value)} className='textarea' type="text"> 
                
            </textarea>
        </div>
        
    );
}
 
export default ComponentTextarea;