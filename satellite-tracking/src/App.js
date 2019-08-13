import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Satellite from "./components/satellite/Satellite";
import Welcome from "./components/welcome/Welcome"
import { requestUserData } from "./redux/reducer";
import { connect } from "react-redux";
import "./App.css";
import Axios from "axios";
import Search from "./components/search/Search";

class App extends Component {

  componentDidMount() {
    Axios.get("/api/session").then(res => {
      this.props.requestUserData(res.data);
      // console.log(res.data)
    });
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Profile} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/search" component={Search} />
            <Route path="/satellite/:satId" component={Satellite} />
          </Switch>
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

export default connectInvoked(App);
