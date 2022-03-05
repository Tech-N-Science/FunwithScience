import React from "react";
import "./about.css"
import Navbar from "../Navbar/Navbar";
import ImageLoad from "../imageLoad";
import Footer from "../Footer/Footer";




export default function Contact() {
 
  
  return (
    <React.Fragment>
      <Navbar />
      
       
       <div className="about"><h1>About us</h1>
       <div><p>Preparing for competitive exams like JEE,NEET,etc can tough and may involve a lot of tedious calculations</p>
       <h3>Well, worry not !!</h3><p>We too have gone through the same phase and being Tech-enthusiasts ,we decided to come up with this all-in-one website to solve your problems.</p></div>
       <div className="contactSVG">
            <ImageLoad className="about-img" main= {"./Images-public/girl.webp"} placeholder = {"./Images-public/group1-small.jpg"} alt = "contact" />
          </div> 
</div>
      <Footer />
      </React.Fragment>
  );
}
