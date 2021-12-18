// Note : It is a Sample to show how to use Solution Display


// Import SI and Constants and SOlution component
import {constant} from '../../Solution/allConstants'
import {SI} from '../../Solution/allSIUnits'
import Solution from "../../Solution/Solution";

//Gravitational Force calculator
function CalculatorGravitationalForce() {
  const [result, setResult] = useState(null);
  const [mass_A, setMassA] = useState(null);
  const [mass_B, setMassB] = useState(null);
  const [distance, setDistance] = useState(null);
  //add 
  const [showSolution, setShowSolution] = useState(false);

    // object of given values
  const givenValues = {
    mass_A: mass_A,
    mass_B: mass_B,
    distance: distance,
  };

  // defintion of insertValues
  // how to add a variable  variable(their SI unit)
  // example ${mass}${SI["mass"]}
  // how to add constant
  // example ${constant["G"]}

  const insertValues = `${constant["G"]} * ${mass_A}${SI["mass"]} * ${mass_B}${SI["mass"]} / (${distance} ${SI["distance"]})² `;

  // It Have List of all constant used in that formulae
  const constants = ["G"];


  //add these  validation also and also set setShowSolution
  const handleClick = () => {
    if (mass_A != null && mass_B != null && distance != null) {
      let res =
        (6.67 * Math.pow(10, -11) * mass_A * mass_B) / (distance * distance);
      setResult(res);
    } else {
      alert("Please Enter all values to get Proper answer");
    }
  };

  //reset function => to reset all states 
  const resetForm = () => {
    setMassA(null);
    setMassB(null);
    setDistance(null);
    setShowSolution(false);
    setResult(null);
  };
  return (
    <React.Fragment>
      {/* <Navbar/> */}
      <Form>
        <Form.Group className="mb-3" controlId="mass_A">
          <Form.Label>Mass A (m)</Form.Label>
          <Form.Control
            onChange={(e) => setMassA(e.target.value)}
            type="number"
            placeholder="Enter Mass of body A in SI unit"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="mass_B">
          <Form.Label>Mass B (M)</Form.Label>
          <Form.Control
            onChange={(e) => setMassB(e.target.value)}
            type="number"
            placeholder="Enter Mass of body B in SI unit"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="distance">
          <Form.Label>Distance (D)</Form.Label>
          <Form.Control
            onChange={(e) => setDistance(e.target.value)}
            type="number"
            placeholder="Enter Distance in SI unit"
          />
        </Form.Group>
        {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="GMm/d²"
              toFind="Gravitational Force"
              insertValues={insertValues}
              result={result}
              constants={constants}
            />
          </Form.Group>
        ) : null}
        <Form.Group className="mb-3" controlId="Gravitational_Force">
          <Form.Label>Gravitational Force (F)</Form.Label>
          <Form.Control
            readOnly
            type="number"
            placeholder={result === null ? "Result" : result + " Newton"}
          />
          <Form.Text className="text-muted">
            Enter masses & distance to Calculate the Gravitational Force .
          </Form.Text>
        </Form.Group>
        <Button variant="primary" onClick={handleClick}>
          Calculate
        </Button>
        &nbsp;&nbsp;&nbsp;

        //Call reset Form in every Calculator
        <Button variant="dark" onClick={resetForm} type="reset">
          Reset
        </Button>
      </Form>
    </React.Fragment>
  );
}

