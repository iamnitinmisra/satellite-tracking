import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Home from "./components/home/Home"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Login /> */}
        <div>
          {/* <header>
            <div>
              <NavLink exact to='/' activeClassName='active'></NavLink>
              <NavLink to="/login" activeClassName="active">
                Sign-in
              </NavLink>
            </div>
          </header>

          <h2>SAT-TRAC</h2>
          <div>
            <NavLink to="/signup" activeClassName="active">
              Sign up with email
            </NavLink>
          </div> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
