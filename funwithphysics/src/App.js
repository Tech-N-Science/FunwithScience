import Home from "./Components/Home/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import "./index.css";
import React, { Suspense, lazy } from "react";
import ClassicalMechanics from "./Components/Classical_Mechanics/ClassicalMechanics";
import Thermodynamics from "./Components/Thermodynamics/Thermodynamics";
import CalcClassic from "./Components/Classical_Mechanics/Topics/Calculator";
import CalcThermo from "./Components/Thermodynamics/Topics/Calculator";
import WPECalculator from "./Components/Classical_Mechanics/Topics/wpe_Calculator";
import GravitationCalculator from "./Components/Classical_Mechanics/Topics/gravitation_Calculator";
import PhysicsTopic from "./Components/PhysicsTopic";
import MOICalculator from "./Components/Classical_Mechanics/Topics/moi_Calulator";
import shm_Calculator from "./Components/Classical_Mechanics/Topics/shm_Calculator";
import rotation_Calculator from "./Components/Classical_Mechanics/Topics/rotation_Calculator";
import Quiz from "./Components/Quiz/Quiz";
import FluidCalculator from "./Components/Classical_Mechanics/Topics/fluidmechanics_Calculator";
import Electromagnetism from "./Components/Electromagnetism/Electromagnetism";
import  electricfield_calculator  from "./Components/Electromagnetism/Topics/electricfield_calculator";
import {Helmet} from "react-helmet"
import Favicon from "./favicon.ico"
import { hydrate, render } from "react-dom";
const Navbar = lazy(()=>import("./Components/Navbar/Navbar"));

const App = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>JEE questions and calculators - Tech N Science</title>
        <meta name="description" content="Website for Physics formula and Physics calculator for IIT-JEE and NEET. In this website we provide free calculator
        and also formulas to make the long, tiring calculations easy. This website can be used by anyone who wants to reduce their efforts of long calculations." data-react-helmet="true"/>
        <meta name="keyword" content="Physics formula, Physics calculator, IIT-JEE, NEET,Tech N Science, tech, science, questions, technscienceweb, technscience, tech and science, technscience.com, Tech N Science, technscience. com, tech n science" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href={Favicon}/>
      </Helmet>
      <Suspense fallback={<div>Loading....</div>}>
      <Navbar />
      </Suspense>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/contact" component={Home} />
        <Route
          exact
          path="/classicalmechanics"
          component={ClassicalMechanics}
        />
        <Route
          exact
          path="/thermodynamics"
          component={Thermodynamics}
        />
        
        <Route exact path="/physics" component={PhysicsTopic} />
       
        <Route
          exact
          path="/classicalmechanics/calc/:topic"
          component={CalcClassic}
        />
        <Route
          exact
          path="/thermodynamics/calc/:topic"
          component={CalcThermo}
        />
        <Route
          exact
          path="/classicalmechanics/calc/gravitation/:topic"
          component={GravitationCalculator}
        />
        <Route
          exact
          path="/classicalmechanics/calc/moment_of_inertia/:topic"
          component={MOICalculator}
        />
        <Route
          exact
          path="/classicalmechanics/calc/shm/:topic"
          component={shm_Calculator} 
        />
        <Route
          exact
          path="/classicalmechanics/calc/work_power_energy/:topic"
          component={WPECalculator}
        />
        <Route
          exact
          path="/classicalmechanics/calc/rotation/:topic"
          component={rotation_Calculator}
        />
        <Route
          exact
          path="/electromagnetism"
          component={Electromagnetism}
        />

        <Route
          exact
          path="/electromagnetism/calc/electric_field/:topic"
          component={electricfield_calculator}
        />

        <Route exact path="/quiz" component={Quiz} />

        <Route
          exact
          path="/classicalmechanics/calc/fluid_mechanics/:topic"
          component={FluidCalculator}
        />

        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
};

export default App;


const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(App, rootElement);
} else {
  render(App, rootElement);
}