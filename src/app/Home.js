import React, {Component} from 'react';
import Menu from './Menu';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Menu />
        <h1>Esto es el home</h1>
      </div>
    );
  }
}
