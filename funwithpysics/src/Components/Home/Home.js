import React from 'react'
import '../Home/Home.css'

const Home = () => {
    return (
        <>
        {/* ----Banner---- */}
        <div className="banner">
            <img src=''/>
            <br/><br/><br/><br/>
            <h2 className="col-md-8 col-sm-6 mt-5 mx-5 my- auto pt-5">Physics is about questioning, studying, probing nature. You probe, and, if you're lucky, you get strange clues.
            <br/>So, keep Exploring Physics.</h2>
            <div className="banner_button col-md-10 ml-lg-2 my-auto">
                <button type="button" class="btn btn-light m-5 col-md-1">Explore</button>
                <button type="button" class="btn btn-light col-md-1">Learn</button>
            </div>            
        </div>
        {/* ----Features---- */}
		<div id="fh5co-course-categories" className="m-5 p-5">
			<div className="container">
				<div className="row">
					<div className="col-md-3 col-sm-6 text-center animate-box">
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
    		{/* <a class="gotopbtn" href="#"> <i class="fas fa-arrow-up"></i> </a> */}
        </>
    )
}

export default Home
