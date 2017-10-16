import React, { Component } from 'react';

class Icon extends Component {
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
      <i className={this.props.className} onClick={this.changeColor.bind(this)} style={{color:this.state.color}}></i>
    )
  }
}

export default Icon;
