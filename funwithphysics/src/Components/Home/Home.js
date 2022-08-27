import React, { useContext, useEffect, useState,useRef } from "react";
import "../Home/Home.css";
import { Button } from "react-bootstrap";
import Footer from "../Footer/Footer";
import { LearnMore } from "../LearnMore";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";
import { Context } from "../../App";

const Home = () => {

  const backToTopRef=useRef(null)
  const [loading, setloading] = useState(true);
  const { dispatch } = useContext(Context);
  const [RoadMap,showRoadMap]=useState(false);
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
  function changeRoadMapState(){
    if(RoadMap==true){
      showRoadMap(false);
    }else{
      showRoadMap(true);
      window.scrollTo(0,1050);
    }
  }
  const l="}";
  const r="{";

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
            </Button>0
            <button className="btn-exams" onClick={changeRoadMapState}>Competitive Exams</button>
          </div>
        </div>
      </div>
      <div>
        {RoadMap && <div className="Roadmap">
            <h1>RoadMap</h1>
            <hr className="roadmap-underline"></hr>
            <div className="Roadmap-title">
              {/* Competitive Exam-1 */}
              <div className="left-top-T">
                <h5>Lorem ipsum dolor sit amet, </h5>
                <h5>Lorem ipsum dolor sit amet, </h5>
                <h5>Lorem ipsum dolor sit amet, </h5>
              </div>
              <h1  className="left-top-B">{l}</h1>
              <h3 className="C1">Lorem Ipsum</h3>
              <h1  className="right-B">{r}</h1>
              
              <div className="right-T">
                <h5 >Lorem ipsum dolor sit amet, </h5>
                <h5 >Lorem ipsum dolor sit amet, </h5>
                <h5 >Lorem ipsum dolor sit amet, </h5>
              </div>
              {/* Competitive Exam-1 */}
              <div className="left-T">
                <h5>Lorem ipsum dolor sit amet, </h5>
                <h5>Lorem ipsum dolor sit amet, </h5>
                <h5>Lorem ipsum dolor sit amet, </h5>
              </div>
              <h1  className="left-B">{l}</h1>
              <h3 className="C2">Lorem Ipsum</h3>
              <h1  className="right-B">{r}</h1>
              <div className="right-T">
                <h5 >Lorem ipsum dolor sit amet, </h5>
                <h5 >Lorem ipsum dolor sit amet, </h5>
                <h5 >Lorem ipsum dolor sit amet, </h5>
              </div>
              {/* Competitive Exam-1 */}
              <div className="left-T">
                <h5>Lorem ipsum dolor sit amet, </h5>
                <h5>Lorem ipsum dolor sit amet, </h5>
                <h5>Lorem ipsum dolor sit amet, </h5>
              </div>
              <h1  className="left-B">{l}</h1>
              <h3 className="C1">Lorem Ipsum</h3>
              <h1  className="right-B">{r}</h1>
              <div className="right-T">
                <h5 >Lorem ipsum dolor sit amet, </h5>
                <h5 >Lorem ipsum dolor sit amet, </h5>
                <h5 >Lorem ipsum dolor sit amet, </h5>
              </div>
            </div>
            
            <img src="Images-public/svgs/Rocket.svg" className="svg-rocket"/>
            <img src="Images-public/svgs/cloud.png" className="svg-cloud"/>
          </div>
        }
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
