import React, { useEffect, useState } from 'react';
import './Contact.css';
import Navbar from '../Navbar/Navbar';
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer';
import ContactSVG from './ContactSVG';
import axios from 'axios';

export default function Contact() {
  const [name,setname]=useState()
  const [message,setmessage]=useState()
  const [email,setemail]=useState()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(name && message && email)
    {
      axios.post("http://localhost/funwithscience_backend/sendemail.php", {name,email,message}).then((res) => {
        if (res.data === 1) {
          alert("Message sent Successfully");
          setname("");
          setemail("");
          setmessage("");
        }
        else{
          alert("Some error occured");
        }
        console.log(res.data);
      });
    }
    else{
      alert("Please fill the form properly");
    }
  }
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
      <h1 className='contact-heading'>Contact Us</h1> 
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
          <input type='text' placeholder='Enter your name' onChange={(e)=>{setname(e.target.value)}} value={name}/>
          <h2>Email</h2>
          <input type='email' placeholder='Enter your email' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
          <h2>Message</h2>
          <textarea placeholder='Enter your message' value={message} onChange={(e)=>{setmessage(e.target.value)}}/>
          <div className='contactBTN' onClick={handleSubmit}>Send</div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
