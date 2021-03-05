import React from "react";
import { Switch, Route } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Satellite from "./components/satellite/Satellite";
import Welcome from "./components/welcome/Welcome";
import Search from "./components/search/Search";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/profile" component={Profile} />
    <Route path="/welcome" component={Welcome} />
    <Route path="/search" component={Search} />
    <Route path="/satellite/:satId" component={Satellite} />
  </Switch>
);
