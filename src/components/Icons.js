import React, { Component } from 'react';
import Pierre from './Icons/Pierre';
import Feuille from './Icons/Feuille';
import Ciseaux from './Icons/Ciseaux';

class Icons extends Component {
  render() {
    return (
      <div>
        <Pierre />
        <Feuille />
        <Ciseaux />
      </div>
    );
  }
}

export default Icons;
