import React, { Component } from "react";
import { connect } from "react-redux";
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
      trackedSatellites: "",
    };
    this.updateZip = this.updateZip.bind(this);
  }

  deleteProfile(id) {
    axios.delete(`/api/profile/${id}`).then((res) => {
      this.props.requestUserData(null); // clears out redux store
      this.setState({ user: res.data });
      this.props.history.push("/login");
    });
  }

  updateZip(e, id, zip) {
    e.preventDefault();
    axios.put(`/api/profile/${id}?zip=${zip}`).then((res) => {
      this.setState({ user: res.data });
      this.props.requestUserData(res.data);
    });
  }

  hideZipInputToggle() {
    this.setState((prevState) => {
      return {
        hideZipInput: !prevState.hideZipInput,
      };
    });
  }

  universalChangeHandler(property, value) {
    this.setState({
      [property]: value,
    });
  }

  render() {
    const { zip } = this.state;
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
            <div className="zip-container">
              <div className="zip-text">Zip:</div>
              <div
                className={
                  this.state.hideZipInput
                    ? "input-new-zip-hide"
                    : "input-new-zip-show"
                }
              >
                <form
                  onSubmit={(e) =>
                    this.updateZip(e, this.props.user.user_id, zip)
                  }
                >
                  <input
                    className="new-zip-input-field"
                    placeholder={this.props.user.user_zip}
                    name="zip"
                    value={zip}
                    onChange={(event) =>
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
              </div>

              <div className={this.state.hideZipInput ? "zip" : "hide-zip"}>
                {this.props.user.user_zip}
              </div>
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
  requestUserData,
};

const connectInvoked = connect(mapStateToProps, mapDispatchToProps);

export default connectInvoked(Profile);
