import React from "react";
import "./Footer.css";
import logo from "../../Images/Logo/logo.webp";
import { Link } from "react-router-dom";
// import Form from "../Form/Form";
const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="main-content">
          <div className="left box-res">
            <div className="footer-logo">
              <img src={logo} alt="logo" />
            </div>
          </div>

          <div className="center1 box">
            <h2 className="additional">Additional Links</h2>
            <div className="content">
              <div className="center-bottom">
                <div className="">
                  <Link to="/">
                    <span className="fas fa-user"></span>
                    <span className="text">About Us</span>
                  </Link>
                </div>
                <div className="contact">
                  <Link to="/contact">
                    <span className="fas fa-comments"></span>
                    <span className="text">Contact</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="center box">
            <h2>Connect with Us</h2>
            <div className="content">
              <div className="center">
                <div className="icons">
                  <li>
                    <Link to="/">
                      <span className="fab fa-facebook-f"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span className="fab fa-twitter"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span className="fab fa-instagram"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname:
                          "https://www.linkedin.com/company/tech-n-science",
                      }}
                      target="_blank"
                    >
                      <span className="fab fa-linkedin-in"></span>
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>

          <div className="right box">
            <h2>Address</h2>
            <div className="content">
              <div className="place">
                <span className="fas fa-map-marker-alt"></span>
                <span className="text">
                  Anand Arcade,Block C(G-4),MSR Layout,Chandrampalem,VSKP,AP-48
                </span>
              </div>

              <div className="email">
                <a href="mailto:support@technscience.com" target="_blank">
                  <span className="fas fa-envelope"></span>
                  <span className="text">support@technscience.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <center>
            <span className="credit">
              <Link to="/">Tech N Science</Link> |{" "}
            </span>
            <span className="far fa-copyright"></span>
            <span> 2022 All rights reserved.</span>
          </center>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
