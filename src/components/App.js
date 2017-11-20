import React, { Component } from 'react';
import '../stylesheets/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userChoice: null,
      userScore: 0,
      computerChoice: null,
      computerScore: 0,
      resultText: ""
    };
  }

  compare = (e) => {
    let user = e.target.attributes.name.value;
    let computer = ["rock", "paper", "scissors"][Math.floor(Math.random()*3)];
    this.setState({
      userChoice: user,
      computerChoice: computer
    });
    if (
      (user === "rock" && computer === "scissors") ||
      (user === "scissors" && computer === "paper") ||
      (user === "paper" && computer === "rock")
    ) {
      this.setState({
        userScore: this.state.userScore + 1,
        resultText: "You wiiiin ! Champion !"
      })
    } else if (
      (computer === "rock" && user === "scissors") ||
      (computer === "scissors" && user === "paper") ||
      (computer === "paper" && user === "rock")
    ) {
      this.setState({
        computerScore: this.state.computerScore + 1,
        resultText: "You loooose... looser !"
      })
    } else {
      this.setState({
        resultText: "It's a tie !"
      })
    }
  }

  // setClassName = (value) => {
  //   this.state.userChoice === value? `fa fa-hand-${value}-o fa-4x active` : `fa fa-hand-${value}-o fa-4x`
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Shifumi</h1>
        </div>
        <h2>You - <span>{this.state.userScore}</span></h2>
        <i className="fa fa-hand-rock-o fa-4x" name="rock" onClick={this.compare}></i>
        <i className="fa fa-hand-paper-o fa-4x" name="paper" onClick={this.compare}></i>
        <i className="fa fa-hand-scissors-o fa-4x" name="scissors" onClick={this.compare}></i>
        <h2>Computer - <span>{this.state.computerScore}</span></h2>
        <i className="fa fa-hand-rock-o fa-4x" />
        <i className="fa fa-hand-paper-o fa-4x" />
        <i className="fa fa-hand-scissors-o fa-4x" />
        <p>{this.state.resultText}</p>
      </div>
    );
  }
}

export default App;
