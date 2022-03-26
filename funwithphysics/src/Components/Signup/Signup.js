import React, { Component } from "react";

import "./Signup.css";

import Navbar from "../Navbar/Navbar";
import ImageLoad from "../imageLoad";

import axios from "axios";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.registerBtn = React.createRef(null);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: "",
      email: "",
      pass: "",
      visible: false,
    };
  }

  onInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onSubmit(e) {
    e.preventDefault();

    let animationState = 0; //Defines which will be the current innerText of "registerBtn"

    //Function that will change the innerText of "registerBtn" every 200ms
    let registerBtnTextAnimation = setInterval(() => {
      switch (animationState) {
        //If the current value of "animationState" is 0
        case 0:
          this.registerBtn.current.innerText = "Registering"; //Sets the innerText of "registerBtn" as "Logging in."
          return animationState++; //Add +1 to "animationState"

        //If the current value of "animationState" is 1
        case 1:
          this.registerBtn.current.innerText = "Registering."; //Sets the innerText of "registerBtn" as "Logging in."
          return animationState++; //Add +1 to "animationState"

        //If the current value of "animationState" is 2
        case 2:
          this.registerBtn.current.innerText = "Registering..";
          return animationState++;

        //If the current value of "animationState" is neither 0, 1 nor 2
        default:
          this.registerBtn.current.innerText = "Registering...";
          return (animationState = 0); //Reset the value of animationState and restart the animation
      }
    }, 200);

    const ob = {
      username: this.state.username,
      email: this.state.email,
      pass: this.state.pass,
    };

    axios
      .post("https://technscience.com/funwithscience_backend/insert.php", ob)
      .then((res) => {
        switch (res.data) {
          case 0:
            alert("Email already exists");
            break;

          case 1:
            alert(" Registered Successfully");
            this.setState({
              username: "",
              email: "",
              pass: "",
            });
            this.props.history("/login");
            break;

          case 2:
            alert("Username already exists");
            break;

          default:
            alert("Some error occured");
        }

        clearInterval(registerBtnTextAnimation);
        this.registerBtn.current.innerText = "Register";
      });
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
                  onChange={this.onInputChange}
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
                  onChange={this.onInputChange}
                />
              </div>
              <div className="signdiv">
                <span>
                  <i className="fas fa-key"></i>
                </span>
                <input
                  type={!this.state.visible ? "password" : "text"}
                  className="forminput password"
                  name="pass"
                  placeholder="Password"
                  required
                  value={this.state.pass}
                  onChange={this.onInputChange}
                />
                <span
                  onClick={() =>
                    this.setState({ visible: !this.state.visible })
                  }
                  className="togglebtn"
                >
                  <i
                    className={
                      !this.state.visible ? "fas fa-eye-slash" : "fas fa-eye"
                    }
                  ></i>
                </span>
              </div>
              <button ref={this.registerBtn} type="submit" className="btn btn-primary signupbtn">
                Register
              </button>
              <p id="Login_Here">
                Already Have an Account? <a href="/login">Login Here</a>
              </p>
            </form>
          </div>
        </div>
      </>
    );
  }
}
