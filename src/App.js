import React, { Component } from 'react';
import Pokemon from './components/pokemon'
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Pokemon}/>
      </Router>
    );
  }
}

export default App;