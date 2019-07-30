import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      number: 0,
      toglle: true
    }
  }

  increment = () => {
    this.setState(prevState => {
      let number = prevState.number + 1

      if (number >= 10){
        alert('your put maximum');
        number = 10;
      }
      return { number: number }
    })
  }  

  decrement = () => {
    this.setState(prevState => ({
        number: prevState.number - 1
      }))
  } 

  toglleVive = () => {
    this.setState(prevState => ({
        toglle: !prevState.toglle
      }))
  } 

  render() {
    return (
      <div className="Counter">
        <p>
          {this.state.toglle ? this.state.number: null}
        </p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.toglleVive}>{this.state.toglle?"Hide": "Show"}</button>
      </div>
    );
  }
}

export default App;
