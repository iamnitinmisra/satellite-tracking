import React, { Component } from "react";
import './Navbar.css';


export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: false
    };
    this.toggleMenuFunction = this.toggleMenuFunction.bind(this);
  }
  toggleMenuFunction() {
    this.setState(prevState => {
      return {
        toggleMenu: !prevState.toggleMenu
      };
    });
  }

  render() {
    return (
      <header>
        <div>
          <div>
            <a href="#" className="logo">
              SAT-TRAC
            </a>
          </div>
          <button onClick={this.toggleMenuFunction}>Menu</button>
        </div>

        <nav className={this.state.toggleMenu ? "show" : ""}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Search</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
