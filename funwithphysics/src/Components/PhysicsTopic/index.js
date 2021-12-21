import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import classicalMechanics from "../../Images/Classical_Mechanics.webp"
import thermodynamics from "../../Images/Thermodynamics.webp"
import electromagnetism from "../../Images/electromagnetism.webp"
import relativity from "../../Images/relativity.webp"
import atomic from "../../Images/atomic_physics.webp"
import nuclear from "../../Images/nuclear.webp"
import photonics from "../../Images/photonics.webp"
import statistical from "../../Images/statistical.webp";
import './styles.css';
import {Helmet} from "react-helmet";
import Footer from '../Footer/Footer';

function PhysicsTopicItem(props) {
	return (
		<>
		<Helmet>
          <title>Physics Calculator</title>
		  <meta name="description" content="Get info and calculator of various physics topics by choosing from the following."/>
		  <meta name="keywords" content="physics, calculators, calculator, physics calculator, TechN Science, technscience, tech n science"/>
		</Helmet>
		<div className="col-xs-12 col-sm-6 col-md-3 text-center animate-box">
			<Link style={{ color: "black" }} to={props.link} className="services">
				<span className="icon">
					{/* <i className={props.icon}></i> */}
					<img alt={props.name} src={props.image} />
				</span>
				<div className="desc">
					<h3>{props.name}</h3>
				</div>
			</Link>
			{props.children}
		</div>
		</>
	)
}

function PhysicsTopic() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [])

    return (
        <div>
            <h3 className="learn-header" id="learn">Physics calculator</h3>
            <div id="fh5co-course-categories" className="mt-5 p-5">
				<div className="container">
					<div className="row">
					<PhysicsTopicItem name="Classical mechanics" link="/classicalmechanics" icon="icon-shop" image={classicalMechanics} >
							<p>Classical mechanics is a theory that describes the motion of macroscopic objects, projectile motions of machinery parts and astronomical objects, and machine rotatory motion. </p>
							<p id="credit">Photo by <a href="https://unsplash.com/@xavier_von_erlach?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Xavier von Erlach</a> on <a href="https://unsplash.com/s/photos/mechanics?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
							</PhysicsTopicItem>
					<PhysicsTopicItem name="Thermodynamics" link="/thermodynamics" icon="icon-heart4" image={thermodynamics}>
							<p>Thermodynamics is the study of the transfer of heat and energy from one body to another.</p>
							 <p id="credit">  Photo by <a href="https://unsplash.com/@vivianeokubo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Viviane Okubo</a> on <a href="https://unsplash.com/s/photos/heat-transfer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
  							</PhysicsTopicItem>
						<PhysicsTopicItem name="Relativity" link="/relativity" icon="icon-lab2" image={relativity}>
							<p>Relativity is the notion that the laws of physics are the same everywhere, be it on Earth or in a far off corner of the universe.</p>
						    <p id="credit">Image by <a href="https://pixabay.com/users/stux-12364/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4129246">Thanks for your Like • donations welcome</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4129246">Pixabay</a></p>
						</PhysicsTopicItem>
						<PhysicsTopicItem name="Electromagnetism" link="/electromagnetism" icon="icon-banknote" image={electromagnetism}>
							<p>Electromagnetism is a branch of physics involving the study of the electromagnetic force, a type of physical interaction between electrically charged particles. </p>
							<p id="credit">Photo by <a href="https://unsplash.com/@mbaumi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mika Baumeister</a> on <a href="https://unsplash.com/s/photos/magnet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
						</PhysicsTopicItem>
						<PhysicsTopicItem name="Atomic physics" link="/atomic" icon="icon-photo" image={atomic}>
							<p>Atomic physics is the scientific study of the structure of the atom, its energy states, and its interactions with other particles and with electric and magnetic fields.</p>
						    <p id="credit">Photo by <a href="https://unsplash.com/@vlisidis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Terry Vlisidis</a> on <a href="https://unsplash.com/s/photos/atoms?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
						</PhysicsTopicItem>
						<PhysicsTopicItem name="Nuclear Physics" link="/nuclear" icon="icon-home-outline" image={nuclear}>
							<p>Nuclear physics is the study of the protons and neutrons at the centre of an atom and the interactions that hold them together in a space.</p>
						    <p id="credit">Image by <a href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1222511">Gerd Altmann</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1222511">Pixabay</a></p>
						</PhysicsTopicItem>
						<PhysicsTopicItem name="Photonics" link="/photonics" icon="icon-bubble3" image={photonics}>
							<p>Photonics is the physical science of light waves. It deals with the science behind the generation, detection and manipulation of light.</p>
						    <p id="credit">Photo by <a href="https://unsplash.com/@umby?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Umberto</a> on <a href="https://unsplash.com/s/photos/light?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
						</PhysicsTopicItem>
						<PhysicsTopicItem name="Statistical Mechanics" link="/statistical" icon="icon-world" image={statistical}>
							<p>Statistical mechanics is a mathematical framework that applies statistical methods and probability theory to large assemblies of microscopic entities.</p>
						</PhysicsTopicItem>
					</div>
				</div>
			</div>
			<Footer/>
        </div>
    )
}
export default PhysicsTopic
