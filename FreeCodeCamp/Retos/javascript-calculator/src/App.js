import React, { Component } from 'react';
import KeyBoard from './components/KeyBoard';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import stringCalculator from 'string-calculator';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 0,      
      operator: "", 
      formula: "",
      decimal: 0
      
    }
    this.datesUpDate = this.datesUpDate.bind(this)
  }
  datesUpDate(e){
    
    
    switch (e.target.value){
      case "AC":
        this.setState({
          formula: " ", 
          date: 0
        })  
        break;
      case "-":
      case "+":
      case  "/":
      case "*":
        this.setState({
          operator:  e.target.value,
          formula: this.state.formula + e.target.value,
                    
        })
        break;
       
      case "=":
        this.setState({
          date: this.state.formula ? stringCalculator(this.state.formula) : this.state.formula
        })
        break;
      default:
        this.setState({
          date: e.target.value,
          formula: this.state.formula + e.target.value
         })
      break;     
            
    }     
  }
  
  render() { 
    return ( 
      <div className="App">
        <div className="App-Container">
          <KeyBoard 
            date={this.state.date}
            formula={this.state.formula}
            operator={this.state.operator}
            datesUpDate={this.datesUpDate}
          />
          <p className="footer">Coded by Tatiana Pabón</p>
        </div>
        
      </div>
     );
  }

}
export default App;