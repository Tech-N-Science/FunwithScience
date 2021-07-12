import React from 'react'
import '../Home/Home.css'

const Home = () => {
    return (
        <>
        {/* ----Banner---- */}
        <div className="banner">
            
            <h2 className="banner_text col-md-8 col-sm-8 auto pt-5">Physics is about questioning, studying, probing nature. You probe, and, if you're lucky, you get strange clues.
            <br/>So, keep Exploring Physics.</h2>
            <div className="banner_button">
                <button type="button" className="btn btn-light">Explore</button>
                <button type="button" className="btn btn-light">Learn</button>
            </div>            
        </div>
        {/* ----Features---- */}
		<div id="fh5co-course-categories" className="mt-5">
			<div className="container">
				<div className="row">
					<div className="col-md-3 col-sm-6 col-xs-12 text-center animate-box">
						<div className="services">
							<span className="icon">
								<i className="icon-shop"></i>
							</span>
							<div className="desc">
								<h3><a href="#">Classical mechanics</a></h3>
								<p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem
									provident. Odit ab aliquam dolor eius.</p>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 text-center animate-box">
						<div className="services">
							<span className="icon">
								<i className="icon-heart4"></i>
							</span>
							<div className="desc">
								<h3><a href="#">Thermodynamics</a></h3>
								<p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem
									provident. Odit ab aliquam dolor eius.</p>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 text-center animate-box">
						<div className="services">
							<span className="icon">
								<i className="icon-banknote"></i>
							</span>
							<div className="desc">
								<h3><a href="#">Electromagnetism</a></h3>
								<p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem
									provident. Odit ab aliquam dolor eius.</p>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 text-center animate-box">
						<div className="services">
							<span className="icon">
								<i className="icon-lab2"></i>
							</span>
							<div className="desc">
								<h3><a href="#">Relativity</a></h3>
								<p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem
									provident. Odit ab aliquam dolor eius.</p>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 text-center animate-box">
						<div className="services">
							<span className="icon">
								<i className="icon-photo"></i>
							</span>
							<div className="desc">
								<h3><a href="#">Atomic physics</a></h3>
								<p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem
									provident. Odit ab aliquam dolor eius.</p>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 text-center animate-box">
						<div className="services">
							<span className="icon">
								<i className="icon-home-outline"></i>
							</span>
							<div className="desc">
								<h3><a href="#">Nuclear Physics</a></h3>
								<p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem
									provident. Odit ab aliquam dolor eius.</p>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 text-center animate-box">
						<div className="services">
							<span className="icon">
								<i className="icon-bubble3"></i>
							</span>
							<div className="desc">
								<h3><a href="#">Photonics</a></h3>
								<p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem
									provident. Odit ab aliquam dolor eius.</p>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 text-center animate-box">
						<div className="services">
							<span className="icon">
								<i className="icon-world"></i>
							</span>
							<div className="desc">
								<h3><a href="#">Statistical Mechanics</a></h3>
								<p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem
									provident. Odit ab aliquam dolor eius.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- Back to top button --> */}
    		<a className="gotopbtn" href="#"> <i className="fas fa-arrow-up"></i> </a>
        </>
    )
}

export default Home
