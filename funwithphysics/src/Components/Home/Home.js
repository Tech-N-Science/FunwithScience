import React from 'react'
import '../Home/Home.css'
import { Button } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import { LearnMore } from '../LearnMore'

const Home = () => {
	return (
		<React.Fragment>
			{/* ----Banner---- */}
			<div className="banner">
				<p id="credit">Photo by <a href="https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA</a> on <a href="https://unsplash.com/s/photos/planet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
  
				<h2 className="banner_text col-md-8 col-sm-8 auto pt-5">Physics is about questioning, studying, probing nature. You probe, and, if you're lucky, you get strange clues.
					<br />So, keep Exploring Physics.</h2>
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
