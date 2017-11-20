import React, { Component } from 'react';
import '../stylesheets/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userChoice: "",
      userScore: 0,
      computerChoice: "",
      computerScore: 0,
      resultText: "",
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
      if (this.state.userScore < 9) {
        this.setState({
          userScore: this.state.userScore + 1,
          resultText: "You wiiiin ! Champion !"
        })
      } else {
        this.setState({
          userScore: "Winner",
          computerScore: 0,
          resultText: "Congratulation ! You win the game !"
        })
      }
    } else if (
      (computer === "rock" && user === "scissors") ||
      (computer === "scissors" && user === "paper") ||
      (computer === "paper" && user === "rock")
    ) {
      if (this.state.computerScore < 9) {
        this.setState({
          computerScore: this.state.computerScore + 1,
          resultText: "You loooose... looser !"
        })
      } else {
        this.setState({
          computerScore: "Winner",
          userScore: 0,
          resultText: "You loose the game :( Try again..."
        })
      }
    } else {
      this.setState({
        resultText: "It's a tie !"
      })
    }
  }

  replay = () => {
    this.setState({
      userScore: 0,
      computerScore: 0,
      resultText: ""
    })
  }

  render() {
    let rock_active_u, paper_active_u, scissors_active_u, rock_active_c, paper_active_c, scissors_active_c;

    this.state.userChoice === "rock"? rock_active_u = " active" : "";
    this.state.userChoice === "paper"? paper_active_u = " active" : "";
    this.state.userChoice === "scissors"? scissors_active_u = " active" : "";
    this.state.computerChoice === "rock"? rock_active_c = " active" : "";
    this.state.computerChoice === "paper"? paper_active_c = " active" : "";
    this.state.computerChoice === "scissors"? scissors_active_c = " active" : "";

    return (
      <div className="App">
        <div className="App-header">
          <h1 className="title">Shifumi</h1>
          <p className="text-intro">Can you beat the computer ? Choose rock, paper or scissors and try to reach 10 points...</p>
        </div>
        <h2>You - <span>{this.state.userScore}</span></h2>
        <i className={`fa fa-hand-rock-o fa-4x ${rock_active_u}`} name="rock" onClick={this.compare}></i>
        <i className={`fa fa-hand-paper-o fa-4x ${paper_active_u}`} name="paper" onClick={this.compare}></i>
        <i className={`fa fa-hand-scissors-o fa-4x ${scissors_active_u}`} name="scissors" onClick={this.compare}></i>
        <h2>Computer - <span>{this.state.computerScore}</span></h2>
        <i className={`no-cursor fa fa-hand-rock-o fa-4x ${rock_active_c}`} />
        <i className={`no-cursor fa fa-hand-paper-o fa-4x ${paper_active_c}`} />
        <i className={`no-cursor fa fa-hand-scissors-o fa-4x ${scissors_active_c}`} />
        <p>{this.state.resultText}</p>
        <i className="fa fa-repeat fa-2x" onClick={this.replay}></i>
      </div>
    );
  }
}

export default App;
