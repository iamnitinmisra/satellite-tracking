import React, { Component } from "react";
import { connect } from "react-redux";
import { requestUserData } from "../../redux/reducer";
import { NavLink } from "react-router-dom";

import Navbar from "../navigation/Navbar";
import Background from "../background/Background";
import "./Search.scss";

class Search extends Component {
  render() {
    return (
      <div>
        <div className="components">
          <Navbar />
          <Background />
        </div>
        <div className="search-component-container">
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

export default connectInvoked(Search);
