import React from "react";
import "./Footer.css";
import logo from "../../Images/Logo/logo.webp";
import { NavLink } from "react-router-dom";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faEnvelope, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <React.Fragment>
      <footer id="footer">
        <div className="footer-top">
          <div className="container" style={{ 'margin': '0 auto', 'cursor': 'default' }}>
            <div className="row">

              <div className="col-lg-2 col-md-6 footer-logo">
                <NavLink to="/">
                  <img src={logo} alt='logo' />
                </NavLink>
              </div>

              <div className="col-xl-4 col-lg-5 col-md-6 footer-contact">
                <h4>Reach Us</h4>
                <div className="contact-tile">
                  <FontAwesomeIcon className="icon" icon={faBuilding} />
                  <div className="text">
                    Anand Arcade, Block C(G-4),MSR Layout,<br /> Chandrampalem, Visakhapatnam, <br />Andhra Pradesh 530048, India
                  </div>
                </div>
                <div className="contact-tile">
                  <FontAwesomeIcon className="icon" icon={faEnvelope} />
                  <div className="text">
                    <a href="mailto:support@technscience.com">support@technscience.com</a>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-2 col-md-6 footer-links">
                <h4>Additional Links</h4>
                <ul>
                  <li><FontAwesomeIcon className="icon" icon={faAngleRight} /> <NavLink to="/about">About us</NavLink></li>
                  <li><FontAwesomeIcon className="icon" icon={faAngleRight} /> <NavLink to="/contact">Contact us</NavLink></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-social">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="https://www.linkedin.com/company/tech-n-science" target="__blank" className="linkedin"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a>
                  <a href="" className="twitter"><FontAwesomeIcon className="icon" icon={faTwitter} /></a>
                  <a href="" className="instagram"><FontAwesomeIcon className="icon" icon={faInstagram} /></a>
                  <a href="" className="facebook"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="footer-bottom container" style={{ 'margin': '0 auto', 'cursor': 'default' }}>
          <div className="copyright">
            &copy; Copyright <strong>Tech N Science</strong> 2022. All Rights Reserved.
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
