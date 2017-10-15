import React, { Component } from 'react';
import './stylesheets/App.css';
import Icons from './components/Icons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userChoiceText: "Choisissez entre pierre, feuille ou ciseaux :",
      userChoice: ""
    };
  }

  getComputerChoice() {
    let computerChoice = Math.random();
    computerChoice < 0.34 ? computerChoice = "Pierre" : computerChoice <= 0.67 ? computerChoice = "Feuille" : computerChoice = "Ciseaux";
    return computerChoice;
  }

  compare(choice1, choice2) {

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Shifumi</h2>
        </div>
        <p>{this.state.userChoiceText}</p>
        <Icons />
        <p>L'ordinateur a choisi : {this.getComputerChoice()}</p>
      </div>
    );
  }
}

export default App;
