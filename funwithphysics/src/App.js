import Home from "./Components/Home/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import './index.css';
import Navbar from "./Components/Navbar/Navbar";
import React from 'react'
import ClassicalMechanics from './Components/Classical Mechanics/ClassicalMechanics'
import Calculator from './Components/Classical Mechanics/Topics/Calculator'
import WPECalculator from './Components/Classical Mechanics/Topics/wpe_Calculator'
import GravitationCalculator from './Components/Classical Mechanics/Topics/gravitation_Calculator'
import physics_topic from './Components/Physics_topic/physics_topic'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/contact" component={Home} />
        <Route exact path="/classicalmechanics" component={ClassicalMechanics} />
        <Route exact path="/physics" component={physics_topic} />
        <Route exact path="/classicalmechanics/calc/:topic" component={Calculator} />
        <Route exact path="/classicalmechanics/calc/:topic/:topic" component={WPECalculator} />
        <Route exact path="/classicalmechanics/calc/:topic/:topic" component={GravitationCalculator} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  )
}

export default App;
