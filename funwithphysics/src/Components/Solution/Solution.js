import React from "react";
import styles from "./Solution.module.css";
import {constant} from './allConstants'
import {SI} from './allSIUnits'

function Solution(props) {
  const { givenValues, formula, toFind, insertValues, result,constants } = props;
  
  var givenValuesSize = Object.keys(givenValues).length;
  var constantsSize;
  if(constants!=null)
   constantsSize = Object.keys(constants).length;

  
  return (
    <div className={styles.solution}>
      <h3>Solution</h3>

      {/* showing entered Values for solution */}
      <p className={styles.enternedValuesheading}>Entered Values</p>
      <div className={styles.enternedValues}>
        {Object.keys(givenValues).map((key, index) => {
          return (
            <span>
              {key} = {givenValues[key]} {SI[key]}{index+1===givenValuesSize?" .":","}
            </span>
          );
        })}
      </div>

      {/* showing constants used */}
   
     {constantsSize ?
     (<div>
        <p className={styles.constantValuesheading}>Constants used</p>
      <div className={styles.constantValues}>
        {constants.map((key, index) => {
          return (
            <span>
              {key} = {constant[key]}{index+1===constantsSize?" .":","} 
            </span>
          );
        })}
      </div>
       </div>):null}

      {/* showing the proper solution  */}
      <div className={styles.finalSolution}>
        <p>
          =&gt; As we know that,
          <span className={styles.formula}>
             {toFind} = {formula}
          </span>
        </p>
        <p> =&gt; Putting all entered values in the formula, we get :</p>
        <p>
          {" "}
          =&gt; {toFind} = {insertValues}
        </p>
        <p className={styles.result}>
          {" "}
          =&gt; {toFind} = {result} {SI[`${toFind}`]}
        </p>
      </div>
    </div>
  );
}

export default Solution;
