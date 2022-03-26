/* DISABLE ESLINT WARNINGS */
/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";
import ImageLoad from "../imageLoad";
import axios from "axios";


export default function Contact() {
  const sendBtn = useRef(null);

  const [inputValues, setInputValues] = useState({
    name: "", message: "", email: ""
  });

  const {name, message, email} = inputValues;

  const handleInputChange = (e) => {
    const {name, value} = e.target;

    setInputValues({
      ...inputValues,
      [name]: value
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && message && email) {

      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      {

        let animationState = 0; //Defines which will be the current innerText of "sendBtn"

        //Function that will change the innerText of "sendBtn" every 200ms
        let sendBtnTextAnimation = setInterval(() => {
          switch (animationState) {
            //If the current value of "animationState" is 0
            case 0:
              sendBtn.current.innerText = "Sending"; //Sets the innerText of "sendBtn" as "Logging in."
              return animationState++; //Add +1 to "animationState"
    
            //If the current value of "animationState" is 1
            case 1:
              sendBtn.current.innerText = "Sending."; //Sets the innerText of "sendBtn" as "Logging in."
              return animationState++; //Add +1 to "animationState"
    
            //If the current value of "animationState" is 2
            case 2:
              sendBtn.current.innerText = "Sending..";
              return animationState++;
    
            //If the current value of "animationState" is neither 0, 1 nor 2
            default:
              sendBtn.current.innerText = "Sending...";
              return (animationState = 0); //Reset the value of animationState and restart the animation
          }
        }, 200);

        axios
          .post("https://technscience.com/funwithscience_backend/sendemail.php", {
            name,
            email,
            message,
          })
          .then((res) => {
            if (res.data === 1) {
              alert("Message sent Successfully");
              setInputValues({
                name: "", email: "", message: ""
              });
            } else {
              alert("Some error occured");
            }
            clearInterval(sendBtnTextAnimation);
            sendBtn.current.innerText = "Send"
          });
      }
      else{
        alert("You have entered an invalid email address!");
      }
    } else {
      alert("Please fill the form properly");
    }
  };
  return (
    <React.Fragment>
      <Navbar />
      <Helmet>
        <title>Fun With Science - Tech N Science </title>
        <meta
          name="description"
          content="We at Tech N Science try to bring all sciences under one roof by providing JEE level questions and also calculators for different science formulas."
          data-react-helmet="true"
        />
        <meta
          name="keywords"
          content="Classical Mechanics, calculator, physics, Tech n science, technscience, tech and science, Physics formula, Physics calculator, IIT-JEE, NEET,Tech N Science, tech, science, questions, technscienceweb, technscience, tech and science, technscience.com, Tech N Science, technscience. com, tech n science"
        />
      </Helmet>
      <h1 className="contact-heading">Contact Us</h1>
      <div className="contactMain">
        <div className="contactDetails">
          <div className="contactSVG">
            <ImageLoad className="contact-img" main= {"./Images-public/Contact.webp"} placeholder = {"./Images-public/Contact-small.webp"} alt = "contact" />
          </div>
          <div className="contactTXT">
            <div className="contactInfo">
            <span className="fa fa-1x fa-map-marker-alt" />
              <p>
                Anand Arcade,Block C(G-4),MSR Layout, Chandrampalem,VSKP,AP-48
              </p>
            </div>
            <div className="contactInfo">
            <span className="fa fa-1x fa-phone" />
              <p>+91 8688785464</p>
            </div>
            <div className="contactInfo">
            <span className="fa fa-1x fa-envelope" />
              <p>support@technscience.com</p>
            </div>
          </div>
        </div>

        <div className="contactForm">
          <h2>Name</h2>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            onChange={handleInputChange}
            value={inputValues.name}
          />
          <h2>Email</h2>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={handleInputChange}
            value={inputValues.email}
          />
          <h2>Message</h2>
          <textarea
            name="message"
            placeholder="Enter your message"
            onChange={handleInputChange}
            value={inputValues.message}
          />
          <div ref={sendBtn} className="contactBTN" onClick={handleSubmit}>
            Send
          </div>
        </div>
      </div>

      <Footer />
      </React.Fragment>
  );
}
