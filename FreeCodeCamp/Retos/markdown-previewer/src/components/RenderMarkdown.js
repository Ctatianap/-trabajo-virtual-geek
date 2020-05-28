import React from 'react';
import marked from 'marked';

const RenderMarkdown = ({texto}) => {
    
    return ( 
        <div>
            <div className='textpreview' id="previewer-header"> 
            <i className="far fa-file-alt icons" style={{color: "white"}}></i> 
            Previewer            
            <i className="fas fa-expand-arrows-alt ampliarVentana" style={{color: "white"}} ></i>
            </div>
            <div id="preview" className='textpreview' dangerouslySetInnerHTML={{__html: marked(texto)}}>
                
            </div>
        
    </div>
    );
}
 
export default RenderMarkdown;