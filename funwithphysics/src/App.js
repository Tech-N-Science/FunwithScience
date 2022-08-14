import { Routes, Route } from "react-router-dom";
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
import ShmCalculator from "./Components/Classical_Mechanics/Topics/ShmCalculator";
import RotationCalculator from "./Components/Classical_Mechanics/Topics/RotationCalculator";
import MathsQuiz from "./Components/Quiz/mathsquiz";
import PhysicsQuiz from "./Components/Quiz/physicsquiz";
import FluidCalculator from "./Components/Classical_Mechanics/Topics/fluidmechanics_Calculator";
import Electromagnetism from "./Components/Electromagnetism/Electromagnetism";
import Statistical from "./Components/Statistical/Statistical";
import CalculatorStatistical from "./Components/Statistical/Topics/Calculator";
import ElectricfieldCalculator from "./Components/Electromagnetism/Topics/ElectricfieldCalculator";
import MagneticfieldCalculator from "./Components/Electromagnetism/Topics/MagneticfieldCalculator";
import { ElectricpotentialCalculator } from "./Components/Electromagnetism/Topics/ElectricpotentialCalculator";
import CalculatorElec from "./Components/Electromagnetism/Topics/calculator";
import { Helmet } from "react-helmet";
import NumMCQ from "./Components/NumMCQ/NumMCQ";
import Singlequestion from "./Components/NumMCQ/Singlequestion";
import MathMCQ from "./Components/MathMCQ/MathMCQ";
import Quest from "./Components/MathMCQ/Singlequestion";
import Editorial from "./Components/Editorial/Editorial";
import { hydrate, render } from "react-dom";
import FluxCalculator from "./Components/Electromagnetism/Topics/FluxCalculator";
import SeriesAndParallelCalc from "./Components/Electromagnetism/Topics/SeriesAndParallel";
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
import CalcComplexNumber from "./Components/Algebra/Topic/Calculator";
import Calstraightline from "./Components/Geometry/Topic/Calculator";
import CalCircle from "./Components/Geometry/Topic/Calculator";
import { useNavigate } from "react-router-dom";
import Integration from "./Components/Integration/integration";
import CalContinuity from "./Components/Integration/Topic/Calculator";
import Trigonometry from "./Components/Trigonometry/trigonometry";
import CalTrigonometryFunctions from "./Components/Trigonometry/Topic/Calculator";
import CalHyperbola from "./Components/Geometry/Topic/Calculator";
import ChemistryTopic from "./Components/ChemistryTopics/index";
import PeriodicTable from "./Components/PeriodicTable/periodicTable";
import Properties from "./Components/PeriodicTable/properties";

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
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense
                fallback={
                  <div className="loadingdiv">
                    <img className="loadingimg" src={Loadingimg} alt="" />
                  </div>
                }
              >
                <Home />
              </Suspense>
            }
          ></Route>
          <Route
            exact
            path="/about"
            element={
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
            }
          ></Route>
          <Route
            exact
            path="/contact"
            element={
              <Suspense
                fallback={
                  <div className="loadingdiv">
                    <img className="loadingimg" src={Loadingimg} alt="" />
                  </div>
                }
              >
                <Contact />
              </Suspense>
            }
          ></Route>
          <Route
            exact
            path="/fpass"
            element={
              <>
                <Navbar />
                <FPassword />
              </>
            }
          ></Route>
          <Route
            exact
            path="/Signup"
            element={<Signup history={useNavigate()} />}
          ></Route>
          <Route
            exact
            path="/resetpassword"
            element={
              <>
                <Navbar />
                <RPassword />
              </>
            }
          ></Route>
          <Route
            exact
            path="/Login"
            element={
              <>
                <Navbar />
                <Login />
              </>
            }
          ></Route>
          <Route
            exact
            path="/classicalmechanics"
            element={
              <>
                <Navbar />
                <ClassicalMechanics />
              </>
            }
          ></Route>
          <Route
            exact
            path="/periodic/"
            element={
              <>
                <Navbar />
                <PeriodicTable />
              </>
            }
          ></Route>
          <Route
            exact
            path="/periodic/property/:index"
            element={<Properties />}
          ></Route>
          <Route
            exact
            path="/thermodynamics"
            element={
              <>
                <Navbar />
                <Thermodynamics />
              </>
            }
          ></Route>
          <Route
            exact
            path="/chemistry"
            element={
              <>
                <Navbar />
                <ChemistryTopic />
              </>
            }
          ></Route>
          <Route
            exact
            path="/physics"
            element={
              <>
                <Navbar />
                <PhysicsTopic />
              </>
            }
          ></Route>
          <Route
            exact
            path="/maths"
            element={
              <>
                <Navbar />
                <MathsTopic />
              </>
            }
          ></Route>
          <Route
            exact
            path="/algebra"
            element={
              <>
                <Navbar />
                <Algebra />
              </>
            }
          ></Route>
          <Route
            exact
            path="/geometry"
            element={
              <>
                <Navbar />
                <Geometry />
              </>
            }
          ></Route>
          <Route
            exact
            path="/integration"
            element={
              <>
                <Navbar />
                <Integration />
              </>
            }
          ></Route>
          <Route
            exact
            path="/trigonometry"
            element={
              <>
                <Navbar />
                <Trigonometry />
              </>
            }
          ></Route>

          <Route
            exact
            path="/classicalmechanics/calc/:topic"
            element={<CalcClassic />}
          ></Route>
          <Route
            exact
            path="/algebra/calc/:topic"
            element={<Calpermutation />}
          ></Route>
          <Route
            exact
            path="/geometry/calc/:topic"
            element={<CalCircle />}
          ></Route>
          <Route
            exact
            path="/geometry/calc/:topic"
            element={<CalHyperbola />}
          ></Route>
          <Route
            exact
            path="/algebra/calc/:topic"
            element={<CalcComplexNumber />}
          ></Route>
          <Route
            exact
            path="/geometry/calc/:topic"
            element={<Calstraightline />}
          ></Route>
          <Route
            exact
            path="/geometry/calc/:topic"
            element={<CalCircle />}
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
            element={<ShmCalculator />}
          ></Route>
          <Route
            exact
            path="/classicalmechanics/calc/work_power_energy/:topic"
            element={<WPECalculator />}
          ></Route>
          <Route
            exact
            path="/classicalmechanics/calc/rotation/:topic"
            element={<RotationCalculator />}
          ></Route>
          <Route
            exact
            path="/electromagnetism"
            element={
              <>
                <Navbar />
                <Electromagnetism />
              </>
            }
          ></Route>
          <Route
            exact
            path="/electromagnetism/calc/:topic"
            element={<CalculatorElec />}
          ></Route>

          <Route
            exact
            path="/electromagnetism/calc/electric_field/:topic"
            element={<ElectricfieldCalculator />}
          ></Route>
          <Route
            exact
            path="/electromagnetism/calc/magnetic_field/:topic"
            element={<MagneticfieldCalculator />}
          />
          {/* adding relativity calculator */}

          <Route
            exact
            path="/relativity"
            element={
              <>
                <Navbar />
                <Relativity />
              </>
            }
          ></Route>
          <Route
            exact
            path="/relativity/calc/:topic"
            element={<Calrelativity />}
          />

          {/* adding atomic physics calculator */}
          <Route
            exact
            path="/atomic"
            element={
              <>
                <Navbar />
                <AtomicPhysics />
              </>
            }
          ></Route>
          <Route
            exact
            path="/atomicphysics/calc/:topic"
            element={<CalcAtomic />}
          />

          {/* adding nuclear physics calculator */}
          <Route
            exact
            path="/nuclear"
            element={
              <>
                <Navbar />
                <NuclearPhysics />
              </>
            }
          ></Route>
          <Route
            exact
            path="/nuclearphysics/calc/:topic"
            element={<CalcNuclear />}
          />

          {/* adding photonics calculator */}
          <Route
            exact
            path="/photonics"
            element={
              <>
                <Navbar />
                <Photonics />
              </>
            }
          ></Route>
          <Route
            exact
            path="/photonics/calc/:topic"
            element={<CalcPhotonics />}
          />

          <Route
            exact
            path="/physicsquiz"
            element={
              <>
                <Navbar />
                <PhysicsQuiz />
              </>
            }
          ></Route>
          <Route
            exact
            path="/mathsquiz"
            element={
              <>
                <Navbar />
                <MathsQuiz />
              </>
            }
          ></Route>

          <Route
            exact
            path="/classicalmechanics/calc/fluid_mechanics/:topic"
            element={<FluidCalculator />}
          ></Route>
          <Route
            exact
            path="/electromagnetism"
            element={
              <>
                <Navbar />
                <Electromagnetism />
              </>
            }
          ></Route>
          <Route
            exact
            path="/electromagnetism/calc/:topic"
            element={<CalculatorElec />}
          ></Route>

          <Route
            exact
            path="/electromagnetism/calc/electric_field/:topic"
            element={<ElectricfieldCalculator />}
          ></Route>
          <Route
            exact
            path="/electromagnetism/calc/Flux/:topic"
            element={<FluxCalculator />}
          />
          <Route
            exact
            path="/electromagnetism/calc/series_and_parallel/:topic"
            element={<SeriesAndParallelCalc />}
          />
          <Route
            exact
            path="/electromagnetism/calc/electric_potential/:topic"
            element={<ElectricpotentialCalculator />}
          ></Route>

          <Route
            exact
            path="/statistical"
            element={
              <>
                <Navbar />
                <Statistical />
              </>
            }
          ></Route>
          <Route
            exact
            path="/statistical/calc/:topic"
            element={<CalculatorStatistical />}
          ></Route>

          <Route
            exact
            path="/questions"
            element={
              <>
                <Navbar />
                <NumMCQ />
              </>
            }
          ></Route>

          <Route
            exact
            path="/questions/:type/:id"
            element={<Singlequestion />}
          ></Route>
          <Route
            exact
            path="/MathQuestion"
            element={
              <>
                <Navbar />
                <MathMCQ />
              </>
            }
          ></Route>
          <Route
            exact
            path="/MathQuestion/:type/:id"
            element={<Quest />}
          ></Route>
          <Route
            exact
            path="/MathQuestion/:type/:id/editorial"
            element={<Editorial />}
          ></Route>
          <Route
            exact
            path="/question/:type/:id/editorial"
            element={<Editorial />}
          ></Route>
          <Route
            exact
            path="/integration/calc/:topic"
            element={<CalContinuity />}
          ></Route>

          <Route
            exact
            path="/trigonometry/calc/:topic"
            element={<CalTrigonometryFunctions />}
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
