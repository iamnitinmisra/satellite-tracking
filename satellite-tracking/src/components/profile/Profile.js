import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import axios from "axios";
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
      hideZipInput: true,
      trackedSatellites: ""
    };
    this.updateZip = this.updateZip.bind(this);
  }

  deleteProfile(id) {
    console.log("delete button hit");
    axios.delete(`/api/profile/${id}`).then(res => {
      this.props.requestUserData(null); // clears out redux store
      this.setState({ user: res.data });
      this.props.history.push("/login");
    });
  }

  updateZip(e, id, zip) {
    e.preventDefault();
    axios.put(`/api/profile/${id}?zip=${zip}`).then(res => {
      this.setState({ user: res.data });
      this.props.requestUserData(res.data);
      // console.log(this.props.user);
    });
  }

  hideZipInputToggle() {
    this.setState(prevState => {
      return {
        hideZipInput: !prevState.hideZipInput
      };
    });
  }

  universalChangeHandler(property, value) {
    this.setState({
      [property]: value
    });
  }

  render() {
    const { zip } = this.state;
    // console.log(zip);
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
              Zip:
              <span
                className={
                  this.state.hideZipInput
                    ? "input-new-zip-hide"
                    : "input-new-zip-show"
                }
              >
                <form
                  onSubmit={e =>
                    this.updateZip(e, this.props.user.user_id, zip)
                  }
                >
                  {/* update zip code */}
                  <input
                    className="new-zip-input-field"
                    placeholder={this.props.user.user_zip}
                    name="zip"
                    value={zip}
                    onChange={event =>
                      this.universalChangeHandler(
                        event.target.name,
                        event.target.value
                      )
                    }
                  />
                  <input
                    type="submit"
                    value="Submit"
                    className="hidden-submit-input"
                    onClick={() => this.hideZipInputToggle()}
                  />
                </form>
              </span>
              <span className={this.state.hideZipInput ? "zip" : "hide-zip"}>
                {this.props.user.user_zip}
              </span>
            </div>
            <div>
              Latitude: <span className="lat">{this.props.user.user_lat}</span>
            </div>
            <div>
              Longitude:<span className="lng">{this.props.user.user_lng}</span>
            </div>
            <button
              className="change-location-button"
              onClick={() => this.hideZipInputToggle()}
            >
              Change Location
            </button>
          </div>
          <div className="tracked-sat-container">
            <div className="tracked-satellites">List of Satellites</div>
            <ul className="sat-list">
              <li>
                <NavLink to="/satellite/25544">
                  International Space Station
                </NavLink>
              </li>
              <li>
                <NavLink to="/satellite/36516">SES 1</NavLink>
              </li>
              <li>
                <NavLink to="/satellite/33591">NOAA 19</NavLink>
              </li>
              <li>
                <NavLink to="/satellite/29155">GOES 13</NavLink>
              </li>
              <li>
                <NavLink to="/satellite/25338">NOAA 15</NavLink>
              </li>
              <li>
                <NavLink to="/satellite/28654">NOAA 18</NavLink>
              </li>
              <li>
                <NavLink to="/satellite/25994">TERRA</NavLink>
              </li>
              <li>
                <NavLink to="/satellite/27424">AQUA</NavLink>
              </li>
              <li>
                <NavLink to="/satellite/38771">METOP-B</NavLink>
              </li>
              <li>
                <NavLink to="/satellite/37849">SUOMI NPP</NavLink>
              </li>
              <li>
                <NavLink to="/satellite/36411">GOES 15</NavLink>
              </li>
              <li>
                <NavLink to="/satellite/40967">FOX-1A {"(AO-85)"}</NavLink>
              </li>
              <li>
                <NavLink to="/satellite/27607">SAUDISAT 1C</NavLink>
              </li>
              <li>
                <NavLink to="/satellite/41332">KMS-4</NavLink>
              </li>
              <li>
                <NavLink to="/satellite/37820">TIANGONG 1</NavLink>
              </li>
              <li>
                <NavLink to="/satellite/40069">METEOR M2</NavLink>
              </li>
              <li>
                <NavLink to="/satellite/25657">ASIASAT 3S</NavLink>
              </li>
              <li>
                <NavLink to="/satellite/36032">NSS 12</NavLink>
              </li>
              <li>
                <NavLink to="/satellite/31135">AGILE</NavLink>
              </li>
              <li>
                <NavLink to="/satellite/40147">MEASAT 3B</NavLink>
              </li>
            </ul>
          </div>

          <div className="delete-button-container">
            <button
              className="dont-do-it"
              onClick={() => this.deleteProfile(this.props.user.user_id)}
            >
              Delete account
            </button>
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
