import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../navigation/Navbar";
import Background from "../background/Background";
import './Search.scss'

class Search extends Component {
  render() {
    return (
      <div>
        <div className="components">
          <Navbar />
          <Background />
        </div>
        <div className="search-component-container">
          Search
          <input placeholder="Search satellite by name" />
          <div>International Space Station</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const connectInvoked = connect(mapStateToProps);

export default connectInvoked(Search);
