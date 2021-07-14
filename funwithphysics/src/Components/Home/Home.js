import React from 'react'
import '../Home/Home.css'
import classicalMechanics from "../../Images/Classical_Mechanics.jpg"
import thermodynamics from "../../Images/Thermodynamics.jpg"
import electromagnetism from "../../Images/electromagnetism.jpg"
import relativity from "../../Images/relativity.jpg"
import atomic from "../../Images/atomic_physics.jpg"
import nuclear from "../../Images/nuclear.jpg"
import photonics from "../../Images/photonics.jpg"
import statistical from "../../Images/statistical.jpg"

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
		<h3 className="learn-header" id="learn">Learn</h3>
		<hr />
		<div id="fh5co-course-categories" className="mt-5 p-5">
			<div className="container">
				<div className="row">
					<div className="col-md-3 col-sm-6 col-xs-12 text-center animate-box">
						<div className="services">
							<span className="icon">
								{/* <i className="icon-shop"></i> */}
								<img src={classicalMechanics} />
							</span>
							<div className="desc">
								<h3><a href="#">Classical mechanics</a></h3>
								<p>Classical mechanics is a physical theory describing the motion of macroscopic objects, from projectiles to parts of machinery, and astronomical objects.</p>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 text-center animate-box">
						<div className="services">
							<span className="icon">
								{/* <i className="icon-heart4"></i> */}
								<img src={thermodynamics} />
							</span>
							<div className="desc">
								<h3><a href="#">Thermodynamics</a></h3>
								<p>Thermodynamics is the branch of physics that deals with the relationships between heat and other forms of energy.</p>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 text-center animate-box">
						<div className="services">
							<span className="icon">
								{/* <i className="icon-lab2"></i> */}
								<img src={relativity} />
							</span>
							<div className="desc">
								<h3><a href="#">Relativity</a></h3>
								<p>Relativity is the notion that the laws of physics are the same everywhere, be it on Earth or in a far off corner of the universe.</p>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 text-center animate-box">
						<div className="services">
							<span className="icon">
								{/* <i className="icon-banknote"></i> */}
								<img src={electromagnetism} />
							</span>
							<div className="desc">
								<h3><a href="#">Electromagnetism</a></h3>
								<p>Electromagnetism is a branch of physics involving the study of the electromagnetic force, a type of physical interaction between electrically charged particles. </p>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 text-center animate-box">
						<div className="services">
							<span className="icon">
								{/* <i className="icon-photo"></i> */}
								<img src={atomic} />
							</span>
							<div className="desc">
								<h3><a href="#">Atomic physics</a></h3>
								<p>Atomic physics is the scientific study of the structure of the atom, its energy states, and its interactions with other particles and with electric and magnetic fields.</p>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 text-center animate-box">
						<div className="services">
							<span className="icon">
								{/* <i className="icon-home-outline"></i> */}
								<img src={nuclear} />
							</span>
							<div className="desc">
								<h3><a href="#">Nuclear Physics</a></h3>
								<p>Nuclear physics is the study of the protons and neutrons at the centre of an atom and the interactions that hold them together in a space.</p>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 text-center animate-box">
						<div className="services">
							<span className="icon">
								{/* <i className="icon-bubble3"></i> */}
								<img src={photonics} />
							</span>
							<div className="desc">
								<h3><a href="#">Photonics</a></h3>
								<p>Photonics is the physical science of light waves. It deals with the science behind the generation, detection and manipulation of light.</p>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 text-center animate-box">
						<div className="services">
							<span className="icon">
								{/* <i className="icon-world"></i> */}
								<img src={statistical} />
							</span>
							<div className="desc">
								<h3><a href="#">Statistical Mechanics</a></h3>
								<p>Statistical mechanics is a mathematical framework that applies statistical methods and probability theory to large assemblies of microscopic entities.</p>
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
