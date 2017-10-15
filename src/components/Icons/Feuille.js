import React, { Component } from 'react';

class Feuille extends Component {
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

  render() {
    return (
      <i className="fa fa-hand-paper-o fa-4x" onClick={this.changeColor.bind(this)} style={{color:this.state.color}}></i>
    )
  }
}

export default Feuille;