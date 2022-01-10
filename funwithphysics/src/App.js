import { Routes, Route } from "react-router-dom";
import SlideRoutes from 'react-slide-routes';
import "./index.css";
import reducer, { initialstate } from "./reducer";
import FPassword from "./Components/Forgot_Password/fpassword";
import RPassword from "./Components/Forgot_Password/resetpassword";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Loginpage/Login";
import Loadingimg from "./Images/Logo/logo.webp";
import React, { Suspense, lazy, useReducer, useState, useEffect } from "react";
import ClassicalMechanics from "./Components/Classical_Mechanics/ClassicalMechanics";
import Thermodynamics from "./Components/Thermodynamics/Thermodynamics";
import CalcClassic from "./Components/Classical_Mechanics/Topics/Calculator";
import CalcThermo from "./Components/Thermodynamics/Topics/Calculator";
import WPECalculator from "./Components/Classical_Mechanics/Topics/wpe_Calculator";
import GravitationCalculator from "./Components/Classical_Mechanics/Topics/gravitation_Calculator";
import PhysicsTopic from "./Components/PhysicsTopic";
import MathsTopic from "./Components/MathsTopic";
import MOICalculator from "./Components/Classical_Mechanics/Topics/moi_Calulator";
import Shm_Calculator from "./Components/Classical_Mechanics/Topics/shm_Calculator";
import Rotation_Calculator from "./Components/Classical_Mechanics/Topics/rotation_Calculator";
import Quiz from "./Components/Quiz/Quiz";
import FluidCalculator from "./Components/Classical_Mechanics/Topics/fluidmechanics_Calculator";
import Electromagnetism from "./Components/Electromagnetism/Electromagnetism";
import Statistical from "./Components/Statistical/Statistical";
import CalculatorStatistical from "./Components/Statistical/Topics/Calculator";
import Electricfield_calculator from "./Components/Electromagnetism/Topics/electricfield_calculator";
import Magneticfield_calculator from "./Components/Electromagnetism/Topics/Magneticfield_calculator";
import {Electricpotential_calculator} from "./Components/Electromagnetism/Topics/electricpotential_calculator";
import CalculatorElec from "./Components/Electromagnetism/Topics/calculator";
import { Helmet } from "react-helmet";
import NumMCQ from "./Components/NumMCQ/NumMCQ";
import Singlequestion from "./Components/NumMCQ/Singlequestion";
import { hydrate, render } from "react-dom";
import Flux_calculator from "./Components/Electromagnetism/Topics/flux_calculator";
import Relativity from "./Components/Relativity/Relativity";
import Calrelativity from "./Components/Relativity/Topics/Calculator";
import AtomicPhysics from "./Components/Atomic_Physics/AtomicPhysics";
import CalcAtomic from "./Components/Atomic_Physics/Topic/Calculator";
import NuclearPhysics from "./Components/Nuclear_Physics/NuclearPhysics";
import CalcNuclear from "./Components/Nuclear_Physics/Topic/Calculator";
import Photonics from "./Components/Photonics/Photonics";
import CalcPhotonics from "./Components/Photonics/Topic/Calculator";
import Contact from "./Components/Contact/Contact";
import Algebra from "./Components/Algebra/algebra";
import Geometry from "./Components/Geometry/geometry";
import Calpermutation from "./Components/Algebra/Topic/Calculator";
import Calstraightline from "./Components/Geometry/Topic/Calculator";
const Home = lazy(() => {
  return Promise.all([
    import("./Components/Home/Home"),
    new Promise((resolve) => setTimeout(resolve, 4000)),
  ]).then(([moduleExports]) => moduleExports);
});
export const Context = React.createContext();
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const [searchTerm, setsearchTerm] = useState([]);
  const [typ, settyp] = useState(false);
  const [top, settop] = useState(false);
  const [difficult, setdifficult] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //localStorage.setItem("user", null);
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
      <Context.Provider
        value={{
          state,
          dispatch,
          searchTerm,
          setsearchTerm,
          typ,
          settyp,
          settop,
          top,
          setdifficult,
          difficult,
        }}
      >
        <SlideRoutes>
          <Route exact path="/" element={
            <Suspense
              fallback={
                <div className="loadingdiv">
                  <img className="loadingimg" src={Loadingimg} alt="" />
                </div>
              }
            >
              <Home />
            </Suspense>
          }>
          </Route>
          <Route exact path="/about" element={
            <>
              <Suspense
                fallback={
                  <div className="loadingdiv">
                    <img className="loadingimg" src={Loadingimg} alt="" />
                  </div>
                }
              >
                <Home />
              </Suspense>
            </>
          }>
          </Route>
          <Route exact path="/contact" element={
            <Suspense
              fallback={
                <div className="loadingdiv">
                  <img className="loadingimg" src={Loadingimg} alt="" />
                </div>
              }
            >
              <Contact />
            </Suspense>
          }>
          </Route>
          <Route exact path="/fpass" element={
            <>
              <Navbar />
              <FPassword />
            </>
          }>
          </Route>
          <Route exact path="/Signup" element={<Signup />}></Route>
          <Route exact path="/resetpassword" element={
            <>
              <Navbar />
              <RPassword />
            </>
          }>
          </Route>
          <Route exact path="/Login" element={
            <>
              <Navbar />
              <Login />
            </>
          }>
          </Route>

        </SlideRoutes>
        <Routes>


          <Route exact path="/classicalmechanics" element={
            <>
              <Navbar />
              <ClassicalMechanics />
            </>
          }>
          </Route>
          <Route exact path="/thermodynamics" element={
            <>
              <Navbar />
              <Thermodynamics />
            </>
          }>
          </Route>
          <Route exact path="/physics" element={
            <>
              <Navbar />
              <PhysicsTopic />
            </>
          }>
          </Route>
          <Route exact path="/maths" element={
            <>
              <Navbar />
              <MathsTopic />
            </>
          }>
          </Route>
          <Route exact path="/algebra" element={
            <>
              <Navbar />
              <Algebra />
            </>
          }>
          </Route>
          <Route exact path="/geometry" element={
            <>
              <Navbar />
              <Geometry />
            </>
          }>
          </Route>

          <Route
            exact
            path="/classicalmechanics/calc/:topic"
            element={<CalcClassic />}
          >
          </Route>
          <Route
            exact
            path="/algebra/calc/:topic"
            element={<Calpermutation />}
          ></Route>
          <Route
            exact
            path="/geometry/calc/:topic"
            element={<Calstraightline />}
          ></Route>
          <Route
            exact
            path="/thermodynamics/calc/:topic"
            element={<CalcThermo />}
          ></Route>
          <Route
            exact
            path="/classicalmechanics/calc/gravitation/:topic"
            element={<GravitationCalculator />}
          ></Route>
          <Route
            exact
            path="/classicalmechanics/calc/moment_of_inertia/:topic"
            element={<MOICalculator />}
          ></Route>
          <Route
            exact
            path="/classicalmechanics/calc/shm/:topic"
            element={<Shm_Calculator />}
          ></Route>
          <Route
            exact
            path="/classicalmechanics/calc/work_power_energy/:topic"
            element={<WPECalculator />}
          ></Route>
          <Route
            exact
            path="/classicalmechanics/calc/rotation/:topic"
            element={<Rotation_Calculator />}
          ></Route>
          <Route exact path="/electromagnetism" element={
            <>
              <Navbar />
              <Electromagnetism />
            </>
          }>
          </Route>
          <Route
            exact
            path="/electromagnetism/calc/:topic"
            element={<CalculatorElec />}
          ></Route>

          <Route
            exact
            path="/electromagnetism/calc/electric_field/:topic"
            element={<Electricfield_calculator />}
          ></Route>
          <Route
            exact
            path="/electromagnetism/calc/magnetic_field/:topic"
            element={<Magneticfield_calculator />}
          />
          {/* adding relativity calculator */}

          <Route exact path="/relativity" element={
            <>
              <Navbar />
              <Relativity />
            </>
          }>
          </Route>
          <Route
            exact
            path="/relativity/calc/:topic"
            element={<Calrelativity />}
          />

          {/* adding atomic physics calculator */}
          <Route exact path="/atomic" element={
            <>
              <Navbar />
              <AtomicPhysics />
            </>
          }>
          </Route>
          <Route
            exact
            path="/atomicphysics/calc/:topic"
            element={<CalcAtomic />}
          />

          {/* adding nuclear physics calculator */}
          <Route exact path="/nuclear" element={
            <>
              <Navbar />
              <NuclearPhysics />
            </>
          }>
          </Route>
          <Route
            exact
            path="/nuclearphysics/calc/:topic"
            element={<CalcNuclear />}
          />

          {/* adding photonics calculator */}
          <Route exact path="/photonics" element={
            <>
              <Navbar />
              <Photonics />
            </>
          }>
          </Route>
          <Route
            exact
            path="/photonics/calc/:topic"
            element={<CalcPhotonics />}
          />

          <Route exact path="/quiz" element={
            <>
              <Navbar />
              <Quiz />
            </>
          }>
          </Route>

          <Route
            exact
            path="/classicalmechanics/calc/fluid_mechanics/:topic"
            element={<FluidCalculator />}
          ></Route>
          <Route exact path="/electromagnetism" element={
            <>
              <Navbar />
              <Electromagnetism />
            </>
          }>
          </Route>
          <Route
            exact
            path="/electromagnetism/calc/:topic"
            element={<CalculatorElec />}
          ></Route>

          <Route
            exact
            path="/electromagnetism/calc/electric_field/:topic"
            element={<Electricfield_calculator />}
          ></Route>
          <Route
            exact
            path="/electromagnetism/calc/Flux/:topic"
            element={<Flux_calculator />}
          />
          <Route
            exact
            path="/electromagnetism/calc/electric_potential/:topic"
            element={<Electricpotential_calculator />}
          ></Route>

          <Route exact path="/statistical" element={
            <>
              <Navbar />
              <Statistical />
            </>
          }>
          </Route>
          <Route
            exact
            path="/statistical/calc/:topic"
            element={<CalculatorStatistical />}
          ></Route>

          <Route exact path="/questions" element={
            <>
              <Navbar />
              <NumMCQ />
            </>
          }>
          </Route>

          <Route
            exact
            path="/questions/:type/:id"
            element={<Singlequestion />}
          ></Route>

          {/* <Redirect to="/" /> */}
        </Routes>
      </Context.Provider>
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
