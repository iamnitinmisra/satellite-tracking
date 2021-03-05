import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Satellite from "./components/satellite/Satellite";
import Welcome from "./components/welcome/Welcome";
import { requestUserData } from "./redux/reducer";
import { connect } from "react-redux";
import "./App.css";
import Search from "./components/search/Search";
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
    console.log(this.props);
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
  requestUserData,
};

const connectInvoked = connect(mapStateToProps, mapDispatchToProps);

export default connectInvoked(App);
