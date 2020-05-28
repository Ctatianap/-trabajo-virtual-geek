import React, { Component } from 'react';
import ComponentTextarea from './components/ComponentTextarea'
import RenderMarkdown from './components/RenderMarkdown'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      texto: `# Etiqueta h1
## Etiqueta h2
### Etiqueta h3
Aquí va el código en linea \`<p>Aquí va el párrafo</p>\`
y así sería un bloque de código:
\`\`\`
function Ejemplo(){
  return console.log ("Ejemplo código en bloque")
}
\`\`\`
**Este es un texto en negrilla**, _Este es cursiva_, **_y éste ambas_**
~~tachando el texto~~, tambien podemos agregar [links](https://www.freecodecamp.com), 
>Una lista: 
 
* 1 
* 2 
* 3
>Una imagen:
![React Logo w/ Text](https://goo.gl/Umyytc)
 `
    }
    this.actualizarTextarea = this.actualizarTextarea.bind(this)
  }

  actualizarTextarea(texto){
    this.setState({
      texto
    })
  }


  render() { 
    return (  
      <div className="App">
        
        <ComponentTextarea 
          texto={this.state.texto}
          cambiarTexto={this.actualizarTextarea}
        />
        <RenderMarkdown texto={this.state.texto}/>
      </div>
    );
  }
}
 
export default App;