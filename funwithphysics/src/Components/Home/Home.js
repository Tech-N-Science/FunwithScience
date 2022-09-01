import React, { useContext, useEffect, useState,useRef } from "react";
import "../Home/Home.css";
import {Link} from "react-router-dom";
import { Button } from "react-bootstrap";
import Footer from "../Footer/Footer";
import { LearnMore } from "../LearnMore";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";
import { Context } from "../../App";
import AboutUsImage from "../../Images/AboutUs-svg.svg";  
import BrushStroke from "../../Images/brushStroke.png"

const Home = () => {

  const backToTopRef=useRef(null)
  const [loading, setloading] = useState(true);
  const { dispatch } = useContext(Context);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
      const user = JSON.parse(localStorage.getItem("user"));
      if (user !== null) {
        dispatch({
          type: "Set",
          payload: user,
        });
      } else {
        localStorage.setItem("user", null);
      }
    }, 4000);
 }, [dispatch]);
const bookReaderStyle = {
    color: "black",
    margin: "0",
    paddingRight: "9px",
  };

  //back to top functionality
  const handleScroll = () => {
    const position = window.pageYOffset
    //console.log(position)
    if (position === 0)
    backToTopRef.current!==null&&(backToTopRef.current.style.display = 'none')
    else backToTopRef.current!==null&&(backToTopRef.current.style.display = 'block')
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <React.Fragment>
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
      {/* ----Banner---- */}
      <div className='banner'>
        <p id='credit'>
          Photo by{' '}
          <a href='https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
            NASA
          </a>{' '}
          on{' '}
          <a href='https://unsplash.com/s/photos/planet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
            Unsplash
          </a>
        </p>
        <div className='banner_container'>
          <div className='blur-background'>
            <h2 className='banner_text auto pt-5'>
              We at Tech N Science try to bring all sciences under one roof by
              providing JEE level questions and also calculators for different
              science formulas.
              <br />
              So, keep Exploring!!.
            </h2>
          </div>
          <div className='banner_button'>
            <Button href='#learn' className='btn btn-light'>
              {' '}
              Learn
              <i style={bookReaderStyle} className='fas fa-book-reader'></i>
            </Button>
// MridulTi-Roadmap
            <Button className="btn-exams"><Link to="/roadmap" className="btn-exam-link">Competitive Exams</Link></Button>
=======
// main
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div>
// MridulTi-Roadmap
=======
        <h3 className="aboutus-header" id="aboutus">
          About Us
        </h3>
        <center>
          <hr className="aboutus-underline" />
        </center>
        <div className="aboutus-container">
          <div className="aboutus-text-container">
            <img src={BrushStroke} alt="bg" className="aboutus-textbg-image" />
            <h4 className="about-us-txt">
            Welcome to Tech N Science! A place for all science enthusiasts to explore.
            We, over here at Tech N Science, strive to provide you with various solutions 
            regarding advanced maths and science problems.
            From Calculus to Thermodynamics to Periodic Elements and much more. 
            From Calculations to quizzes to trivias your one-stop solution for all.
            </h4>
          </div>
          <div>
            <img src={AboutUsImage} alt="about-us" className="aboutus-image" />
          </div>
        </div>
      </div>
      {/* End of About Us Section */}

      <div>
// main
        <h3 className='learn-header' id='learn'>
          Learn
        </h3>
        <center>
          <hr className='learn-underline' />
        </center>
      </div>
      <LearnMore />
      <Footer />
      {/* <!-- Back to top button --> */}

      
        <button
          className='gotopbtn'
          onClick={scroll}
          ref={backToTopRef}
          style={{ display: 'none' }}
        >
          {' '}
          <i className='fas fa-arrow-up flexMe'></i>{' '}
        </button>
      
    </React.Fragment>
  )
};
const scroll = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default Home;
