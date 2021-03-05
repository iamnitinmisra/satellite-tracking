import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Moment from "react-moment";
import Navbar from "../../components/navigation/Navbar";
import Background from "../../components/background/Background";
import "./Satellite.scss";
const { REACT_APP_API_KEY: API_KEY, REACT_APP_REVERSE_PXY } = process.env;

class Satellite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: {},
      satName: "",
      alt: 1,
      dur: 30,
    };
  }
  async componentDidMount() {
    const { user_lat, user_lng } = this.props.user;
    const { alt, dur } = this.state;
    const { satId } = this.props.match.params;
    const satelliteInfo = await axios.get(
      `${REACT_APP_REVERSE_PXY}/https://api.n2yo.com/rest/v1/satellite/positions/${satId}/${user_lat}/${user_lng}/${alt}/${dur}/&apiKey=${API_KEY}`
    );
    console.log(satelliteInfo.data);
    // this.setState({
    //   myData: satelliteInfo,
    //   satName: satelliteInfo.info.satname,
    // });
  }

  render() {
    console.log(this.props.user);
    if (!this.props.user) {
      return <></>;
    }
    const passes = this.state.myData.passes ? (
      this.state.myData.passes.map((pass, i) => (
        <div key={i} className="pass">
          <li>
            <b>Start Time:</b> <Moment unix>{pass.startUTC}</Moment>
          </li>
          <li>
            <b>Start Azimuth:</b> {pass.startAz}° {pass.startAzCompass}
          </li>
          <li>
            <b>Max Elevation:</b> {pass.maxEl}
          </li>
          <li>
            <b>End Time:</b> <Moment unix>{pass.endUTC}</Moment>
          </li>
          <li>
            <b>End Azimuth:</b> {pass.endAz}° {pass.endAzCompass}
          </li>
          <li>
            <b>Duration:</b> {Math.round((pass.duration / 60) * 10) / 10}min
          </li>
          <br />
        </div>
      ))
    ) : (
      <div className="no-pass">
        Unfortunately, over the next 7 days, there will be no visual passes
        overhead from your location
      </div>
    );

    return (
      <div>
        <div className="components">
          <Navbar />
          <Background />
        </div>
        <div className="sat-component-container">
          <div className="passes-container">
            <div className="satName">{this.state.satName}</div>
            <div>
              <ul>{passes}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {};

const connectInvoked = connect(mapStateToProps, mapDispatchToProps);

export default connectInvoked(Satellite);
