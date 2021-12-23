import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import algebra from "../../Images/algebra.webp";
import trigonometry from "../../Images/trigonometry.jpg";
import geometry from "../../Images/geometry.webp";
import integration from "../../Images/integration.jpg";
import "./styles.css";
import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";

function MathsTopicItem(props) {
  return (
    <>
      <Helmet>
        <title>Maths Calculator</title>
        <meta
          name="description"
          content="Get info and calculator of various physics topics by choosing from the following."
        />
        <meta
          name="keywords"
          content="physics, calculators, calculator, physics calculator, TechN Science, technscience, tech n science"
        />
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
  );
}

function MathsTopic() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h3 className="learn-header" id="learn">
        Maths calculator
      </h3>
      <div id="fh5co-course-categories" className="mt-5 p-5">
        <div className="container">
          <div className="row">
            <MathsTopicItem
              name="Algebra"
              link="/algebra"
              icon="icon-shop"
              image={algebra}
            >
              <p>
                Algebra is a mathematical science that deals with symbols and
                the rules that govern their manipulation.
              </p>
              <p id="credit">
                Photo by{" "}
                <a href="https://unsplash.com/@antoine1003?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Antoine Dautry
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/s/photos/algebra-maths?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Unsplash
                </a>
              </p>
            </MathsTopicItem>
            <MathsTopicItem
              name="Trigonometry"
              link="/"
              icon="icon-heart4"
              image={trigonometry}
            >
              <p>
                Trigonometry is a branch of mathematics concerned with the
                relationship of triangle side lengths and angles.{" "}
              </p>
              <p id="credit">
                Image by{" "}
                <a href="https://pixabay.com/users/dognamedseven-1619308/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1034657">
                  dognamedseven
                </a>{" "}
                from{" "}
                <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1034657">
                  Pixabay
                </a>
              </p>
            </MathsTopicItem>
            <MathsTopicItem
              name="Geometry"
              link="/geometry"
              icon="icon-lab2"
              image={geometry}
            >
              <p>
                Geometry is a branch of mathematics that studies how objects are
                measured in terms of their sizes, shapes, angles, and
                dimensions.
              </p>
              <p id="credit">
                Photo by{" "}
                <a href="https://unsplash.com/@soheili?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Mahdi Soheili
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/s/photos/geometry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Unsplash
                </a>
              </p>
            </MathsTopicItem>
            {/* <MathsTopicItem name="Differentiation" link="/" icon="icon-photo" image={diff}>
							<p>Atomic physics is the scientific study of the structure of the atom, its energy states, and its interactions with other particles and with electric and magnetic fields.</p>
						    <p id="credit">Photo by <a href="https://unsplash.com/@thisisengineering?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">ThisisEngineering RAEng</a> on <a href="https://unsplash.com/s/photos/maths?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
						</MathsTopicItem> */}
            <MathsTopicItem
              name="Integration/Differentiation"
              link="/"
              icon="icon-home-outline"
              image={integration}
            >
              <p>
                Integration is a method of determining the whole by adding the
                parts. Differentiation is a method for calculating the
                derivative of a function.
              </p>
              <p id="credit">
                Photo by{" "}
                <a href="https://unsplash.com/@jeswinthomas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Jeswin Thomas
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/s/photos/maths?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Unsplash
                </a>
              </p>
            </MathsTopicItem>
            {/* <MathsTopicItem name="Differentiation" link="/" icon="icon-home-outline" image={diff2}>
							<p>Differentiation is a process, in Maths, where we find the instantaneous rate of change in function based on one of its variables. </p>
						    <p id="credit">Image by <a href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2820682">Gerd Altmann</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2820682">Pixabay</a></p>
						</MathsTopicItem> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default MathsTopic;
