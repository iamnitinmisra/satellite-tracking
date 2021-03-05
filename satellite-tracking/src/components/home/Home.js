import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Background from "../background/Background";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Background />
        <div className="sign-in-container">
          <NavLink to="/login">
            <button className="sign-in-button">Sign In</button>
          </NavLink>
        </div>
        <div className="bottom-half">
          <div className="sat-trac">SAT-TRAC</div>
          <div className="register-container">
            <NavLink to="/signup">
              <button className="sign-up-button">Register</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
