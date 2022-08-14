import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Components/MathsTopic/styles.css";
import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";
import GoogleAds from "../GoogleAds";
import periodicTable from "../../Images/periodicTable.jpg";
import organic from "../../Images/organic.jpg";

function ChemistryTopicItem(props) {
  return (
    <>
      <Helmet>
        <title>Chemistry</title>
        <meta
          name="description"
          content="Get info and calculator of various chemistry topics by choosing from the following."
        />
        <meta
          name="keywords"
          content="chemistry, calculators, formula, chemistry calculator, TechN Science, technscience, tech n science"
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

function ChemistryTopic() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h3 className="learn-header" id="learn">
        Chemistry
      </h3>
      <div id="fh5co-course-categories" className="mt-5 p-5">
        <div className="container">
          <div className="row">
            <ChemistryTopicItem
              name="Periodic Table"
              link="/periodic"
              icon="icon-shop"
              image={periodicTable}
            >
              <p>
                The periodic table is a tabular display of the chemical
                elements. It is widely used in chemistry, physics, and other
                sciences, and is generally seen as an icon of chemistry.
              </p>
              <p id="credit">
                Photo by{" "}
                <a href="https://unsplash.com/es/@vedranafilipovic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Vedrana Filipović
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/s/photos/chemistry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Unsplash
                </a>
              </p>
            </ChemistryTopicItem>
            <ChemistryTopicItem
              name="Organic"
              link="/"
              icon="icon-heart4"
              image={organic}
            >
              <p>
                Organic chemistry is a branch of chemistry that studies the
                structure, properties and reactions of organic compounds, which
                contain carbon-carbon covalent bonds.
              </p>
              <p id="credit">
                Photo by{" "}
                <a href="https://unsplash.com/@vlisidis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Terry Vlisidis
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/s/photos/chemistry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Unsplash
                </a>
              </p>
            </ChemistryTopicItem>
            <div className="ad-class">
              {/* add your slot id  */}
              <GoogleAds slot="2585121883" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ChemistryTopic;
