import React from "react";
import "./Editorial.css";
import { editorialData } from "./editorialData";
import { Helmet } from "react-helmet";
import Navbar from "./../Navbar/Navbar";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
const Editorial = () => {
  var { id } = useParams();
  id = parseInt(id);
  let editorialContent = [];
  let editorialContentLineByLine = [];
  let location = useLocation();
  let question = location.state.question;
  const navigate = useNavigate();
  //It is a math question
  if (window.location.href.indexOf("MathQuestion") > -1) {
    //I need it line bt line to convert markdown to html
    editorialContent = editorialData.filter(
      (item) => item.id === id && item.type === "math"
    );
    //handle if the question has no editorial
    if (editorialContent.length > 0) {
      //I split it so that it to work with ReactMarkdown
      editorialContentLineByLine = editorialContent[0].content.split("\n");
      //I trim it so that it to work with ReactMarkdown
      editorialContentLineByLine.forEach((item, index) => {
        editorialContentLineByLine[index] = item.trim();
      });
    }
  }
  //it is a physics question
  else if (window.location.href.indexOf("question") > -1) {
    //I need it line bt line to convert markdown to html
    editorialContent = editorialData.filter(
      (item) => item.id === id && item.type === "physics"
    );
    //handle if the question has no editorial
    if (editorialContent.length > 0) {
      //I split it so that it to work with ReactMarkdown
      editorialContentLineByLine = editorialContent[0].content.split("\n");
      //I trim it so that it to work with ReactMarkdown
      editorialContentLineByLine.forEach((item, index) => {
        editorialContentLineByLine[index] = item.trim();
      });
    }
  }
  return (
    <React.Fragment>
      <Navbar />
      <br />
      <br />
      <span
        className="editorial-btn"
        onClick={() => {
          navigate(-1);
        }}
      >
        Question
      </span>
      <span className="editorial-btn">Editorial</span>
      <span className="editorial-btn"> Discussion Forum</span>
      <div className="editorial-container">
        <div className="question">
          <h3>Q. {question}</h3>
        </div>
        <div className="editorial-content">
          {(editorialContent.length > 0 &&
            editorialContentLineByLine.map((line) => (
              <ReactMarkdown children={line}></ReactMarkdown>
            ))) || (
            <div className="no-editorial">
              <h3>
                <span>No editorial available</span>
              </h3>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Editorial;
