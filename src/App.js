import React, { Component } from 'react';
import Pokemon from './components/pokemon'
import { Router, browserHistory, Route } from 'react-router';
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