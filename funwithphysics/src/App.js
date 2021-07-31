import Home from "./Components/Home/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import './index.css';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import React from 'react'
import ClassicalMechanics from './Components/Classical Mechanics/ClassicalMechanics'
import Momentum_Calc from './Components/Classical Mechanics/Topics/Momentum_Calc'

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/contact" component={Home} />
        <Route exact path="/classicalmechanics" component={ClassicalMechanics} />
        <Route exact path="/classicalmechanics/calc/momentum" component={Momentum_Calc} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  )
}

// function App() {
//    function Force(){
//     var a = parseInt(document.getElementById("mass").value);
//     var b = parseInt(document.getElementById("acce").value);
//     var F = a*b;
//     var re = document.getElementById("result");
//     var temp = "Force = " + a+" x "+b+"<br/>";
//     temp += "Force = "+F+"N";
//     re.innerHTML = temp;

//    } 

//   return (
//   <div className="App">

//      <header className="App-header">

//         <p>
//           Fun With Physics
//         </p>

//     <div classNameName = "wrapper">
//       <h3 styles={{fontStyle: 'Montserrat'}}>Calculating Force using mass and acceleration</h3>
//       <br/>
//       <p>F = m * a</p><br/>
//       <form action="">
//       <div className="form-group" id='inputform'>
//           <input type="text"  className="form__field" name="a" id="mass" placeholder="Enter mass" />
//           <input type="text" name="b" className="form__field" id="acce" placeholder="Enter acceleration " /> <br/> <br/>
//           <button className="btn btn-outline-light" type="button" onClick={Force}>Find</button>

//       </div>
//     </form>
//       <p id="result"></p><br/><br/>
//     </div>


//     </header> 
//   </div>

//   );
// }

export default App;
