import React, { Component } from 'react';
import './App.css';
import Header from './shared/Header';
import Main from './components/Main';
import Footer from './shared/Footer';
import { Router, Route, Switch } from 'react-router-dom';
import Login from './authentication/login';
import SignUp from './authentication/signUp';
import history from './history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={SignUp}/>
          <Route path="/main" render={() =>
            <div className="app-main-div">
              <Header /> 
              <Main />
              <Footer />
            </div>
          } />
        </Switch>
      </Router>
    );
  }
}

export default App;
