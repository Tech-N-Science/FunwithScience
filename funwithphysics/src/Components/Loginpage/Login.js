import React, { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import "./Login.css";

import { Context } from "../../App";
import ImageLoad from "../imageLoad";

function Login() {
  const { dispatch } = useContext(Context);
  const history = useNavigate();
  const loginBtn = useRef(null);

  const [inputValues, setInputValues] = useState({
    email: "",
    pass: "",
  });

  const { email, pass } = inputValues;

  const [remember, setRemember] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    function clearStates() {
      setInputValues({
        email: "",
        pass: "",
      });
      setRemember("");
    }

    let animationState = 0; //Defines which will be the current innerText of "loginBtn"

    //Function that will change the innerText of "loginBtn" every 200ms
    let loginBtnTextAnimation = setInterval(() => {
      switch (animationState) {
        //If the current value of "animationState" is 0
        case 0:
          loginBtn.current.innerText = "Logging in"; //Sets the innerText of "loginBtn" as "Logging in."
          return animationState++; //Add +1 to "animationState"

        //If the current value of "animationState" is 1
        case 1:
          loginBtn.current.innerText = "Logging in."; //Sets the innerText of "loginBtn" as "Logging in."
          return animationState++; //Add +1 to "animationState"

        //If the current value of "animationState" is 2
        case 2:
          loginBtn.current.innerText = "Logging in..";
          return animationState++;

        //If the current value of "animationState" is neither 0, 1 nor 2
        default:
          loginBtn.current.innerText = "Logging in...";
          return (animationState = 0); //Reset the value of animationState and restart the animation
      }
    }, 200);

    const ob = {
      email,
      pass,
      remember,
    };
    axios
      .post("https://technscience.com/funwithscience_backend/login.php", ob)
      .then((res) => {
        switch (res.data) {
          case "2":
            alert("Password incorrect");
            clearStates();
            break;
          case "0":
            alert("Invalid Login Details");
            clearStates();
            break;
          default:
            dispatch({
              type: "Login",
              payload: res.data,
            });

            alert("Login Successful");

            localStorage.setItem("user", JSON.stringify(res.data));
            history("/");
            break;
        }

        clearInterval(loginBtnTextAnimation);

        if (loginBtn.current === null) return;
        loginBtn.current.innerText = "Login";
      });
  };

  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div className="login">
        <div className="loginmain">
          <figure>
            {/* <img src={logimg} alt="" className="logimg" /> */}
            <ImageLoad
              className="logimg"
              main={"./Images-public/group1.webp"}
              placeholder={"./Images-public/group1-small.jpg"}
              alt={"login"}
            />
            <p className="figtext">
              Designed by <a href="https://www.freepik.com/">Freepik</a>
            </p>
          </figure>
          <form>
            <p className="loghead">Login</p>
            <div className="logdiv">
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
                onChange={handleInputChange}
                value={inputValues.email}
              />
            </div>
            <div className="signdiv">
              <span>
                <i className="fas fa-key"></i>
              </span>
              <input
                type={!visible ? "password" : "text"}
                className="forminput password"
                name="pass"
                placeholder="Password"
                required
                onChange={handleInputChange}
                value={inputValues.pass}
              />
              <span onClick={() => setVisible(!visible)}>
                <i className={!visible ? "fas fa-eye-slash" : "fas fa-eye"}></i>
              </span>
            </div>
            <div>
              <input
                type="checkbox"
                className="check"
                name="remember"
                required
                value={pass}
                onChange={handleInputChange}
              />
              <label className="remem">Remember me</label>
              <p>
                <a href="/fpass">Forgot Password?</a>
              </p>
            </div>
            <button
              type="submit"
              ref={loginBtn}
              onClick={onSubmit}
              className="btn btn-primary loginbtn"
            >
              Login
            </button>
            <p id="Register">
              Don't Have an account? <a href="/Signup">Register Here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
