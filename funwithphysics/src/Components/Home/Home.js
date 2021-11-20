import React from 'react'
import '../Home/Home.css'
import { Button } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import { LearnMore } from '../LearnMore'
import {Helmet} from "react-helmet"

const Home = () => {
	return (
		<React.Fragment>
			<Helmet>
			<meta name="description" content="Website for Science formula and Science calculator for IIT-JEE and NEET. In this website we provide free calculator
             and also formulas to make the long, tiring calculations easy. This website can be used by anyone who wants to reduce their efforts of long calculations." data-react-helmet="true"/>
			<meta name="keywords" content="Classical Mechanics, calculator, physics, Tech n science, technscience, tech and science, Physics formula, Physics calculator, IIT-JEE, NEET,Tech N Science, tech, science, questions, technscienceweb, technscience, tech and science, technscience.com, Tech N Science, technscience. com, tech n science"/>
			</Helmet>
			{/* ----Banner---- */}
			<div className="banner">
				<p id="credit">Photo by <a href="https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA</a> on <a href="https://unsplash.com/s/photos/planet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
  
				<h2 className="banner_text col-md-8 col-sm-8 auto pt-5">We at Tech N Science try to bring all sciences under one roof by providing JEE level questions and also calculators for different science formulas. 
					<br />So, keep Exploring!!.</h2>
				<div className="banner_button">
					<button type="button" className="btn btn-light">Explore</button>
					<Button href="#learn" className="btn btn-light"> Learn</Button>
				</div>
			</div>
			<div>
			  <h3 className="learn-header" id="learn">Learn</h3>
			  <center><hr className="learn-underline"/></center>
			</div>
			<LearnMore />
			<Footer />
			{/* <!-- Back to top button --> */}
			<button className="gotopbtn" onClick={scroll}> <i className="fas fa-arrow-up"></i> </button>
		</React.Fragment>
	)
}

const scroll = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
}

export default Home
