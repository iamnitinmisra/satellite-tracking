import React, { Component } from 'react';
import axios from 'axios'
import './Login.scss'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            password: "",
            email: "",
            zip: "",
            loading: false            
        };
        
    }

    login() {
        this.setState({
            loading: true
        })
        axios.post("/api/login", {
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            this.props.setUser(res.data);
            this.setState({
                loading: false
            })
        })
    }

    register() {
        axios.post("/api/register", {
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            this.props.setUser(res.data)
        })
    }
}