import React, {useState } from "react";
import axios from "axios";
import "./style.css";
import { useHistory } from "react-router-dom";
function ForgotPassword() {
  const [email, setemail] = useState();
  const history=useHistory();
  function onSubmit(e) {
    e.preventDefault();
    const ob = {
      email
    };
    axios
      .post("http://localhost/funwithscience_backend/checkemail.php", ob)
      .then((res) => {
          console.log(res);
        if (res.data === 1) {
          setemail("");
          history.push({pathname: '/resetpassword',
          state:ob});
        } else {
          alert("Invalid Email");
        }
      });
  }
  return (
    <div className="fpassword">
        <div className="fdiv">
          <form>
            <p className="fheader">Forgot Password</p>
            <label>Enter your Email:</label><br/>
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
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              onClick={onSubmit}
              className="btn btn-primary loginbtn"
            >
              Submit
            </button>
          </form>
          </div>
        </div>
  );
}

export default ForgotPassword;
