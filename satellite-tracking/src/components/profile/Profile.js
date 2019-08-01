import React, { Component } from "react";
// import { requestUserData } from "../../redux/reducer";
// import { connect } from 'react-redux'

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

  // componentDidMount() {
  //   this.props.requestUserData();
  // }

  render() {
    return (
      <div className="profile">
        <header>
          <span>SAT-TRAC</span>
          <span>Menu</span>
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

// function mapStateToProps(state) {
//   return state;
// }

// const connectInvoked = connect(mapStateToProps);

// export default connectInvoked(Profile);
