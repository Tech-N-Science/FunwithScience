import React, { useEffect } from 'react';
import './Contact.css';
import Navbar from '../Navbar/Navbar';
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer';
import ContactSVG from './ContactSVG';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Helmet>
        <title>Fun With Science - Tech N Science </title>
        <meta
          name='description'
          content='We at Tech N Science try to bring all sciences under one roof by providing JEE level questions and also calculators for different science formulas.'
          data-react-helmet='true'
        />
        <meta
          name='keywords'
          content='Classical Mechanics, calculator, physics, Tech n science, technscience, tech and science, Physics formula, Physics calculator, IIT-JEE, NEET,Tech N Science, tech, science, questions, technscienceweb, technscience, tech and science, technscience.com, Tech N Science, technscience. com, tech n science'
        />
      </Helmet>
      <h1>Contact Us</h1> 
      <div className='contactMain'>
   
        <div className='contactSVG'>
        <ContactSVG/>   
        <div className='contactTXT'>
        <div className='contactInfo'>
        <i class="fas fa-map-marker-alt"></i><p>India</p></div>

        <div className='contactInfo'><i class="fas fa-phone"></i><p>+91 1234567890</p></div>
        <div className='contactInfo'><i class="fas fa-envelope"></i><p>example@email.com</p></div>
      </div>    
        </div>
        <div className='contactForm'>
          <h2>Name</h2>
          <input type='text' placeholder='Enter your name' />
          <h2>Email</h2>
          <input type='email' placeholder='Enter your email' />
          <h2>Message</h2>
          <textarea placeholder='Enter your message' />
          <div className='contactBTN'>Send</div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
