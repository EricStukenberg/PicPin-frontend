import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Explore from './containers/Explore';
import Boards from './containers/Boards';
import Profile from './containers/Profile';



function App() {
  redner () {
    return (
      <div className="App">
        <Router >
          <Switch>
            <Route exact path='/explore' render={props => 
              <Explore {...props}/>}/>
            <Route exact path='/boards' render={props => 
              <Boards {...props}/>}/>
            <Route exact path='/profile' render={props => 
              <Profile {...props}/>}/>
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
