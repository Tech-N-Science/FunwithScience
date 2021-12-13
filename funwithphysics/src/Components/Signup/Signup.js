import React, { Component } from "react";
import signimg from "../../Images/girl.jpg";
import Navbar from "../Navbar/Navbar";
import "./Signup.css";
import axios from "axios";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    console.log(this.props);

    this.state = {
      username: "",
      email: "",
      pass: "",
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

  onSubmit(e) {
    e.preventDefault();
    const ob = {
      username: this.state.username,
      email: this.state.email,
      pass: this.state.pass,
    };

    axios
      .post("http://localhost/funwithscience_backend/insert.php", ob)
      .then((res) => {
        if (res.data === 1) {
          alert(" Registered Successfully");
          this.props.history.push("/login");
          console.log(res.data);
        } else {
          alert("Some Error Occured");
          console.log(res.data);
        }
      });

    this.setState({
      username: "",
      email: "",
      pass: "",
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="signup">
          <div className="signmain">
            <figure>
              <img src={signimg} alt="" className="signimg" />
              <p className="figtext">
                Designed by <a href="https://www.freepik.com/">Freepik</a>
              </p>
            </figure>
            <form onSubmit={this.onSubmit}>
              <p className="signhead">Sign Up</p>
              <div className="signdiv">
                <span>
                  <i class="fas fa-user"></i>
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
              <button type="submit" className="btn btn-primary signupbtn">
                Register
              </button>
              <p id="Login_Here">
                Already Have an Account?<a href="/login">Login Here</a>
              </p>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
