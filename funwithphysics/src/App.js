import { Switch, Route, Redirect } from "react-router-dom";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import Loadingimg from "./Images/Logo/logo.webp";
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
import electricfield_calculator from "./Components/Electromagnetism/Topics/electricfield_calculator";
import Magneticfield_calculator from "./Components/Electromagnetism/Topics/Magneticfield_calculator";
import { electricpotential_calculator } from "./Components/Electromagnetism/Topics/electricpotential_calculator";
import CalculatorElec from "./Components/Electromagnetism/Topics/calculator";
import { Helmet } from "react-helmet";
import NumMCQ from "./Components/NumMCQ/NumMCQ";
import Singlequestion from "./Components/NumMCQ/Singlequestion";
import { hydrate, render } from "react-dom";
import flux_calculator from "./Components/Electromagnetism/Topics/flux_calculator";
import Relativity from "./Components/Relativity/Relativity";
import Calrelativity from "./Components/Relativity/Topics/Calculator";
const Home = lazy(() => {
  return Promise.all([
    import("./Components/Home/Home"),
    new Promise((resolve) => setTimeout(resolve, 4000)),
  ]).then(([moduleExports]) => moduleExports);
});

const App = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Fun with Science - Tech N Science</title>
        <meta
          name="description"
          content="Website for Physics formula and Physics calculator for IIT-JEE and NEET. In this website we provide free calculator
        and also formulas to make the long, tiring calculations easy. This website can be used by anyone who wants to reduce their efforts of long calculations."
          data-react-helmet="true"
        />
        <meta
          name="keyword"
          content="Physics formula, Physics calculator, IIT-JEE, NEET,Tech N Science, tech, science, questions, technscienceweb, technscience, tech and science, technscience.com, Tech N Science, technscience. com, tech n science"
        />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Helmet>

      <Switch>
        <Route exact path="/">
          <Suspense
            fallback={
              <div className="loadingdiv">
                <img className="loadingimg" src={Loadingimg} alt="" />
              </div>
            }
          >
            <Home />
          </Suspense>
        </Route>
        <Route exact path="/about" component={Home}>
          <Suspense
            fallback={
              <div className="loadingdiv">
                <img className="loadingimg" src={Loadingimg} alt="" />
              </div>
            }
          >
            <Home />
          </Suspense>
        </Route>
        <Route exact path="/contact" component={Home}>
          <Suspense
            fallback={
              <div className="loadingdiv">
                <img className="loadingimg" src={Loadingimg} alt="" />
              </div>
            }
          >
            <Home />
          </Suspense>
        </Route>
        <Route exact path="/classicalmechanics">
          <Navbar />
          <ClassicalMechanics />
        </Route>
        <Route exact path="/thermodynamics">
          <Navbar />
          <Thermodynamics />
        </Route>
        <Route exact path="/physics">
          <Navbar />
          <PhysicsTopic />
        </Route>

        <Route
          exact
          path="/classicalmechanics/calc/:topic"
          component={CalcClassic}
        >
          {/* <Navbar/> */}
          {/* <CalcClassic/> */}
        </Route>
        <Route
          exact
          path="/thermodynamics/calc/:topic"
          component={CalcThermo}
        ></Route>
        <Route
          exact
          path="/classicalmechanics/calc/gravitation/:topic"
          component={GravitationCalculator}
        ></Route>
        <Route
          exact
          path="/classicalmechanics/calc/moment_of_inertia/:topic"
          component={MOICalculator}
        ></Route>
        <Route
          exact
          path="/classicalmechanics/calc/shm/:topic"
          component={shm_Calculator}
        ></Route>
        <Route
          exact
          path="/classicalmechanics/calc/work_power_energy/:topic"
          component={WPECalculator}
        ></Route>
        <Route
          exact
          path="/classicalmechanics/calc/rotation/:topic"
          component={rotation_Calculator}
        ></Route>
        <Route exact path="/electromagnetism">
          <Navbar />
          <Electromagnetism />
        </Route>
        <Route
          exact
          path="/electromagnetism/calc/:topic"
          component={CalculatorElec}
        ></Route>

        <Route
          exact
          path="/electromagnetism/calc/electric_field/:topic"
          component={electricfield_calculator}
        ></Route>
        <Route
          exact
          path="/electromagnetism/calc/magnetic_field/:topic"
          component={Magneticfield_calculator}
        />
        {/* adding relativity calculator */}

        <Route exact path="/relativity">
          <Navbar />
          <Relativity />
        </Route>
        <Route exact path="/relativity/calc/:topic" component={Calrelativity} />

        <Route exact path="/quiz">
          <Navbar />
          <Quiz />
        </Route>

        <Route
          exact
          path="/classicalmechanics/calc/fluid_mechanics/:topic"
          component={FluidCalculator}
        ></Route>
        <Route exact path="/electromagnetism">
          <Navbar />
          <Electromagnetism />
        </Route>
        <Route
          exact
          path="/electromagnetism/calc/:topic"
          component={CalculatorElec}
        ></Route>

        <Route
          exact
          path="/electromagnetism/calc/electric_field/:topic"
          component={electricfield_calculator}
        ></Route>
        <Route
          exact
          path="/electromagnetism/calc/Flux/:topic"
          component={flux_calculator}
        />
        <Route
          exact
          path="/electromagnetism/calc/electric_potential/:topic"
          component={electricpotential_calculator}
        ></Route>

        <Route exact path="/questions">
          <Navbar />
          <NumMCQ />
        </Route>

        <Route exact path="/questions/:id" component={Singlequestion}></Route>

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
