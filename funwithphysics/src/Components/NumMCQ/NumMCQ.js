import React, {useEffect, useRef } from "react";
import "./NumMCQ.css";
import Singlecard from "./Card";
import { useState } from "react";
import { data } from "./data";
import { Helmet } from "react-helmet";
var v=0;
const NumMCQ = () => {
  const cardref = useRef();
  const filterref = useRef();
  const btnref = useRef();

  const [searchTerm, setsearchTerm] = useState([]);
  const [typ,settyp]=useState(false);
  const [top,settop]=useState(false);
  const [difficult,setdifficult]=useState(false);
  const dif=["easy","medium","hard"];
  var tflag=0
  var dflag=0;
  var vflag=0;
  useEffect(()=>{
    settop(0)
    settyp(0)
    setdifficult(0)
  },[searchTerm])
  function handleClick(e){
    tflag=0;
    dflag=0;
    vflag=0;
    if (e.target.checked === true) {
      if (!searchTerm.includes(e.target.value.toLowerCase()))
      {
        searchTerm.push(e.target.value.toLowerCase())
        setsearchTerm(searchTerm)
      }
    } else {
      // setsearchTerm(
      //   searchTerm.filter((value) => value !== e.target.value.toLowerCase())
      //   );
        const i= searchTerm.indexOf(e.target.value.toLowerCase())
        searchTerm.splice(i,1)
        setsearchTerm(searchTerm)
    }
      for(let k of data)
      {
        if(searchTerm.includes(k.topic.toLowerCase()))
        {
          tflag=1
          v++
          settop(v);
          break;
        }
      }
      if(tflag===0)
      {
        settop(tflag)
      }
      for(let l of data)
      {
        if(searchTerm.includes(l.type.toLowerCase()))
        {
          console.log(";;;;;;");
          vflag=1
          v++
          console.log(v);
          settyp(v);
          break;
        }
      }
      if(vflag===0)
      {
        settyp(vflag)
      }
      for(let j of dif)
      {
        console.log(j);
        console.log(searchTerm.includes(j));
        if(searchTerm.includes(j))
        {
          console.log("hello from difference");
          dflag=1;
          v++
          setdifficult(v);
          break;
        }
      }
      if(dflag===0)
      {
        setdifficult(dflag)
      }
    //   // setsearchTerm(searchTerm.filter((value)=>value !== e.target.value))
    console.log(searchTerm);
    console.log(vflag,tflag,dflag);
    console.log(typ,top,difficult)
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
                console.log(typ,top,difficult);
                if (searchTerm.length === 0) {
                  return value;
                }
                else if(typ && top && difficult)
                {
                  console.log("........//",value);
                  console.log(value.type.toLowerCase());
                  if(searchTerm.includes(value.type.toLowerCase()) && searchTerm.includes(value.topic.toLowerCase()) && (searchTerm.includes(value.difficulty.toLowerCase())))
                  {
                    return value;
                  }
                }
                else if(typ && top)
                {
                  if(searchTerm.includes(value.type.toLowerCase()) && searchTerm.includes(value.topic.toLowerCase()))
                  {
                    return value;
                  }
                }
                else if(top && difficult)
                {
                  if(searchTerm.includes(value.topic.toLowerCase()) && searchTerm.includes(value.difficulty.toLowerCase()))
                  {
                    return value;
                  }
                }
                else if(difficult && typ)
                {
                  console.log("hello");
                  if(searchTerm.includes(value.difficulty.toLowerCase()) && searchTerm.includes(value.type.toLowerCase()))
                  {
                    return value;
                  }
                }
                else if(typ && searchTerm.includes(value.type.toLowerCase())){
                {
                  return value;
                }
                } else if(searchTerm.includes(value.topic.toLowerCase())){
                  return value;
                } else if(searchTerm.includes(value.difficulty.toLowerCase())){
                  return value;
                }
                return false;
              })
              .map((card) => {
                return (
                  <div className="single-card">
                    <Singlecard
                      type={card.type}
                      question={card.question}
                      topic={card.topic}
                      answer={card.answer}
                      key={card.id}
                      id={card.id}
                      difficulty={card.difficulty}
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
              <i class="fas fa-filter"></i>
            </button>
          </div>
          <div className="filter-box" ref={filterref}>
            <div>
              <span>Apply filter :</span>
              <span className="cancel" onClick={handlecross}>
                <i class="fas fa-times"></i>
              </span>
            </div>
            <h5 className="heading">Type</h5>
            <label class="container">
              Numerical
              <input type="hidden" name="Numerical" value="false" />
              <input
                id="type1"
                type="checkbox"
                value="Numerical"
                onClick={(e) => handleClick(e)}
              />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Multiple Correct
              <input type="hidden" name="Multiple Correct" value="false" />
              <input
                id="type2"
                type="checkbox"
                value="Multiple Correct"
                onClick={(e) => handleClick(e)}
              />
              <span class="checkmark"></span>
            </label>
            <h5 className="heading">Difficulty</h5>
            <label class="container">
              Easy
              <input type="hidden" name="Easy" value="false" />
              <input
                type="checkbox"
                value="Easy"
                onClick={(e) => handleClick(e)}
              />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Medium
              <input type="hidden" name="Medium" value="false" />
              <input
                type="checkbox"
                value="Medium"
                onClick={(e) => handleClick(e)}
              />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Hard
              <input type="hidden" name="Hard" value="false" />
              <input
                type="checkbox"
                value="Hard"
                onClick={(e) => handleClick(e)}
              />
              <span class="checkmark"></span>
            </label>
            <h5 className="heading">Topic</h5>
            <label class="container">
              Thermo-dynamics
              <input type="hidden" name="Thermodynamics" value="false" />
              <input
                type="checkbox"
                value="Thermo-dynamics"
                onClick={(e) => handleClick(e)}
              />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Mechanics
              <input type="hidden" name="Mechanics" value="false" />
              <input
                type="checkbox"
                value="Mechanics"
                onClick={(e) => handleClick(e)}
              />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Relativity
              <input
                type="checkbox"
                value="Relativity"
                onClick={(e) => handleClick(e)}
              />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Electro-magnetism
              <input
                type="checkbox"
                value="Electro-magnetism"
                onClick={(e) => handleClick(e)}
              />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Atomic Physics
              <input
                type="checkbox"
                value="Atomic Physics"
                onClick={(e) => handleClick(e)}
              />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Nuclear Physics
              <input
                type="checkbox"
                value="Nuclear Physics"
                onClick={(e) => handleClick(e)}
              />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Photonics
              <input
                type="checkbox"
                value="Photonics"
                onClick={(e) => handleClick(e)}
              />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Statistical Mechanics
              <input
                type="checkbox"
                value="Statistical Mechanics"
                onClick={(e) => handleClick(e)}
              />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NumMCQ;
