import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Explore from './containers/Explore';
import Boards from './containers/Boards';
import Profile from './containers/Profile';
import About from './containers/About';
import NavBar from './components/NavBar.js';





class App extends Component {
  render () {
    return (
      <div className= "App">
        <Router >
          <NavBar />
          <Switch>
            <Route exact path='/explore' render={props => 
              <Explore {...props}/>}/>
            <Route exact path='/boards' render={props => 
              <Boards {...props}/>}/>
            <Route exact path='/profile' render={props => 
              <Profile {...props}/>}/>
            <Route exact path='/about' render={props => 
              <About {...props}/>}/>
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
