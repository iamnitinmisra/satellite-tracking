import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../navigation/Navbar";
import axios from 'axios'
import { requestUserData } from "../../redux/reducer";
import Background from "../background/Background";
import "./Profile.scss";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      zip: "",
      latitude: "",
      longitude: "",
      trackedSatellites: ""
    };
  }

  deleteProfile(id){
    console.log('delete button hit')
    axios.delete(`/api/profile/${id}`).then(res => {
      this.props.requestUserData(null)  // clears out redux store  
      this.setState({ user: res.data })
      this.props.history.push("/login");
    })
  }

  updateZip(id, zip){
    axios.put(`/api/profile/${id}?zip=${zip}`).then(res => {
      this.setState({ user: res.data })
    })
  }

  render() {
    // console.log(this.props);
    if (!this.props.user) {
      return <></>; //this checks to see if redux has a user and if not
    }
    return (
      <div>
        <div className="components">
          <Navbar />
          <Background />
        </div>
        <div className="profile-component-container">
          <div className="location-container">
            <div className="current-location">Your Current Location</div>
            <div>
              Zip: <span className="zip">{this.props.user.user_zip}</span>
            </div>
            <div>
              Latitude: <span className="lat">{this.props.user.user_lat}</span>
            </div>
            <div>
              Longitude:<span className="lng">{this.props.user.user_lng}</span>
            </div>
            <button className="change-location-button">Change Location</button>
          </div>
          <div className="tracked-sat-container">
            <div className="tracked-satellites">Tracked Satellites</div>
          </div>

          <div className="delete-button-container">
            <button className="dont-do-it" onClick={()=>this.deleteProfile(this.props.user.user_id)}>Delete account</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  requestUserData
};

const connectInvoked = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connectInvoked(Profile);
