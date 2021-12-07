import React, { Component } from "react";
import logimg from "../../Images/group1.jpg";
import "./Login.css";

export default class Signup extends Component {
  constructor(prop) {
    super(prop);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      pass: "",
    };
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ pass: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="login">
        <div className="loginmain">
          <figure>
            <img src={logimg} alt="" className="logimg" />
            <p className="figtext">
              Designed by <a href="https://www.freepik.com/">Freepik</a>
            </p>
          </figure>
          <form onSubmit={this.onSubmit}>
            <p className="loghead">Login</p>
            <div className="logdiv">
              <span>
                <i class="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                className="forminput"
                name="email"
                autoComplete="off"
                placeholder="Email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </div>
            <div className="signdiv">
              <span>
                <i class="fas fa-key"></i>
              </span>
              <input
                type="password"
                className="forminput"
                name="pass"
                placeholder="Password"
                required
                value={this.state.pass}
                onChange={this.onChangePassword}
              />
            </div>
            <button type="submit" className="btn btn-primary loginbtn">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}
