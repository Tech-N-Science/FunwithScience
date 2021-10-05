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
			<Link className="gotopbtn" to="/" <i className="fas fa-arrow-up"></i> </Link>
		</React.Fragment>
	)
}

export default Home
