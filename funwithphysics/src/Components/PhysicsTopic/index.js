import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import classicalMechanics from "../../Images/Classical_Mechanics.jpg"
import thermodynamics from "../../Images/Thermodynamics.jpg"
import electromagnetism from "../../Images/electromagnetism.jpg"
import relativity from "../../Images/relativity.jpg"
import atomic from "../../Images/atomic_physics.jpg"
import nuclear from "../../Images/nuclear.jpg"
import photonics from "../../Images/photonics.jpg"
import statistical from "../../Images/statistical.jpg";
import './styles.css'




function PhysicsTopicItem(props) {
	return (
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
							<p>Classical mechanics is a theory describing the motion of macroscopic objects, projectile motions of parts of machinery and astronomical objects and also rotatory motion of machines. For more Information visit <a href="https://en.wikipedia.org/wiki/Classical_mechanics" target="_blank" rel="noreferrer">Wikipedia</a></p>
							<p id="credit">Photo by <a href="https://unsplash.com/@gabriele_macera?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Gab</a> on <a href="https://unsplash.com/s/photos/engine?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
							</PhysicsTopicItem>
					<PhysicsTopicItem name="Thermodynamics" link="/thermodynamics" icon="icon-heart4" image={thermodynamics}>
							<p>Thermodynamics is the branch of physics that deals with the transfer of heat and energy from one body to another.  For more Information visit <a href="https://en.wikipedia.org/wiki/Thermodynamics" target="_blank" rel="noreferrer">Wikipedia</a></p>
							 <p id="credit">  Photo by <a href="https://unsplash.com/@vivianeokubo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Viviane Okubo</a> on <a href="https://unsplash.com/s/photos/heat-transfer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
  							</PhysicsTopicItem>
						<PhysicsTopicItem name="Relativity" link="/relativity" icon="icon-lab2" image={relativity}>
							<p>Relativity is the notion that the laws of physics are the same everywhere, be it on Earth or in a far off corner of the universe.
						    <p id="credit">Image by <a href="https://pixabay.com/users/stux-12364/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4129246">Thanks for your Like • donations welcome</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4129246">Pixabay</a></p>
						</PhysicsTopicItem>
						<PhysicsTopicItem name="Electromagnetism" link="/electromagnetism" icon="icon-banknote" image={electromagnetism}>
							<p>Electromagnetism is a branch of physics involving the study of the electromagnetic force, a type of physical interaction between electrically charged particles. For more Information visit <a href="https://en.wikipedia.org/wiki/Electromagnetism" target="_blank" rel="noreferrer">Wikipedia</a></p>
							<p id="credit">Photo by <a href="https://unsplash.com/@mbaumi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mika Baumeister</a> on <a href="https://unsplash.com/s/photos/magnet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
						</PhysicsTopicItem>
						<PhysicsTopicItem name="Atomic physics" link="/atomic" icon="icon-photo" image={atomic}>
							<p>Atomic physics is the scientific study of the structure of the atom, its energy states, and its interactions with other particles and with electric and magnetic fields. For more Information visit <a href="https://en.wikipedia.org/wiki/Atomic_physics" target="_blank" rel="noreferrer">Wikipedia</a></p>
						    <p id="credit">Photo by <a href="https://unsplash.com/@vlisidis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Terry Vlisidis</a> on <a href="https://unsplash.com/s/photos/atoms?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
						</PhysicsTopicItem>
						<PhysicsTopicItem name="Nuclear Physics" link="/nuclear" icon="icon-home-outline" image={nuclear}>
							<p>Nuclear physics is the study of the protons and neutrons at the centre of an atom and the interactions that hold them together in a space. For more Information visit <a href="https://en.wikipedia.org/wiki/Nuclear_physics" target="_blank" rel="noreferrer">Wikipedia</a></p>
						    <p id="credit">Image by <a href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1222511">Gerd Altmann</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1222511">Pixabay</a></p>
						</PhysicsTopicItem>
						<PhysicsTopicItem name="Photonics" link="/photonics" icon="icon-bubble3" image={photonics}>
							<p>Photonics is the physical science of light waves. It deals with the science behind the generation, detection and manipulation of light. For more Information visit <a href="https://en.wikipedia.org/wiki/Photonics" target="_blank" rel="noreferrer">Wikipedia</a></p>
						    <p id="credit">Photo by <a href="https://unsplash.com/@mischievous_penguins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Casey Horner</a> on <a href="https://unsplash.com/s/photos/light?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
						</PhysicsTopicItem>
						<PhysicsTopicItem name="Statistical Mechanics" link="/statistical" icon="icon-world" image={statistical}>
							<p>Statistical mechanics is a mathematical framework that applies statistical methods and probability theory to large assemblies of microscopic entities. For more Information visit <a href="https://en.wikipedia.org/wiki/Statistical_mechanics" target="_blank" rel="noreferrer">Wikipedia</a></p>
						</PhysicsTopicItem>
					</div>
				</div>
			</div>
        </div>
    )
}
export default PhysicsTopic
