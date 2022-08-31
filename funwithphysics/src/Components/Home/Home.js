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
                <h5><a href="https://jeemainonline.in/2-year-study-plan-for-jee-main-advanced/" target="_blank">Study Plan for 2 Years</a></h5>
                <h5><a href="https://dlp.allen.ac.in/study-material/study-material-jee-main-advanced.asp" target="_blank">JEE Advanced Study Material</a></h5>
                <h5><a href="https://www.physicsgalaxy.com/lectures/15/86/296/6022/Checklist-01-Motion-in-One-Dimension?state=all" target="_blank">Physics Galaxy Video Lectures</a></h5>
              </div>
              <h1  className="left-top-B">{l}</h1>
              <h3 className="C1"><a href="https://jeemain.nta.nic.in/" target="_blank">JEE</a></h3>
              <h1  className="right-B">{r}</h1>
              
              <div className="right-T">
                <h5><a href="https://byjus.com/jee/jee-main-syllabus/" target="_blank">JEE Mains syllabus & Marks Weightage</a></h5>
                <h5><a href="https://www.physicsgalaxy.com/lectures/22/99/397/6446/Heat-&-Thermodynamics?state=all" target="_blank">JEE Advanced checklist</a></h5>
                <h5><a href="https://mystudycart.com/best-books-for-iit-jee-preparation" target="_blank">Best Preparation Books</a></h5>
              </div>
              {/* Competitive Exam-1 */}
              <div className="left-T">
                <h5><a href="https://www.wileyindia.com/bitsat-study-guide.html" target="_blank">BITSAT Study Guide</a></h5>
                <h5><a href="https://www.examrace.com/BITSAT/BITSAT-Study-Material/" target="_blank">Study Materials for BITSAT</a></h5>
                <h5><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjB39-1wPD5AhWuzTgGHazAAHwQtwJ6BAgDEAI&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbKcm7oS17d0&usg=AOvVaw3mXfNrFl0IG6A-mjwo9nvg" target="_blank">BITSAT Video Lectures</a></h5>
              </div>
              <h1  className="left-B">{l}</h1>
              <h3 className="C2"><a href="https://www.bitsadmission.com/" target="_blank">BITSAT</a></h3>
              <h1  className="right-B">{r}</h1>
              <div className="right-T">
                <h5><a href="https://www.bitsadmission.com/bitsat/2022/BITSAT2022MAR14.pdf" target="_blank">BITSAT Syllabus & Instructions</a></h5>
                <h5><a href="https://www.pw.live/bitsat-previous-year-papers" target="_blank">BITSAT Previous Year</a></h5>
                <h5><a href="https://mystudycart.com/bitsat-books" target="_blank">Best Preparation Books</a></h5>
              </div>
              {/* Competitive Exam-1 */}
              <div className="left-T">
                <h5><a href="https://androbose.in/neet-study-material/" target="_blank">NEET books PDF</a></h5>
                <h5><a href="https://unacademy.com/content/neet-ug/study-material/" target="_blank">NEET study Material</a></h5>
                <h5><a href="https://neelabakoretutorials.in/" target="_blank">Neela Bakhore Tutorials for NEET</a></h5>
              </div>
              <h1  className="left-B">{l}</h1>
              <h3 className="C1"><a href="https://www.nta.ac.in//" target="_blank">NEET</a></h3>
              <h1  className="right-B">{r}</h1>
              <div className="right-T">
                <h5><a href="https://byjus.com/neet/neet-syllabus/" target="_blank">NEET syllabus & Marks Weightage</a></h5>
                <h5><a href="https://medicine.careers360.com/articles/neet-preparation-tips" target="_blank">NEET preparation Tips</a></h5>
                <h5><a href="https://mystudycart.com/best-book-for-aipmt-preparation" target="_blank">Best Preparation Books</a></h5>
              </div>
              {/* Competitive Exam-1 */}
              <div className="left-T">
                <h5><a href="https://www.jeebooks.in/2020/08/pdf-download-kvpy-sa-materials-by.html" target="_blank">KVPY Books PDF</a></h5>
                <h5><a href="https://www.examrace.com/KVPY/KVPY-Study-Material/" target="_blank">KVPY Study Material</a></h5>
                <h5><a href="https://www.youtube.com/c/VedantuJEEEnthuseEnglish/playlists?view=50&sort=dd&shelf_id=7" target="_blank">KVPY Video Lecture</a></h5>
              </div>
              <h1  className="left-B">{l}</h1>
              <h3 className="C2"><a href="http://kvpy.iisc.ac.in/main/index.htm" target="_blank">KVPY</a></h3>
              <h1  className="right-B">{r}</h1>
              <div className="right-T">
                <h5><a href="https://byjus.com/jee/kvpy-syllabus/" target="_blank">KVPY Syllabus</a></h5>
                <h5><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjPpf_cxPD5AhWM-TgGHbOqCFsQFnoECAYQAQ&url=https%3A%2F%2Fwww.quora.com%2FWhat-are-some-tips-and-tricks-to-appear-for-the-KVPY-online&usg=AOvVaw313e17LwO0n5Qmr3hdvSJ3" target="_blank">KVPY Tips and Tricks</a></h5>
                <h5><a href="https://school.careers360.com/articles/kvpy-books-know-best-books-for-preparation" target="_blank">Best preparation Books & Marks Weightage</a></h5>
              </div>
              {/* Competitive Exam-1 */}
              <div className="left-T">
                <h5><a href="https://www.youtube.com/watch?v=r3B3dgdL2aw" target="_blank">Self Preparation Guide</a></h5>
                <h5><a href="https://www.examrace.com/NEST/NEST-Free-Study-Material/" target="_blank">NEST Study Material</a></h5>
                <h5><a href="https://www.examrace.com/NEST/NEST-Practice-Tests/" target="_blank">NEST Mock Test</a></h5>
              </div>
              <h1  className="left-B">{l}</h1>
              <h3 className="C1"><a href="https://www.nestexam.in/" target="_blank">NEST</a></h3>
              <h1  className="right-B">{r}</h1>
              <div className="right-T">
                <h5><a href="https://www.nestexam.in/docs/22/NEST2022-Syllabus.pdf" target="_blank">NEST Syllabus</a></h5>
                <h5><a href="https://www.nestexam.in/qnsans/NEST-09.pdf" target="_blank">NEST Previous Year Paper</a></h5>
                <h5><a href="https://www.getmyuni.com/exams/nest-reference-books" target="_blank">NEST Preparation Books</a></h5>
              </div>
              {/* Competitive Exam-1 */}
              <div className="left-T">
                <h5><a href="https://www.youtube.com/watch?v=eAkfBH4urx4" target="_blank">Self Preparation Guide</a></h5>
                <h5><a href="https://www.youtube.com/watch?v=eAkfBH4urx4" target="_blank">Latest Study material</a></h5>
                <h5><a href="https://www.youtube.com/watch?v=fGPhya5_wVM" target="_blank">NATA Video Lecture</a></h5>
              </div>
              <h1  className="left-B">{l}</h1>
              <h3 className="C2"><a href="https://www.nata.in/" target="_blank">NATA</a></h3>
              <h1  className="right-B">{r}</h1>
              <div className="right-T">
                <h5><a href="https://www.embibe.com/exams/nata-syllabus/" target="_blank">NATA syllabus</a></h5>
                <h5><a href="https://www.embibe.com/exams/nata-previous-year-question-papers/" target="_blank">NATA Previous Year Paper,</a></h5>
                <h5><a href="https://www.toprankers.com/nata-books" target="_blank">Best Preparation Books</a></h5>
              </div>
              {/* Competitive Exam-1 */}
              <div className="left-T">
                <h5><a href="https://www.youtube.com/playlist?list=PLqjFFrfKcY5zyoqqz7Gp1RAzU_XkaGqDA" target="_blank">NDA Video Lecture</a></h5>
                <h5><a href="https://byjusexamprep.com/nda-na-exams/nda-exam-study-material" target="_blank">NDA Study Material</a></h5>
                <h5><a href="https://www.upsc.gov.in/examinations/previous-question-papers/archives?field_exam_name_value=National%20Defence%20Academy" target="_blank">NDA & NA Previous Year Paper</a></h5>
              </div>
              <h1  className="left-B">{l}</h1>
              <h3 className="C1"><a href="https://www.upsc.gov.in/" target="_blank">NDA & NA</a></h3>
              <h1  className="right-B">{r}</h1>
              <div className="right-T">
                <h5><a href="https://www.vedantu.com/exams/nda-syllabus" target="_blank">NDA Syllabus & Marks Weightage</a></h5>
                <h5><a href="https://www.shiksha.com/exams/nda-exam-preparation" target="_blank">NDA Preparation Tips</a></h5>
                <h5><a href="https://recruitmentresult.com/nda-preparation-books/" target="_blank">NDA & NA Preparation Books</a></h5>
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
