import React, { useEffect } from 'react';
import './Contact.css';
import Navbar from '../Navbar/Navbar';
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer';

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
      <div className='contactMain'>
        <div className='contactTXT'>
          <h1>Contact Us</h1>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et saepe
            nesciunt optio quidem, maxime id provident facere quis voluptatibus
            ipsum sed exercitationem quae, ea consequatur officiis eveniet, quod
            reprehenderit error. Molestiae, perspiciatis, esse voluptas quas
            numquam nihil eos rem fugiat voluptatibus enim officia culpa
            quisquam expedita iusto animi, laborum ipsa!
          </h5>
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
