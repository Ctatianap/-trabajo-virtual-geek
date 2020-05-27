import React, { Component } from 'react';

import QuoteBox from './components/QuoteBox';
import frasesMocks from './utils/mocks/frases-mocks';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      frase: frasesMocks.frases[0],
      colors: frasesMocks.colors[0]
    }
  }
  
  _getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  changeQuote(){
    const num = this._getRandomInt(0,10)
    this.setState({
      frase:  frasesMocks.frases[num],
      colors: frasesMocks.colors[num]
    })

    
  }

  render() { 
    return ( 
      <div className="App" style={{backgroundColor: this.state.colors, color:this.state.colors}}>
        
        <QuoteBox 
          frase = {this.state.frase}
          color = {this.state.colors}
          cambiarFrase = {() => this.changeQuote()}
        />
      </div>
    );
  }
}
 
export default App;

