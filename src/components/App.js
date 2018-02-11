import React, { Component } from 'react';
import '../stylesheets/App.css';

class App extends Component {
  state = {
    userChoice: "",
    computerChoice: "",
    userScore: 0,
    computerScore: 0,
    text: "Be the first to reach 10 points...",
    gameIsOver: false
  }

  compare = (e) => {
    let user = e.target.attributes.name.value;
    let computer = ["rock", "paper", "scissors"][Math.floor(Math.random()*3)];
    this.setState({
      userChoice: user,
      computerChoice: computer
    });

    if (this.state.gameIsOver) {
      this.setState({
        text: "Click on Replay to start a new game",
        computerChoice: ""
      })
    } else if (
      (user === "rock" && computer === "scissors") ||
      (user === "scissors" && computer === "paper") ||
      (user === "paper" && computer === "rock")
    ) {
      if (this.state.userScore < 9) {
        this.setState({
          userScore: this.state.userScore + 1,
          text: "You wiiin ! Youhouu !"
        })
      } else {
        this.setState({
          userScore: "Winner",
          gameIsOver: true,
          text: "Congratulations ! You win the game !"
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
          text: "Oh oh, computer wins..."
        })
      } else {
        this.setState({
          computerScore: "Winner",
          gameIsOver: true,
          text: "You looooose... Try again"
        })
      }
    } else {
      this.setState({
        text: "It's a tie !"
      })
    }
  }

  replay = () => {
    this.setState({
      userChoice: "",
      computerChoice: "",
      userScore: 0,
      computerScore: 0,
      text: "Be the first to reach 10 points...",
      gameIsOver: false
    })
  }

  render() {
    // Ajouter la class "active" pour que la main devienne bleue lorsque le joueur la sélectionne
    let rock_active_u, paper_active_u, scissors_active_u, rock_active_c, paper_active_c, scissors_active_c;
    this.state.userChoice === "rock"? rock_active_u = " active" : " ";
    this.state.userChoice === "paper"? paper_active_u = " active" : " ";
    this.state.userChoice === "scissors"? scissors_active_u = " active" : " ";
    this.state.computerChoice === "rock"? rock_active_c = " active" : " ";
    this.state.computerChoice === "paper"? paper_active_c = " active" : " ";
    this.state.computerChoice === "scissors"? scissors_active_c = " active" : " ";

    return (
      <div className="App">
        <div className="App-header">
          <h1 className="title">Shifumi</h1>
          <p className="sub-title">Rock Paper Scissors Game</p>
        </div>
        <div className="playground">
          <h2>You - <span>{this.state.userScore}</span></h2>
          <i className={`fa fa-hand-rock-o fa-4x ${rock_active_u}`} name="rock" onClick={this.compare}></i>
          <i className={`fa fa-hand-paper-o fa-4x ${paper_active_u}`} name="paper" onClick={this.compare}></i>
          <i className={`fa fa-hand-scissors-o fa-4x ${scissors_active_u}`} name="scissors" onClick={this.compare}></i>
          <h2>Computer - <span>{this.state.computerScore}</span></h2>
          <i className={`no-cursor fa fa-hand-rock-o fa-4x ${rock_active_c}`} />
          <i className={`no-cursor fa fa-hand-paper-o fa-4x ${paper_active_c}`} />
          <i className={`no-cursor fa fa-hand-scissors-o fa-4x ${scissors_active_c}`} />
          <p>{this.state.text}</p>
        </div>
        <h2 className="replay" onClick={this.replay}><i className="fa fa-repeat fa-2x"></i>Replay</h2>
      </div>
    );
  }
}

export default App;
