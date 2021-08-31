import React from 'react'
import '../Home/Home.css'
import { Button } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import {Link} from 'react-router-dom'

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
			  <h3 className="learn-header" id="learn">Learn</h3><br/><br/>
			  <Link className="Physics-link" to="/physics" variant="outline-dark">Physics Calculator</Link>
			</div>
			<br/><br/><br/>
			<Footer />
			{/* <!-- Back to top button --> */}
			<a className="gotopbtn" href="/"> <i className="fas fa-arrow-up"></i> </a>
		</React.Fragment>
	)
}

export default Home
