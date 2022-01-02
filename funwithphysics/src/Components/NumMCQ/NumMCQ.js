import React, { useContext, useRef } from "react";
import "./NumMCQ.css";
import Singlecard from "./Card";
import { useEffect} from "react";
import { data } from "./data";
import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";
import { Context } from "../../App";
var v = 0;
const NumMCQ = () => {
  const cardref = useRef();
  const filterref = useRef();
  const btnref = useRef();
  const {searchTerm,setsearchTerm,typ,settyp,settop,top,difficult,setdifficult}=useContext(Context)
  const dif = ["easy", "medium", "hard"];
  var tflag = 0;
  var dflag = 0;
  var vflag = 0;
  useEffect(() => {
    document.querySelectorAll("input").forEach((e)=>{
      if(e.type==="checkbox")
      {
        if(searchTerm.includes(e.value.toLowerCase())){
          e.checked=true;
        }
      }
    })
  }, [searchTerm]);
  function handleClick(e) {
    tflag = 0;
    dflag = 0;
    vflag = 0;
    if (e.target.checked === true) {
      if (!searchTerm.includes(e.target.value.toLowerCase())) {
        searchTerm.push(e.target.value.toLowerCase());
        setsearchTerm(searchTerm);
      }
    } else {
      // setsearchTerm(
      //   searchTerm.filter((value) => value !== e.target.value.toLowerCase())
      //   );
      const i = searchTerm.indexOf(e.target.value.toLowerCase());
      searchTerm.splice(i, 1);
      setsearchTerm(searchTerm);
    }
    for (let k of data) {
      if (searchTerm.includes(k.topic.toLowerCase())) {
        tflag = 1;
        v++;
        settop(v);
        break;
      }
    }
    if (tflag === 0) {
      settop(tflag);
    }
    for (let l of data) {
      if (searchTerm.includes(l.type.toLowerCase())) {
        console.log(";;;;;;");
        vflag = 1;
        v++;
        console.log(v);
        settyp(v);
        break;
      }
    }
    if (vflag === 0) {
      settyp(vflag);
    }
    for (let j of dif) {
      console.log(j);
      console.log(searchTerm.includes(j));
      if (searchTerm.includes(j)) {
        console.log("hello from difference");
        dflag = 1;
        v++;
        setdifficult(v);
        break;
      }
    }
    if (dflag === 0) {
      setdifficult(dflag);
    }
    //   // setsearchTerm(searchTerm.filter((value)=>value !== e.target.value))
    console.log(searchTerm);
    console.log(vflag, tflag, dflag);
    console.log(typ, top, difficult);
  }
  function handlefilterclk(e) {
    btnref.current.className += " filterbtnhide";
    cardref.current.className += " cardhide";
    filterref.current.className += " filtershow";
  }
  function handlecross() {
    btnref.current.classList.toggle("filterbtnhide");
    cardref.current.classList.toggle("cardhide");
    filterref.current.classList.toggle("filtershow");
  }
  console.log(searchTerm);
  return (
    <React.Fragment>
      <Helmet>
        <title>Physics Questions</title>
        <meta
          name="description"
          content="Physics Questions containing multiple correct and numerical based questions"
        />
        <meta
          name="keywords"
          content="questions, Physics Questions, calculator, physics, Tech n science, technscience, tech and science"
        />
      </Helmet>
      <div className="questions">
        <h1>Questions</h1>
        <div className="main-div">
          <div className="card-container" ref={cardref}>
            {data
              .filter((value) => {
                console.log(typ, top, difficult);
                if (searchTerm.length === 0) {
                  return value;
                } else if (typ && top && difficult) {
                  console.log("........//", value);
                  console.log(value.type.toLowerCase());
                  if (
                    searchTerm.includes(value.type.toLowerCase()) &&
                    searchTerm.includes(value.topic.toLowerCase()) &&
                    searchTerm.includes(value.difficulty.toLowerCase())
                  ) {
                    return value;
                  }
                } else if (typ && top) {
                  if (
                    searchTerm.includes(value.type.toLowerCase()) &&
                    searchTerm.includes(value.topic.toLowerCase())
                  ) {
                    return value;
                  }
                } else if (top && difficult) {
                  if (
                    searchTerm.includes(value.topic.toLowerCase()) &&
                    searchTerm.includes(value.difficulty.toLowerCase())
                  ) {
                    return value;
                  }
                } else if (difficult && typ) {
                  console.log("hello");
                  if (
                    searchTerm.includes(value.difficulty.toLowerCase()) &&
                    searchTerm.includes(value.type.toLowerCase())
                  ) {
                    return value;
                  }
                } else if (
                  typ &&
                  searchTerm.includes(value.type.toLowerCase())
                ) {
                    return value;
                } else if (searchTerm.includes(value.topic.toLowerCase())) {
                  return value;
                } else if (
                  searchTerm.includes(value.difficulty.toLowerCase())
                ) {
                  return value;
                }
                return false;
              })
              .map((card, index) => {
                return (
                  <div className="single-card" key={index}>
                    <Singlecard
                      type={card.type}
                      question={card.question}
                      topic={card.topic}
                      answer={card.answer}
                      key={card.id}
                      id={card.id}
                      difficulty={card.difficulty}
                      image={card.image}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                );
              })}
            <button
              className="filter-btn"
              onClick={(e) => handlefilterclk(e)}
              ref={btnref}
            >
              <i className="fas fa-filter"></i>
            </button>
          </div>
          <div className="filter-box" ref={filterref}>
            <div>
              <span>Apply filter :</span>
              <span className="cancel" onClick={handlecross}>
                <i className="fas fa-times"></i>
              </span>
            </div>
            <h5 className="heading">Type</h5>
            <label className="container">
              Numerical
              <input type="hidden" name="Numerical" value="false" />
              <input
                id="type1"
                type="checkbox"
                value="Numerical"
                onClick={(e) => handleClick(e)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Multiple Correct
              <input type="hidden" name="Multiple Correct" value="false" />
              <input
                id="type2"
                type="checkbox"
                value="mcq"
                onClick={(e) => handleClick(e)}
              />
              <span className="checkmark"></span>
            </label>
            <h5 className="heading">Difficulty</h5>
            <label className="container">
              Easy
              <input type="hidden" name="Easy" value="false" />
              <input
                type="checkbox"
                value="Easy"
                onClick={(e) => handleClick(e)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Medium
              <input type="hidden" name="Medium" value="false" />
              <input
                type="checkbox"
                value="Medium"
                onClick={(e) => handleClick(e)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Hard
              <input type="hidden" name="Hard" value="false" />
              <input
                type="checkbox"
                value="Hard"
                onClick={(e) => handleClick(e)}
              />
              <span className="checkmark"></span>
            </label>
            <h5 className="heading">Topic</h5>
            <label className="container">
              Thermo-dynamics
              <input type="hidden" name="Thermodynamics" value="false" />
              <input
                type="checkbox"
                value="Thermo-dynamics"
                onClick={(e) => handleClick(e)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Kinematics
              <input type="hidden" name="Kinematics" value="false" />
              <input
                type="checkbox"
                value="Kinematics"
                onClick={(e) => handleClick(e)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Laws of Motion
              <input type="hidden" name="Laws of Motion" value="false" />
              <input
                type="checkbox"
                value="Laws of Motion"
                onClick={(e) => handleClick(e)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Work,Power,Energy
              <input type="hidden" name="Work,Power,Energy" value="false" />
              <input
                type="checkbox"
                value="Work,Power,Energy"
                onClick={(e) => handleClick(e)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Circular motion
              <input type="hidden" name="Circular motion" value="false" />
              <input
                type="checkbox"
                value="Circular motion"
                onClick={(e) => handleClick(e)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Center of mass
              <input type="hidden" name="Center of mass" value="false" />
              <input
                type="checkbox"
                value="Center of mass"
                onClick={(e) => handleClick(e)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Rotational Mechanics
              <input type="hidden" name="Rotational Mechanics" value="false" />
              <input
                type="checkbox"
                value="Rotational Mechanics"
                onClick={(e) => handleClick(e)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Gravitation
              <input type="hidden" name="Gravitation" value="false" />
              <input
                type="checkbox"
                value="Gravitation"
                onClick={(e) => handleClick(e)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Simple Harmonic
              <input type="hidden" name="Simple Harmonic" value="false" />
              <input
                type="checkbox"
                value="Simple Harmonic"
                onClick={(e) => handleClick(e)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Fluid Mechanics
              <input type="hidden" name="Fluid Mechanics" value="false" />
              <input
                type="checkbox"
                value="Fluid Mechanics"
                onClick={(e) => handleClick(e)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Stress,Strain
              <input type="hidden" name="Stress,Strain" value="false" />
              <input
                type="checkbox"
                value="Stress,Strain"
                onClick={(e) => handleClick(e)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Electro-magnetism
              <input
                type="checkbox"
                value="Electro-magnetism"
                onClick={(e) => handleClick(e)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Atomic Physics
              <input
                type="checkbox"
                value="Atomic Physics"
                onClick={(e) => handleClick(e)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Nuclear Physics
              <input
                type="checkbox"
                value="Nuclear Physics"
                onClick={(e) => handleClick(e)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Photonics
              <input
                type="checkbox"
                value="Photonics"
                onClick={(e) => handleClick(e)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Statistical Mechanics
              <input
                type="checkbox"
                value="Statistical Mechanics"
                onClick={(e) => handleClick(e)}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default NumMCQ;
