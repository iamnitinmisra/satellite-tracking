import React, { Component } from 'react';
import { connect } from "react-redux"
import axios from 'axios'
import { requestUserData } from "../../redux/reducer"
import './Satellite.scss'

class Satellite extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
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
  
  export default connectInvoked(Profile);