import Home from "./Components/Home/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import React from "react";
import ClassicalMechanics from "./Components/Classical Mechanics/ClassicalMechanics";
import Thermodynamics from "./Components/Thermodynamics/Thermodynamics";
import electromagnetism from "./Components/electromagnetism/electromagnetism"
import CalcClassic from "./Components/Classical Mechanics/Topics/Calculator";
import CalcThermo from "./Components/Thermodynamics/Topics/Calculator";
import CalcElectro from "./Components/electromagnetism/topics/calculator";
import WPECalculator from "./Components/Classical Mechanics/Topics/wpe_Calculator";
import GravitationCalculator from "./Components/Classical Mechanics/Topics/gravitation_Calculator";
import PhysicsTopic from "./Components/PhysicsTopic";
import MOICalculator from "./Components/Classical Mechanics/Topics/moi_Calulator";
import shm_Calculator from "./Components/Classical Mechanics/Topics/shm_Calculator";

import Quiz from "./Components/Quiz/Quiz";

import FluidCalculator from "./Components/Classical Mechanics/Topics/fluidmechanics_Calculator";


const App = () => {
  return (
    <React.Fragment>
      <Navbar />
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
        {/* <Route
          exact
          path="/electromagnetism"
          component={electromagnetism}
        /> */}
        <Route
          exact
          path="/electromagnetism/calculator"
          component={CalcElectro}
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
