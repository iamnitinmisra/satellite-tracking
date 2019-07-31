import React, { Component } from "react";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      zip: "",
      latitude: "",
      longitude: ""
    };
  }

  render() {
    return (
      <div className="app">
        <header>
        <div>    SAT-TRAC</div>
        <menu></menu>
        </header>
        <div className="location-container">Your Current Location</div>
        <div className="tracked-sat-container">Tracked Satellites</div>
        <footer>
          <button className="dontdoit">Delete account</button>
        </footer>
      </div>
    );
  }
}
