import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Explore from './containers/Explore';

function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path='/explore' render={props => 
            <Explore {...props}/>}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
