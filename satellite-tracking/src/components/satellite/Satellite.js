import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { requestUserData } from "../../redux/reducer";
import Moment from "react-moment";
import Navbar from "../../components/navigation/Navbar";
import Background from "../../components/background/Background";
import "./Satellite.scss";

class Satellite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: {},
      satName: "",
      alt: 1,
      days: 7, // check over the course of one week
      dur: 30 // show if visible for at least 30 seconds
    };
  }
  async componentDidMount() {
    //   async componentDidUpdate(prevProps) {
    //       if (JSON.stringify(prevProps.user) !== JSON.stringify(this.props.user)){
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
    this.setState({
      myData: satelliteInfo,
      satName: satelliteInfo.info.satname
    });
    // console.log(this.state.myData.info.satname); /*}*/
  }

  render() {
    // console.log(this.state.myData);
    // console.log(this.state.myData.info.satname)
    if (!this.props.user) {
      return <></>;
    }
    // console.log(this.state.myData)
    // const satName = this.state.myData.info.satname
    const passes = this.state.myData.passes ? (
      this.state.myData.passes.map((pass, i) => (
        <div key={i} className="pass">
          <li>
            <b>Start Time:</b> <Moment unix>{pass.startUTC}</Moment>
          </li>
          <li>
            <b>Start Azimuth:</b> {pass.startAz}° {pass.startAzCompass}
          </li>
          <li><b>Max Elevation:</b> {pass.maxEl}</li>
          <li>
          <b>End Time:</b> <Moment unix>{pass.endUTC}</Moment>
          </li>
          <li>
          <b>End Azimuth:</b> {pass.endAz}° {pass.endAzCompass}
          </li>
          <li><b>Duration:</b> {Math.round((pass.duration / 60) * 10) / 10}min</li>
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

const mapDispatchToProps = {
  requestUserData
};

const connectInvoked = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connectInvoked(Satellite);
