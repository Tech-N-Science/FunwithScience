import React from "react";
import data from './data'
import './NumMCQ.css'
import Singlecard from './Card'
import { useState } from "react";

const NumMCQ = () => { 
    const [searchTerm,setsearchTerm] = useState('');

    function handleClick (e) {
        setsearchTerm(e.target.value);
    } 

    return (
        <div className="questions">
            <h1>Questions</h1>
            <div className="main-div">
            <div className="card-container">
                {data.filter((value) => {
                    if (searchTerm === '') {
                        return value;
                    }
                    else if (value.type.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return value;
                    }
                    else if (value.topic.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return value;
                    }
                    return false;
                    }).map((card) => {
                    return (<div className="single-card"><Singlecard type={card.type} question={card.question} topic={card.topic} answer={card.answer} key={card.id} id={card.id}/>&nbsp;&nbsp;&nbsp;&nbsp;</div>)
                    }
                )}
            </div>
            <div className="filter-box">
                <span>Apply filter :</span>
                <label class="container">Numerical
                    <input type="checkbox" value="Numerical" onClick={(e) => handleClick(e)}/>
                    <span class="checkmark"></span>
                </label>
                <label class="container">Multiple Correct
                    <input type="checkbox" value="Multiple Correct" onClick={(e) => handleClick(e)}/>
                    <span class="checkmark"></span>
                </label>
                <label class="container">Thermodynamics
                    <input type="checkbox" value="Thermodynamics" onClick={(e) => handleClick(e)}/>
                    <span class="checkmark"></span>
                </label>
                <label class="container">Classical Mechanics
                    <input type="checkbox" value="Classical Mechanics" onClick={(e) => handleClick(e)}/>
                    <span class="checkmark"></span>
                </label>
                <label class="container">Relativity
                    <input type="checkbox" value="Relativity" onClick={(e) => handleClick(e)}/>
                    <span class="checkmark"></span>
                </label>
                <label class="container">Electromagnetism
                    <input type="checkbox" value="Electromagnetism" onClick={(e) => handleClick(e)}/>
                    <span class="checkmark"></span>
                </label>
                <label class="container">Atomic Physics
                    <input type="checkbox" value="Atomic Physics" onClick={(e) => handleClick(e)}/>
                    <span class="checkmark"></span>
                </label>
                <label class="container">Nuclear Physics
                    <input type="checkbox" value="Nuclear Physics" onClick={(e) => handleClick(e)}/>
                    <span class="checkmark"></span>
                </label>
                <label class="container">Photonics
                    <input type="checkbox" value="Photonics" onClick={(e) => handleClick(e)}/>
                    <span class="checkmark"></span>
                </label>
                <label class="container">Statistical Mechanics
                    <input type="checkbox" value="Statistical Mechanics" onClick={(e) => handleClick(e)}/>
                    <span class="checkmark"></span>
                </label>
            </div>
            </div>
        </div>
    )
}

export default NumMCQ;