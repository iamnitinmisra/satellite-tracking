import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { requestUserData } from "./redux/reducer";
import { connect } from "react-redux";
import Routes from "./Routes";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    const user = await axios.get("/api/session");
    this.props.requestUserData(user.data);
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <div>{Routes}</div>
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

export default connectInvoked(App);
