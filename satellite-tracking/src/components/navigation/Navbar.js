import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {} from "../../redux/reducer";
import "./Navbar.css";
import axios from "axios";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      toggleTopBar: false,
      // showMenu: false
      // showSignIn: true,
    };
    this.toggleTopBarFunction = this.toggleTopBarFunction.bind(this);
    this.logout = this.logout.bind(this);
  }

  toggleTopBarFunction() {
    this.setState((prevState) => {
      return {
        toggleTopBar: !prevState.toggleTopBar,
      };
    });
  }

  logout(e) {
    e.preventDefault();
    axios.get("/api/logout").then(() => {
      this.props.requestUserData({});
      this.props.history.push("/login");
    });
  }

  render() {
    return (
      <header>
        <div className="menu-container">
          <div className="sat-trac-text">
            <NavLink to="/welcome">SAT-TRAC</NavLink>
          </div>
          <button className="menu-button" onClick={this.toggleTopBarFunction}>
            Menu
          </button>

          <nav className={this.state.toggleTopBar ? "show" : ""}>
            <ul>
              <li>
                <NavLink to="/welcome">Home</NavLink>
              </li>
              <li>
                <NavLink to="/search">Search</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <form onSubmit={(e) => this.logout(e)}>
                <li>
                  <input type="submit" value="Logout" />
                </li>
              </form>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {};

const connectInvoked = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(connectInvoked(Navbar));
