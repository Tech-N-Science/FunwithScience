// Note : It is a Sample to show how to use Solution Display

// Import SI and Constants and SOlution component
import { constant } from "../../Solution/allConstants";
import { SI } from "../../Solution/allSIUnits";
import Modal from "react-bootstrap/Modal";
import Solution from "../../Solution/Solution";

//Gravitational Force calculator
function CalculatorGravitationalForce() {
  const [result, setResult] = useState("");
  const [mass_A, setMassA] = useState("");
  const [mass_B, setMassB] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [distance, setDistance] = useState("");
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
    if (mass_A != "" && mass_B != "" && distance != "") {
      let res =
        (6.67 * Math.pow(10, -11) * mass_A * mass_B) / (distance * distance);
      setResult(res);
    } else {
      setShowModal(true);
    }
  };

  //reset function => to reset all states
  const resetForm = () => {
    setMassA("");
    setMassB("");
    setDistance("");
    setShowSolution(false);
    setResult("");
  };
  return (
    <React.Fragment>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
        <Modal.Header>
          Please Enter all values to get Proper answer
        </Modal.Header>
        <Modal.Footer>
          <Button
            onClick={() => setShowModal(false)}
            class="btn btn-primary btn-sm"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
            placeholder={result === "" ? "Result" : result + " Newton"}
          />
          <Form.Text className="text-muted">
            Enter masses & distance to Calculate the Gravitational Force .
          </Form.Text>
        </Form.Group>
        <Button variant="primary" onClick={handleClick}>
          Calculate
        </Button>
        &nbsp;&nbsp;&nbsp; //Call reset Form in every Calculator
        <Button variant="dark" onClick={resetForm} type="reset">
          Reset
        </Button>
      </Form>
    </React.Fragment>
  );
}
