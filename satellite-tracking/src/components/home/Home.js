import React, { Component } from "react";
import {NavLink} from 'react-router-dom'
// import axios from "axios";

export default class Home extends Component {
  render() {
    return (          <div><header>
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
      </div>
      </div>)
  }
}
