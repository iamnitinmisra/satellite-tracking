import React, { Component } from "react";
import './Navbar.css';


export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        toggleTopBar: false,
        showMenu: false,
        showSignIn: true,
    };
    this.toggleTopBarFunction = this.toggleTopBarFunction.bind(this)
  }

  toggleTopBarFunction() {
    this.setState(prevState => {
        // console.log("hit")
      return {
        toggleTopBar: !prevState.toggleTopBar
      };
    });
  }

  render() {
      console.log(this.state.toggleTopBar)
    return (
      <header>
        <div>
          <div>
            <a href="#" className="logo">SAT-TRAC</a>
          </div>
          <button onClick={this.toggleTopBarFunction}>Menu</button>

          <nav className={this.state.toggleTopBar ? "show" : ""}>
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
        </div>
      </header>
    );
  }
}
