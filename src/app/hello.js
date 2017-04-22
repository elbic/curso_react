import React, {Component} from 'react';
import Home from './Home';
import Blog from './Blog';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export class Hello extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/blog" component={Blog}/>
        </div>
      </Router>
    );
  }
}
