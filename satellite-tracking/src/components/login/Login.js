import React, { Component } from "react";
import axios from "axios";
import { requestUserData } from "../../redux/reducer";
import { connect } from "react-redux";
import Background from "../background/Background";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      zip: "",
      loading: false
    };
    this.login = this.login.bind(this);
  }

  login(e) {
    e.preventDefault();
    this.setState({
      loading: true
    });
    axios
      .post("/api/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        // console.log(res.data)
        if (res.data.message) {
          alert(res.data.message);
        } else {
          this.props.requestUserData(res.data);
          this.props.history.push("/welcome");
        }
        // this.setState({
        //   loading: false
        // });
      })
      .catch(err => console.log(err));
  }

  universalChangeHandler(property, value) {
    this.setState({
      [property]: value
    });
  }

  render() {
    const { email, password } = this.state;

    // console.log("from redux =>",this.props)
    // console.log("from state =>", email, password);
    return (
      <div className="login-container">
        <Background />
        <form onSubmit={this.login}>
          <input
            placeholder="email"
            name="email"
            value={email}
            onChange={event =>
              this.universalChangeHandler(event.target.name, event.target.value)
            }
          />
          <input
            placeholder="password"
            name="password"
            value={password}
            onChange={event =>
              this.universalChangeHandler(event.target.name, event.target.value)
            }
          />
          <input type="submit" value="Submit" className="submit-button" />
        </form>
        <div className="nonmember">I'm not a member</div>
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

export default connectInvoked(Login);
