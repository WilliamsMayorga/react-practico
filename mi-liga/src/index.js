import React from 'react';
import { render } from 'react-dom';
import './index.css';

class HolaMundo extends React.Component {
  render(){
    return (
      <p>Hola Mundo</p>
    );
  }
}

render(<HolaMundo/>, document.querySelector('#root'));