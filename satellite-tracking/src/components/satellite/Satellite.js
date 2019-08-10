import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { requestUserData } from "../../redux/reducer";
import Navbar from "../../components/navigation/Navbar";
import Background from "../../components/background/Background";
import "./Satellite.scss";

class Satellite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: {},
      alt: 0,
      days: 7, // check over the course of one week
      dur: 30 // show if visible for at least 30 seconds
    };
  }

  async componentDidUpdate(prevProps) {
      if (JSON.stringify(prevProps.user) !== JSON.stringify(this.props.user)){
    //   console.log(this.props.user)
    const satelliteInfo = await axios
      .get(
        `http://www.n2yo.com/rest/v1/satellite/visualpasses/${
          this.props.match.params.satId
        }/${this.props.user.user_lat}/${this.props.user.user_lng}/${
          this.state.alt
        }/${this.state.days}/${
          this.state.dur
        }/&apiKey=MLTZU8-SP6X2C-SUV5UQ-467T`
      )
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err));
    // console.log("res.data", satelliteInfo)
    this.setState({
      myData: satelliteInfo
    });
    console.log(this.state.myData)}
  }

  render() {
    console.log(this.state.myData.passes);
    if (!this.props.user) {
      return <></>;
    }
    const passes = this.state.myData.passes
      ? this.state.myData.passes.map(pass => (
          <div className="passes">
            <li>
              Start Time {"(UTC)"}: {pass.startUTC}
            </li>
            <li>Start Azimuth: {pass.startAz}</li>
            <li>Max Elevation: {pass.maxEl}</li>
            <li>
              End Time {"(UTC)"}: {pass.endUTC}
            </li>
            <li>End Azimuth: {pass.endAz}</li>
            <li>Duration: {pass.duration}</li>
            <br />
          </div>
        ))
      : false;
    return (
      <div>
        <div className="components">
          <Navbar /> <Background />
        </div>
        <div>
          <ul>{passes}</ul>
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

export default connectInvoked(Satellite);
