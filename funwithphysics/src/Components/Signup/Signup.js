import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./Signup.css";
import ImageLoad from "../imageLoad";
import axios from "axios";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    console.log(this.props);
    console.log(props);
    this.state = {
      username: "",
      email: "",
      pass: "",
      confirmPass: "",
      passwordVisible: false,
      confirmPasswordVisible: false,
    };
  }

  onChangeUsername(e) {
    this.setState({ username: e.target.value });
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ pass: e.target.value });
  }
  onChangeConfirmPassword(e) {
    this.setState({ confirmPass: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const ob = {
      username: this.state.username,
      email: this.state.email,
      pass: this.state.pass,
      confirmPass: this.state.confirmPass,
    };

    if (this.state.pass !== this.state.confirmPass) {
      alert("Password didn't match");
    } else {
      axios
        .post("https://technscience.com/funwithscience_backend/insert.php", ob)
        .then((res) => {
          if (res.data === 1) {
            alert(" Registered Successfully");
            this.setState({
              username: "",
              email: "",
              pass: "",
              confirmPass: "",
            });
            this.props.history("/login");
          } else if (res.data === 2) {
            alert("Username already exists");
          } else if (res.data === 0) {
            alert("Email already exists");
          } else {
            alert("Some error occured");
          }
          console.log(res.data);
        });
    }
  }
  render() {
    return (
      <>
        <Navbar />
        <div className="signup">
          <div className="signmain">
            <figure>
              {/* <img src={signimg} alt="" className="signimg" /> */}
              <ImageLoad
                className="signimg"
                main={"./Images-public/girl.webp"}
                placeholder={"./Images-public/girl-small.jpg"}
                alt={"signup"}
              />
              <p className="figtext">
                Designed by <a href="https://www.freepik.com/">Freepik</a>
              </p>
            </figure>
            <form onSubmit={this.onSubmit}>
              <p className="signhead">Sign Up</p>
              <div className="signdiv">
                <span>
                  <i className="fas fa-user"></i>
                </span>
                <input
                  type="text"
                  className="forminput"
                  name="username"
                  placeholder="Username"
                  required
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="signdiv">
                <span>
                  <i className="fas fa-envelope"></i>
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
                  <i className="fas fa-key"></i>
                </span>
                <input
                  type={!this.state.passwordVisible ? "password" : "text"}
                  className="forminput password"
                  name="pass"
                  placeholder="Password"
                  required
                  value={this.state.pass}
                  onChange={this.onChangePassword}
                />
                <span
                  onClick={() =>
                    this.setState({
                      passwordVisible: !this.state.passwordVisible,
                    })
                  }
                  className="togglebtn"
                >
                  <i
                    className={
                      !this.state.passwordVisible
                        ? "fas fa-eye-slash"
                        : "fas fa-eye"
                    }
                  ></i>
                </span>
              </div>
              <div className="signdiv">
                <span>
                  <i className="fas fa-key"></i>
                </span>
                <input
                  type={
                    !this.state.confirmPasswordVisible ? "password" : "text"
                  }
                  className="forminput password"
                  name="confirmPass"
                  placeholder="Confirm Password"
                  required
                  value={this.state.confirmPass}
                  onChange={this.onChangeConfirmPassword}
                />
                <span
                  onClick={() =>
                    this.setState({
                      confirmPasswordVisible:
                        !this.state.confirmPasswordVisible,
                    })
                  }
                  className="togglebtn"
                >
                  <i
                    className={
                      !this.state.confirmPasswordVisible
                        ? "fas fa-eye-slash"
                        : "fas fa-eye"
                    }
                  ></i>
                </span>
              </div>
              <button type="submit" className="btn btn-primary signupbtn">
                Register
              </button>
              <p id="Login_Here">
                Already Have an Account?<a href="/login">Login Here</a>
              </p>
            </form>
          </div>
        </div>
      </>
    );
  }
}
