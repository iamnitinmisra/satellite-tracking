import React, { Component } from "react";
import axios from "axios";
import Background from "../background/Background";
import "./Signup.scss";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      zip: "",
      email: "",
      password: "",
    };
    this.register = this.register.bind(this);
  }
  register(e) {
    e.preventDefault();
    axios
      .post("/api/register", {
        email: this.state.email,
        password: this.state.password,
        zip: this.state.zip,
      })
      .then((res) => {
        if (res.data.warning) {
          alert(res.data.warning);
        } else {
          this.props.history.push("/login");
        }
      });
  }

  universalChangeHandler(property, value) {
    this.setState({
      [property]: value,
    });
  }

  render() {
    const { firstName, lastName, zip, email, password } = this.state;
    return (
      <div>
        <div className="components">
          <Background />
        </div>
        <div className="form-container">
          <form onSubmit={this.register}>
            {/* <div className="registration-container"> */}
            <div className="sign-up-form">
              <div className="sign-up">Sign-up</div>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={(event) =>
                  this.universalChangeHandler(
                    event.target.name,
                    event.target.value
                  )
                }
              />
              <input
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={(event) =>
                  this.universalChangeHandler(
                    event.target.name,
                    event.target.value
                  )
                }
              />
              <input
                placeholder="Zip Code"
                name="zip"
                value={zip}
                onChange={(event) =>
                  this.universalChangeHandler(
                    event.target.name,
                    event.target.value
                  )
                }
              />
              <input
                placeholder="Email"
                name="email"
                value={email}
                onChange={(event) =>
                  this.universalChangeHandler(
                    event.target.name,
                    event.target.value
                  )
                }
              />
              <input
                placeholder="Password"
                name="password"
                type="password"
                value={password}
                onChange={(event) =>
                  this.universalChangeHandler(
                    event.target.name,
                    event.target.value
                  )
                }
              />
              <input type="submit" value="Submit" />
            </div>
            {/* </div> */}
          </form>
        </div>
      </div>
    );
  }
}
