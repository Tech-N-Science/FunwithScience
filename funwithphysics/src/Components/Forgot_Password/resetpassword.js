import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";

function ResetPassword() {
  const location = useLocation();
  const [password, setpassword] = useState();
  const [confirmpassword, setconfpassword] = useState();
  const history = useNavigate();
  function onSubmit(e) {
    const ob = { pass: password, email: location.state.email };
    e.preventDefault();
    if (password === confirmpassword) {
      axios
        .post(
          "https://technscience.com/funwithscience_backend/resetpass.php",
          ob
        )
        .then((res) => {
          console.log(res);
          if (res.data === 1) {
            setpassword("");
            setconfpassword("");
            history.push("/Login");
          } else {
            alert("Password is not updated.Some Error occured.");
          }
        });
    } else {
      alert("Password doesn't match!!");
    }
  }
  return (
    <div className="fpassword">
      <div className="fdiv">
        <form>
          <p className="fheader">Reset Password</p>
          <div className="logdiv">
            <span>
              <i className="fas fa-envelope"></i>
            </span>
            <input
              type="password"
              className="forminput"
              name="pass"
              autoComplete="off"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>
          <div className="signdiv">
            <span>
              <i className="fas fa-key"></i>
            </span>
            <input
              type="password"
              className="forminput"
              name="confpass"
              placeholder="Confirm Password"
              required
              value={confirmpassword}
              onChange={(e) => {
                setconfpassword(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            onClick={onSubmit}
            className="btn btn-primary loginbtn"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
