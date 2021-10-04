import React from "react";
import "./Footer.css";
import logo from "../../Images/Logo/logo.png";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="main-content">
          <div className="left box">
            <div className="footer-logo">
              <img src={logo} alt="logo" />
            </div>
            <h2>Address</h2>
            <div className="content">
              <div className="place">
                <span className="fas fa-map-marker-alt"></span>
                <span className="text">India</span>
              </div>
              <div className="phone">
                <span className="fas fa-phone"></span>
                <span className="text">+91 1234567890</span>
              </div>
              <div className="email">
                <link href="mailto:example123@gmail.com">
                  <span className="fas fa-envelope"></span>
                </link>
                <span className="text">example123@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="center box">
            <h2>Connect with Us</h2>
            <div className="content">
              <div className="center">
                <div className="icons">
                  <li>
                    <link href="/">
                      <span className="fab fa-facebook-f"></span>
                    </link>
                  </li>
                  <li>
                    <link href="/">
                      <span className="fab fa-twitter"></span>
                    </link>
                  </li>
                  <li>
                    <link href="/">
                      <span className="fab fa-instagram"></span>
                    </link>
                  </li>
                  <li>
                    <link href="https://www.linkedin.com/in/amit-kumar-mishra-28122a193">
                      <span className="fab fa-linkedin-in"></span>
                    </link>
                  </li>
                  <li>
                    <link href="https://github.com/Amit366">
                      <span className="fab fa-github"></span>
                    </link>
                  </li>
                </div>
              </div>
            </div>
            <h2 className="additional">Additional Links</h2>
            <div className="content"></div>
            <div className="center-bottom">
              <div>
                <link href="/">
                  <span className="fas fa-user"></span>
                </link>
                <span className="text">About Us</span>
              </div>
              <div className="contact">
                <link href="#contactUs">
                  <span className="fas fa-comments"></span>
                </link>
                <span className="text">Contact</span>
              </div>
              <div>
                <link href="/" data-toggle="modal" data-target="#exampleModal">
                  <span className="fas fa-users"></span>
                </link>
                <span className="text">FAQs</span>
              </div>
            </div>
          </div>

          <div className="right box">
            <h2>Contact us</h2>
            <div className="content">
              <form action="#">
                <div className="name">
                  <div className="text">Name *</div>
                  <input type="text" placeholder="Enter your Name" />
                </div>
                <div className="email">
                  <div className="text">Email *</div>
                  <input
                    type="email"
                    placeholder="Enter your Email-id"
                    required
                  />
                </div>
                <div className="msg">
                  <div className="text">Message *</div>
                  <textarea
                    className="msg"
                    rows="2"
                    cols="25"
                    placeholder="Enter your message!"
                    required
                  ></textarea>
                </div>
                <div className="btn">
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="bottom">
          <center>
            <span className="credit">
              <link href="/">Fun With Physics</link> |{" "}
            </span>
            <span className="far fa-copyright"></span>
            <span> 2021 All rights reserved.</span>
          </center>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;