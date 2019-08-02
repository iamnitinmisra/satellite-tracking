import React, { Component } from "react";
import axios from "axios";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      zip: "",
      email: "",
      password: ""
    };
    this.register=this.register.bind(this)
  }
  register(e) {
      e.preventDefault()
    axios
      .post("/api/register", {
        email: this.state.email,
        password: this.state.password,
        zip: this.state.zip
      }).then(res => {
        if(res.data.warning){
          alert(res.data.warning)
        }
        else {
          this.props.history.push('/login')
        }
      })

      // .then(res => {
      //   this.props.setUser(res.data);
      // }).catch(err => console.log(err));
  }

 

  universalChangeHandler(property, value) {
    this.setState({
      [property]: value
    });
  }

  render() {
      const { firstName, lastName, zip, email, password } = this.state
      console.log(firstName, lastName, zip, email, password)
    return (
      <div>
        <form onSubmit={this.register}>
          <input
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={event =>
              this.universalChangeHandler(event.target.name, event.target.value)
            }
          />
          <input
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={event =>
              this.universalChangeHandler(event.target.name, event.target.value)
            }
          />
          <input
            placeholder="Zip Code"
            name="zip"
            value={zip}
            onChange={event =>
              this.universalChangeHandler(event.target.name, event.target.value)
            }
          />
          <input
            placeholder="Email"
            name="email"
            value={email}
            onChange={event =>
              this.universalChangeHandler(event.target.name, event.target.value)
            }
          />
          <input
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={event =>
              this.universalChangeHandler(event.target.name, event.target.value)
            }
          />
          <input type='submit' value='Submit'/>
        </form>
      </div>
    );
  }
}
