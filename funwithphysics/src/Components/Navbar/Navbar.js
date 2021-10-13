import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Data } from "../FAQ/Data";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Accordion, Card } from "react-bootstrap";
import logo from "../../Images/Logo/logo.png";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light pt-3">
        <NavLink to="/" className="nav-item ">
          <p className="navbar-brand">
            <img src={logo} alt="logo" height="10%" width="10%" />
            &ensp; Fun With Physics
          </p>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul style={{ fontSize: "20px" }} className="navbar-nav ml-auto mr-5">
            <NavLink to="/" className="nav-item ">
              <span className="nav-link">Home</span>
            </NavLink>
            <NavLink to="/about" className="nav-item">
              <span className="nav-link">About</span>
            </NavLink>

            <NavLink
              to="/contact"
              className="nav-item"
              id="contactUs"
              onClick={scrollToBottom}
            >
              <span className="nav-link">Contact</span>
            </NavLink>
            <NavLink
              to="/"
              className="nav-item"
              type="button"
              data-toggle="modal"
              data-target="#exampleModal"
              style={{ color: "gray", marginLeft: "5px" }}
            >
              FAQ
            </NavLink>
          </ul>
        </div>
      </nav>

      {/* Faq Modal */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title"
                style={{ margin: "0em auto", paddingLeft: "4em" }}
                id="exampleModalLabel"
              >
                FAQs For You
              </h1>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <IconContext.Provider value={{ color: "#00FFB9", size: "25px" }}>
                <Accordion>
                  {Data.map((item, index) => {
                    return (
                      <React.Fragment key={item.key}>
                        <Card key={item.key}>
                          <Accordion.Toggle
                            style={{ border: "none" }}
                            eventKey={item.key}
                          >
                            <Card.Header>
                              <div
                                onClick={() => toggle(index)}
                                key={index}
                                style={{
                                  border: "none",
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <h3 style={{ display: "inline" }}>
                                  {item.question}
                                </h3>
                                <span>
                                  {clicked === index ? <FiMinus /> : <FiPlus />}
                                </span>
                              </div>
                            </Card.Header>
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey={item.key}>
                            <Card.Body>
                              <p style={{ fontSize: "19px" }}>{item.answer}</p>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </React.Fragment>
                    );
                  })}
                </Accordion>
              </IconContext.Provider>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Navbar;
