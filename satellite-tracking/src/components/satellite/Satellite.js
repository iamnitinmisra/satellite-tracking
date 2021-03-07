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
      info: {},
      passes: [],
      alt: 1, // observer altitude above sea level
      days: 1, // number of days of prediction (max 10)
      min_visibility: 60, //minimum number of seconds the satellite should be visible
    };
  }
  async componentDidMount() {
    const { user_lat, user_lng } = this.props.user;
    const { alt, days, min_visibility } = this.state;
    const { satId } = this.props.match.params;
    const url = "https://api.n2yo.com/rest/v1/satellite";
    const satelliteInfo = await axios.get(
      `${REACT_APP_REVERSE_PXY}/${url}/visualpasses/${satId}/${user_lat}/${user_lng}/${alt}/${days}/${min_visibility}/&apiKey=${API_KEY}`
    );
    const { info, passes } = satelliteInfo.data;

    if (passes) {
      this.setState({
        info: info,
        passes: passes,
      });
    } else {
      this.setState({
        info: info,
      });
    }
  }

  render() {
    if (!this.props.user) {
      return <></>;
    }

    const passes = this.state.passes.map((pass) => {
      const minutes = Math.floor(pass.duration / 60);
      const seconds = pass.duration - minutes * 60;
      console.log(minutes, seconds);
      return (
        <ul className="pass">
          <li>
            Start Time: <Moment unix>{pass.startUTC}</Moment>
          </li>
          <li>Start Azimuth: {pass.startAz}</li>
          <li>Max Elevation: {pass.maxEl}</li>
          <li>
            @ <Moment unix>{pass.maxUTC}</Moment>
          </li>
          <li>End Azimuth: {pass.endAz}</li>
          <li>
            End Time: <Moment unix>{pass.endAz}</Moment>
          </li>
          <li>
            Duration: {minutes}m {seconds}s
          </li>
        </ul>
      );
    });
    // const passes = this.state.myData.passes ? (
    //   this.state.myData.passes.map((pass, i) => (
    //     var d = new Date(1495159447834);
    //     var utc = d.getTime() + d.getTimezoneOffset() * 60000; //This converts to UTC 00:00
    //     var nd = new Date(utc + 3600000 * offset);
    //     console.log(nd.toLocaleString());
    //     <div key={i} className="pass">
    //       <li>
    //         <b>Start Time:</b> <Moment unix>{pass.startUTC}</Moment>
    //       </li>
    //       <li>
    //         <b>Start Azimuth:</b> {pass.startAz}° {pass.startAzCompass}
    //       </li>
    //       <li>
    //         <b>Max Elevation:</b> {pass.maxEl}
    //       </li>
    //       <li>
    //         <b>End Time:</b> <Moment unix>{pass.endUTC}</Moment>
    //       </li>
    //       <li>
    //         <b>End Azimuth:</b> {pass.endAz}° {pass.endAzCompass}
    //       </li>
    //       <li>
    //         <b>Duration:</b> {Math.round((pass.duration / 60) * 10) / 10}min
    //       </li>
    //       <br />
    //     </div>
    //   ))
    // ) : (
    //   <div className="no-pass">
    //     Unfortunately, over the next 7 days, there will be no visual passes
    //     overhead from your location
    //   </div>
    // );

    return (
      <div>
        <div className="components">
          <Navbar />
          <Background />
        </div>
        <div className="sat-component-container">
          <div className="passes-container">
            <div className="satName">{this.state.info.satname}</div>
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
