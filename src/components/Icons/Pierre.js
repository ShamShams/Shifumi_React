import React, { Component } from 'react';

class Pierre extends Component {
  constructor() {
    super();
    this.state = {
      color: "black"
    }
  }

  changeColor() {
    this.setState({
      color: "#00649c"
    })
  }

  // choosePierre() {
  //   let userChoice = 'Pierre';
  //   console.log(userChoice);
  // }

  render() {
    return (
      <i className="fa fa-hand-rock-o fa-4x" onClick={this.changeColor.bind(this)} style={{color:this.state.color}}></i>
    )
  }
}

export default Pierre;
