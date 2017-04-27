import React, {Component} from 'react';
import Menu from './Menu';

export default class Blog extends Component {
  render() {
    return (
      <div>
        <Menu />
        <h1>Esto es un blog</h1>
      </div>
    );
  }
}