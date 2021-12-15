import React, { useContext, useState } from "react";
import logimg from "../../Images/group1.jpg";
import "./Login.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Context } from "../../App";
function Login() {
  const { dispatch } = useContext(Context);
  const [email, setemail] = useState();
  const [pass, setpass] = useState();
  const [remember, setRemember] = useState();
  const history = useHistory();
  function onSubmit(e) {
    e.preventDefault();
    const ob = {
      email,
      pass,
      remember,
    };
    axios
      .post("http://localhost/funwithscience_backend/login.php", ob)
      .then((res) => {
        if (res.data === 2) {
          alert("password incorrect");
          setemail("");
          setpass("");
          setRemember("");
        } else if (res.data === 0) {
          alert("Invalid Login Details");
          setemail("");
          setpass("");
          setRemember("");
          console.log(res.data);
        } else {
          dispatch({
            type: "Login",
            payload: res.data,
          });
          alert("Login Successful");
          localStorage.setItem("user", JSON.stringify(res.data));
          console.log(res.data);
          history.push("/");
        }
      });
  }
  return (
    <div>
      <div className="login">
        <div className="loginmain">
          <figure>
            <img src={logimg} alt="" className="logimg" />
            <p className="figtext">
              Designed by <a href="https://www.freepik.com/">Freepik</a>
            </p>
          </figure>
          <form>
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
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
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
                value={pass}
                onChange={(e) => {
                  setpass(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="checkbox"
                className="check"
                name="remember"
                required
                value={pass}
                onChange={(e) => {
                  setpass(e.target.value);
                }}
              />
              <label className="remem">Remember me</label>
            </div>
            <button
              type="submit"
              onClick={onSubmit}
              className="btn btn-primary loginbtn"
            >
              Login
            </button>
            <p id="Register">
              Don't Have an account?<a href="/Signup">Register Here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
