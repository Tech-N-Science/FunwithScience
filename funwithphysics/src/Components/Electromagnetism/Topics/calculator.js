import React, { useState } from "react";
import "./Calculator.css";
import { Form, Card, Button } from "react-bootstrap";
import "../Electromagnetism.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import Solution from "../../Solution/Solution";
import {constant} from '../../Solution/allConstants';
import {SI} from '../../Solution/allSIUnits';
import Modal from "react-bootstrap/Modal";

const calculator = ({ match }) => {
  //topics_data
  const Topics = [
    {
      topic: "Coulomb's law",
      details: `The quantity of electric force between two point charges q1 and q2 is proportional to the product of the charges' magnitudes; this electric force is known as electrostatic force or coulomb force. using the formula F=k[(q1*q2)/r2], where F is the electric force, q1 and q2 are the charges, and r is the separation distance.`,
      formula: "F=k[(q1*q2)/r²]",
      process:
        "To find the force between these charges we need to know the q1 and q2 charges and distance of separation (r), where k is constant and it's value is 8.99 × 10⁹ N m²/C².",
      siunit: "(N)",
      dimension: "[M¹L¹T⁻²]",
    },
    {
      topic: "Electric Field",
      details: "....",
    },
    {
      topic: "Ohm's Law",
      details: `Ohm's law states that the voltage (V) between two points is directly proportional to the current (I) across that two points and the constant of proportionality is resistance (R) and the equation is given as "V=IR"`,
      siunit: [
        "Resistance  : Ohm",
        <br />,
        "Current : (Ampere)",
        <br />,
        "Voltage : (V)",
      ],
      process:
        "To find the voltage (V), we need to know the the current between the two point and the resistance(R) across the points & To find the current(I) or the resistance(R) we can also find it using the ohm's law.",
      formula: "V=IR",
      dimension: "V = ML²T⁻²I⁻¹, R = ML²T⁻³I⁻²",
    },
    {
      topic: "Drift Velocity",
      details: `Subatomic particles, such as electrons, constantly move in random directions. When electrons are subjected to an electric field, they move randomly, but slowly in one direction, the direction of the applied electric field. Drift velocity is the net velocity at which these electrons drift.`,
      siunit: "m/s",
      process:
        "To find the drift velocity (V), we need to know the the current flowing through the conductor(I), number of electrons(n), Area of cross-section of the conductor(A) and the charge of electron(q).",
      formula: "V = I/nAq",
      dimension: "M⁻¹T²I",
    },
    {
      topic: "Electric Potential",
      details: "...",
    },
    {
      topic: "Flux",
      details: "...",
    },
    {
      topic: "Gauss Law",
      details:
        "The Gauss law is a relationship between the 'flow' of electric field lines (flux) and the charges on the enclosed surface. The net electric flow stays zero if no charges are contained by a surface. The number of electric field lines entering the surface equals the number of field lines exiting the surface.",
      formula: "Φ = Q/ε₀",
      siunit: "Nm²/C or volt-meter",
      dimension: "M L³ T⁻³ I⁻¹",
      process:
        "According to the Gauss law, the total electric flux (Φ) linked with a closed surface is 1/ε₀ times the charge Q enclosed by the closed surface.",
    },
    {
      topic: "Resistivity",
      details: `Electrical resistance of a conductor with a unit cross-sectional area and length. Resistivity, a material attribute, is useful in comparing different materials based on their capacity to conduct electric currents. Poor conductors have high resistance.`,
      siunit: "ohm-meter",
      dimension: "ML³T⁻³I⁻²",
      process:
        "To find the resistivity we need to know the Resistance (R), area (A), and the length (l) by putting these value in formula we can easily find the resistivity.",
      formula: "ρ=RA/l",
    },
    {
      topic: "Self Inductance",
      details: `When the coil's current or magnetic flux changes, an opposing induced electromotive force is created. Self Induction is the name given to this occurrence. When electricity begins to flow through the coil at any time, it is discovered that the magnetic flux becomes directly proportional to the current flowing through the circuit. `,
      siunit: "Henry (H)",
      process:
        "To find the Self inductance of inductor(L), we need to know the the current flowing through the conductor(I), number of turns (N) and magnetic flux(Φ).",
      formula: "L = NΦ/I",
      dimension: "ML²T⁻²I²",
    },
    {
      topic: "Energy Density Of Inductor",
      details: `The effort required to create a current via an inductor is equal to the energy stored in a magnetic field. When an electric current travels through an inductor, the energy density is the amount of energy stored per unit volume in the magnetic field. `,
      siunit: "joules per cubic metre",
      process:
        "To find the energy density of inductor, we need to know the value of magnetic field that is generated when current(I) flows throw an inductor with inductance(L).",
      formula: "B²/2μ₀",
      dimension: "ML⁻¹T⁻²",
    },
    {
      topic: "Power Factor",
      details:
        "Power factor may be defined as the ratio between Resistance and Impedance in AC Circuit.",
      siunit: "Unitless",
      process:
        "To find the Power Factor of an a.c. circuit, we need to know the resistance (R), and impedance of the circuit (Z). Where Z = Z = √(R²+(XL - Xc)²). If cosθ is 1 then AC circuit is purely Resistive.",
      formula: "cosθ = R/Z, Z = √(R²+(XL - Xc)²)",
      dimension: "Dimensionless",
    },
    {
      topic: "Motional EMF",
      details:
        "A motional electromotive force in a sliding bar is an emf caused by the movement of a conductor across a magnetic field. E = -vLB denotes the equation. This equation holds true as long as the velocity, field, and length of sliding bar are all perpendicular to each other. The minus sign represents Lentz law.",
      formula: "ε = -Bvl",
      siunit: "Volts (Joules/Coulombs)",
      dimension: "M L² T⁻³ I⁻¹",
      process:
        "To find the motional EMF(ε) we need to know the magnetic field (B), the constant speed (v) and the length (l) of sliding bar. ",
    },
    {
      topic: "Faraday's Law",
      details:
        "Faraday's law states that the induced emf(ε) in a circuit is proportional to the rate of change over time(t) of the magnetic flux(Φ) through that circuit.",
      formula: "ε = -N * (ΔΦ /Δt) ",
      siunit: "Volts (Joules/Coulombs)",
      dimension: "M L² T⁻³ I⁻¹",
      process:
        "In order to find the induced EMF(ε) we need know the rate of change of Time period(Δt) and the rate of change of magnetic flux(ΔΦ) in the circuit and also the number of turns in the coil(N). ",
    },
    {
      topic: "Time period",
      details:
        "The time for the charged particle to go around the circular path is defined as the period, which is the same as the distance traveled (the circumference) divided by the speed. Based on this and Equation, we can derive the period of motion as T = 2πm/(qB).",
      formula: "T = 2πm/(qB)",
      siunit: "second",
      dimension: "T",
      process:
        "To find the Time period (T) we need to know the magnetic field (B), the mass of the particle(m) and the charge of the particle(q). ",
    },
    {
      topic: "Magnetic Force",
      details: `Moving charges exert forces on magnetic fields, which in turn impose pressures on other magnets with moving charges. Right hand rule 1 (RHR-1) determines the direction of force on a moving charge: The right hand's thumb should point in the direction of v, the fingers should point in the direction of B, and a perpendicular to the palm should point in the direction of F. The force is parallel to the plane created by v and B. Charged particles frequently follow magnetic field lines rather than crossing them because the force is zero when v is parallel to B. `,
      siunit: "Newton (N)",
      process:
        "To find the Magnetic Force exerted(F), we need to know the charge flowing(q), speed of charges (v) and magnetic field strength(B) and the angle between velocity and magnetic field(θ).",
      formula: "F = qvBsin(θ)",
      dimension: "ML¹T⁻²",
    },
    {
      topic: "Magnetic field",
      details: "....",
    },
  ];
  //Flux data
  const flux_data = [
    {
      topic: "Electric Flux",
      formula: "ΦE=E.S.cosθ",
      siunit: "volt metres (V m)",
      dimension: "[M L³ T⁻³ I⁻¹]",
      process:
        "To find the electric flux, we need to know the electric field (E), area of the surface (S) and angle (θ) between the electric field lines and the normal to S.",
      details: `Electric Flux is defined as "ΦE=E.S.cosθ", where ΦE denotes the electric flux, E denotes the electric field, S denotes the surface area, and θ is the angle between the electric field lines and the normal (perpendicular) to S. `,
    },
    {
      topic: "Magnetic Flux",
      formula: "ΦB=B.A.cosθ",
      siunit: "volt–seconds or weber",
      dimension: "[M L² T⁻² I⁻¹]",
      process:
        "To find the magnetic flux we need to know the magnetic field (B), area (A)and the angle (θ).",
      details: `Magnetic Flux is given by the equation "ΦB=B.A.cosθ", where ΦB is the magnetic flux, B is the magnetic field, A is area and θ is the angle between the perpendicular vector to the area and magnetic field.`,
    },
  ];
  //electricpotential_data
  const electricpotential_data = [
    {
      topic: "Point Charge",
      details: `Electric Potential due to a point charge (Q) at a point P is given by the equation "V=kQ/r", where V is the electric potential and Q is the charge, r is the distance from the charge to the point P,  where as k is (1/4πε₀) which is constant and it's value is 8.99*10⁹ N m²/C²`,
      formula: "V=kQ/r",
      siunit: "volt",
      dimension: "M L² T⁻³ I⁻¹",
      process:
        "To find the the electric potential for a point charge we need to know the charge (Q) and the distance (r), by putting these values in the formula we can easily find the electric potential.",
    },
    {
      topic: "Ring",
      formula: "V=kQ/√(R²+r²)",
      details: `Electric potential due to a charged ring at a point P perpendicular to its axis is given by the equation "V=kQ/√(R²+r²)" where Q is the charge, R is the Radius, r is the distance of the charge ring from the point P where as k is (1/4πε₀) which is constant and it's value is 8.99*10⁹ N m²/C²`,
      siunit: "volt",
      dimension: "M L² T⁻³ I⁻¹",
      process:
        "To find the electric potential for the charged ring we need to know the charge (Q), distance of the charge from the center (r) and the radius of the ring (R) where as the k is constant by putting these values in the formula we can easily find the electric potential.",
    },
    {
      topic: "Disc",
      details: `Electric potential due to a charged Disc at a point P perpendicular to its axis is given by the equation "V=kσ2π[√(R²+r²)-r]" where σ is the surface charge density, R is the radius, and r is the distance between the center of disc and point P where as k is (1/4πε₀) which is constant and it's value is 8.99*10^9 N m²/C²`,
      formula: "V=kσ2π[√(R²+r²)-r]",
      siunit: "volt",
      process:
        "By putting the value of surface charge density (σ), Radius (R) and distance (r) in given equation we can easily find the electric potential for the disc, where as k is constant and it's value is 8.99*10⁹ N m²/C²",
      dimension: "M L² T⁻³ I⁻¹",
    },
    {
      topic: "Sphere",
      details: [
        "There are three condition for Sphere:",
        <br />,
        "1) If r > R, in this case electric potential due to the charged sphere is same as that of a point charge i.e, V = kQ/r",
        <br />,
        "2) If r = R, in this case electric potential due to the charged sphere is given by the formula V = kQ/R",
        <br />,
        "3) If r < R, in this case electric potential due to the charged sphere is given by the formula V = kQ/R³[(3R²/2)-(r²/2)]",
        <br />,

        "where 'r' is the distance between the center of sphere and the point at which electric potential is produced and 'R' is the radius of sphere. ",
      ],
      formula: [
        "Sphere (r > R)=> V=kQ/r",
        <br />,
        "Sphere (r < R)=> V=kQ/R³[(3R²/2)-(r²/2)]",
      ],
      siunit: "volt",
      dimension: "M L² T⁻³ I⁻¹",
      process:
        "To find the electric potential for (r > R) the sphere we need to know the charge (Q) and the distance (r) where as k is (1/4πε₀) which is constant and it's value is 8.99*10⁹ N m²/C² ",
    },
    {
      topic: "Shell",
      formula: ["Shell (r > R)=> V=kQ/r", <br />, "Shell (r < R)=> V=kQ/R"],
      details: [
        "There are three condition for Shell:",
        <br />,
        "1) If r > R, in this case electric potential produced is same as that of a point charge i.e, V = kQ/r",
        <br />,
        "2) If r = R, in this case electric potential produced is given by the formula V = kQ/R",
        <br />,
        "3) If r < R, in this case electric potential produced is given by the formula V = kQ/R",
        <br />,

        "where 'r' is the distance between the center of shell and the point at which electric potential is produced and 'R' is the radius of shell. ",
      ],
      siunit: "volt",
      dimension: "M L² T⁻³ I⁻¹",
      process:
        "To find the electric potential for the Outside the shell we need to know the charge (Q), and the distance (r) at which charge is placed where as k is (1/4πε₀) which is constant and it's value is 8.99*10^9 N m²/C².",
    },
  ];
  //magneticfield_data
  const magneticfield_data = [
    {
      topic: "Infinite Sheet",
      details:
        "Consider an infinite vertical sheet carrying current out of the page. The sheet has a uniform current per unit length J₀. The magnetic field (B) produced due to current sheet due to a charge density(J₀) can be calculated using Ampere's Law. So the magnetic field produced is μ₀J₀/2.",
      formula: "B= μ₀*J₀/2",
      siunit: "Tesla",
      dimension: "MT⁻²I⁻¹ ",
      process:
        "To find the magnetic field(B) for a infinite sheet  we need to know the current density (J₀) and then applying Ampere's Law we can determine the magnetic field. ",
    },
    {
      topic: "Infinite Wire",
      details:
        "The magnetic field of a long straight wire has more implications than one might first suspect. Each current segment generates a magnetic field similar to that of a long straight wire, and the overall field of any shape current is equal to the vector sum of the fields generated by each segment.  Because the wire is so long, the magnitude of the field is determined only by the distance r from the wire, rather than its location along the line.",
      formula: "B = μ₀I/2πr",
      siunit: "Tesla",
      dimension: "MT⁻²I⁻¹",
      process:
        "To find the magnetic field(B) for an infinite wire  we need to know the current density (I), shortest distance to the wire (r) and then applying Biot Savart's Law we can determine the magnetic field. ",
    },
    {
      topic: "Solenoid",
      details:
        "Outside the solenoid, the field is radially uniform or constant. The flux density outside the solenoid may likewise be shown to be zero using an intuitive reasoning. Magnetic field lines can only exist as loops; unlike electric field lines, they cannot diverge or converge to a point. Because the magnetic field lines in the solenoid follow a longitudinal course, the magnetic field lines outside the solenoid must proceed in the opposite direction. This occurs as a result of the lines creating a loop. The volume outside the solenoid, on the other hand, is significantly larger than the volume within. As a result, the density of magnetic field lines outside the solenoid is significantly reduced. As a result, the field outside the solenoid can be said to be constant. For the total number of field lines to be conserved, the field outside must go to zero as the solenoid gets longer. ",
      formula: "B=μ₀*N*I",
      siunit: "Tesla",
      dimension: "MT⁻²I⁻¹ ",
      process:
        "To find the magnetic field for the solenoid we need to know the no. of turns (N) and the current in solenoid (I) where as μ₀ is constant and it's value is 4π*10⁻⁷ Henry/m",
    },
    {
      topic: "Solid Cylinder",
      details: [
        "Consider a solid cylinder of radius(R) carrying current (i) along its length. The cylinder has a uniform current density. The magnetic field (B) due to the solid cylinder can be calculated for three cases:",
        <br />,
        "1) If r < R, the magnetic field is given by the formula B=μ₀ir/2πR²",
        <br />,
        "2) If r = R, the magnetic field is given by the formula B=μ₀i/2πR",
        <br />,
        "3) If r > R, the magnetic field is given by the formula B=μ₀i/2πr",
        <br />,
        <br />,
        "where 'r' is the distance from the axis of the solid cylinder.",
      ],
      formula: [
        "Inside(r < R): B=μ₀ir/2πR²",
        <br />,
        "At Surface (r = R): B=µ₀i/2πR",
        <br />,
        "Outside(r > R): B=µ₀i/2πr",
      ],
      siunit: "Tesla",
      dimension: "MT⁻²I⁻¹ ",
      process:
        "To find the magnetic field(B) for a solid cylinder we need to know its radius(R), the current(I) flowing along its length and a distance from the axis(r). ",
    },
    {
      topic: "Toroid",
      details:
        "Consider a hollow circular ring with N number of turns of the carrying current wire. The magnetic field (B) produced  due to current (I) at point P (inside toroid) with radius (r) can be calculated using Ampere's Law. So the magnetic field produced is  μ₀NI/2πr.",
      formula: "B= μ₀NI/2πr",
      siunit: "Tesla",
      dimension: "MT⁻²I⁻¹ ",
      process:
        "To find the magnetic field(B) for the points inside the toroid we need to know the total number of turns (N), current in the loop (I) and radius of the loop (r) and then by applying Ampere's Law we can determine the magnetic field for the points inside the toroid. ",
    },
    {
      topic: "Circular coil",
      details:
        "Consider a circular coil  with N number of turns of the carrying current wire. The magnetic field (B) produced  due to current (I) at the center with radius (r) can be calculated using Ampere's Law. So the magnetic field produced is  μ₀NI/2r.",
      formula: "B= μ₀NI/2r",
      siunit: "Tesla",
      dimension: "MT⁻²I⁻¹ ",
      process:
        "To find the magnetic field(B) at the centre of circular coil we need to know the total number of turns (N), current in the loop (I) and radius of the loop (r) and then by applying Ampere's Law we can determine the magnetic field at hte centre of circular coil. ",
    },
  ];
  //electricfield_data
  const electricfield_data = [
    {
      topic: "Point Charge",
      details:
        "The electric field (E) produced at a point(P) due to a point charge(Q) held at a distance (r) from the point(P) is kQ/r².",
      formula: "E=kQ/r²",
      siunit: "newtons per coulomb (N/C)",
      dimension: "[M L I⁻¹ T⁻³].",
      process:
        "To find the electric field for a point due to a point charge we need to know the charge of magnitude (Q), distance (r) between the point and point charge. ",
    },
    {
      topic: "Line Charge",
      formula: "E=kq/x*√(x²+a²)",
      siunit: "newtons per coulomb (N/C)",
      details:
        "Electric field produced (E) by a line charge (q) of finite length at a distance (x) from the center is given by the equation E=kq/x*√(x²+a²) [where (a) is half length of line charge]",
      dimension: "[M L I⁻¹ T⁻³]",
      process:
        "To find the electric field (E) by a line charge of finite length we need to know the charge (q), distance(x) and the half length (a).",
    },
    {
      topic: "Sphere",
      formula: "E=kqr/R³",
      siunit: "newtons per coulomb (N/C)",
      dimension: "[M L I⁻¹ T⁻³]",
      details: [
        "There are three condition for Sphere:",
        <br />,
        "1) If r > R, in this case electric field produced is same as that of a point charge i.e, E = kq/r²",
        <br />,
        "2) If r = R, in in this case electric field produced is given by E = kq/R²",
        <br />,
        "3) If r < R, in in this case electric field produced is kqr/R³",
        <br />,

        "where 'r' is the distance between the center of sphere and the point at which electric field is produced and 'R' is the radius of sphere. ",
      ],
      process:
        "To find the Electric field (E) for the sphere, we need to know the charge (q) by the sphere, radius (R) of the sphere and the distance (r) where as k is the constant",
    },
    {
      topic: "Ring",
      formula: "E=kQx/(x²+R²)⁽³/²⁾",
      siunit: "newtons per coulomb (N/C)",
      dimension: "[M L I⁻¹ T⁻³]",
      details:
        "The electric field produced at a point P due to a ring charge is E=kQx/(x²+R²)⁽³/²⁾, Where Q=total charge, R is the Radius of the ring, x is the distance from the center of the ring and P where as k is constant. In case total charge is not known then Q=2πλR (where λ is charge density and R is radius of ring).",
      process:
        "By putting the value of radius (R), charge (Q) and the distance (x), we can easily find the electric fied produced by the charged ring.",
    },
    {
      topic: "Disc",
      formula: "E=σ/2ε₀[1-x/√(x²+R²)]",
      siunit: "newtons per coulomb (N/C)",
      dimension: "[M L I⁻¹ T⁻³].",
      details: `Electric field produced by the charged disc at a point P is given by the equation "E=σ/2ε₀[1-x²/√(x²+R²)]" where σ is surface charge density, x is distance, R is the radius where as ε₀ is constant and it's value is 8.854187817 × 10⁻¹² C²/N. m² `,
      process:
        "To find the electric field for the disc we need to know the Radius (R) of the disc, and the distance (x) and the surface charge density(σ), where as the (ε₀) is constant and its value is 8.854187817 × 10⁻¹² C²/N. m² ",
    },
    {
      topic: "Shell",
      details: [
        "There are three condition for Shell:",
        <br />,
        "1) If r > R, in this case electric field produced is same as that of a point charge i.e, E = kq/r²",
        <br />,
        "2) If r = R, in this case electric field produced is given by E = kq/R²",
        <br />,
        "3) If r < R, in this case electric field produced is zero",
        <br />,

        "where 'r' is the distance between the center of shell and the point at which electric field is produced and 'R' is the radius of shell. ",
      ],
      formula: "E=kQ/r²",
      siunit: "newtons per coulomb (N/C)",
      dimension: "[M L I⁻¹ T⁻³].",
      process:
        "he charge of magnitude (Q), distance (r) away from the spherical shell and by putting these values in formula we can easily find the electric field.",
    },
  ];

  const page = Topics.filter((data) => data.topic === match.params.topic);
  const details = page[0];

  //Coulomb's law Calculator
  const CoulombCalculator = () => {
    const [charge1, setCharge1] = useState(null);
    const [charge2, setCharge2] = useState(null);
    const [distance, setDistance] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const k = 8.99 * Math.pow(10, 9);

    const reset = () => {
      setCharge1(null);
      setCharge2(null);
      setDistance(null);
      setResult(null);
      setShowSolution(false);
    };

    const calcResult = () => {
      if(charge1!==null && charge2!==null && distance!==null){
      let res;
      let r1 = (charge1 * charge2) / (distance * distance);
      res = k * r1;
      setResult(res);
      setShowSolution(true);
      }else{
        setShowModal(true)
      }
    };

    const insertValues = `[(${constant["coulomb_constant"]} * ${charge1}${SI["Charge1"]} * ${charge2}${SI["Charge2"]}) / (${distance}${SI["Distance"]})²]`;
    const constants = ["coulomb_constant"];

    const givenValues = {
      Charge1:charge1,
      Charge2:charge2,
      Distance:distance,
    };

    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Charge 1 (q1)</Form.Label>
            <Form.Control
              onChange={(e) => setCharge1(e.target.value)}
              type="number"
              placeholder="Enter in coulomb"
              value={charge1 === null ? "" : charge1}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Charge 2 (q2)</Form.Label>
            <Form.Control
              onChange={(e) => setCharge2(e.target.value)}
              type="number"
              placeholder="Enter in coulomb"
              value={charge2 === null ? "" : charge2}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Distance of separation (r)</Form.Label>
            <Form.Control
              onChange={(e) => setDistance(e.target.value)}
              type="number"
              placeholder="Enter in (m)"
              value={distance === null ? "" : distance}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Coulomb constant(k)</Form.Label>
            <Form.Control
              // type="number"
              readOnly
              placeholder={"8.99 * 10⁹ N m²/C²"}
            />
          </Form.Group>

          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="k[(q1*q2)/r²]"
              toFind="Force"
              insertValues={insertValues}
              result={result}
              constants={constants}
            />
          </Form.Group>
        ) : null}

          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " N"}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  //Resistivity Calculator
  const ResistivityCalculator = () => {
    const [resistance, setResistance] = useState(null);
    const [length, setLength] = useState(null);
    const [area, setArea] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const calcResult = () => {
      if(length!==null && area!==null && resistance !== null){
      let res;
      res = (resistance * area) / length;
      setResult(res);
      setShowSolution(true);
    }else {
      setShowModal(true)
    }

    };
    const reset = () => {
      setResistance(null);
      setLength(null);
      setArea(null);
      setResult(null);
      setShowSolution(false);
    };

    const givenValues = {
      Length: length,
      Area: area,
      Resistance: resistance,
    };

    const insertValues = `(${resistance}${SI["Resistance"]} * ${area}${SI["Area"]}) / ${length}${SI["Length"]}`;

    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Resistance (R)</Form.Label>
            <Form.Control
              onChange={(e) => setResistance(e.target.value)}
              type="number"
              placeholder="Enter in ohm (Ω)"
              value={resistance === null ? "" : resistance}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Area (A)</Form.Label>
            <Form.Control
              onChange={(e) => setArea(e.target.value)}
              type="number"
              placeholder="Enter in (m²)"
              value={area === null ? "" : area}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Length (l)</Form.Label>
            <Form.Control
              onChange={(e) => setLength(e.target.value)}
              type="number"
              placeholder="Enter in (m)"
              value={length === null ? "" : length}
            />
          </Form.Group>

          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="ρ=RA/l"
              toFind="Resistivity"
              insertValues={insertValues}
              result={result}
            />
          </Form.Group>
        ) : null}

          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " Ω⋅m"}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  //Ohm's Law
  const OhmCalculator = () => {
    const [choice, setChoice] = useState("voltage");
    const [voltage, setVoltage] = useState(null);
    const [current, setCurrent] = useState(null);
    const [resistance, setResistance] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const calcResult = () => {
      let res;
      if (choice === "voltage" && current !==null && resistance!==null) {
        res = current * resistance;
        setShowSolution(true);
      }
      else if (choice === "current" && voltage !==null && resistance!==null) {
        res = voltage / resistance;
        setShowSolution(true);
      }
      else if (choice === "resistance" && current !==null && voltage!==null) {
        res = voltage / current;
        setShowSolution(true);
      }else {
        setShowModal(true)
      }
      setResult(res);
    };

    const givenValues = () => {
      if (choice === "voltage")
        return {
      Current:current,
      Resistance:resistance,
    };
    else if( choice === "current")
    return{
      Voltage:voltage,
      Resistance:resistance,
    };
    else
    return{
      Current:current,
      Voltage:voltage,
    }
    };

    const reset = () => {
      setCurrent(null);
      setVoltage(null);
      setResistance(null);
      setResult(null);
      setShowSolution(false);
    };

    const handleChange = (e) => {
      setChoice(e.target.value);
      setCurrent(null);
      setResistance(null);
      setVoltage(null);
    };

    const insertValues = () => {
      if (choice === "voltage")
        return `${current}${SI["current"]} * ${resistance}${SI["Resistance"]}`;
      else if(choice === "current")
      return `${voltage}${SI["voltage"]} / ${resistance}${SI["Resistance"]}`;
      else
      return `${voltage}${SI["voltage"]} / ${current}${SI["current"]}`;
    }

    const choiceData = () => {
      if (choice === "voltage")
        return {
          name: "Voltage",
          mainunit: "Volt",
          formula: "IR",
          quantities: ["Current", "Resistance"],
          subunits: ["A", "ohm"],
          getters: [current, resistance],
          setters: [setCurrent, setResistance],
        };
      if (choice === "current")
        return {
          name: "Current",
          mainunit: "A",
          formula: "V/R",
          quantities: ["Voltage", "Resistance"],
          subunits: ["Volt", "ohm"],
          getters: [voltage, resistance],
          setters: [setVoltage, setResistance],
        };
      if (choice === "resistance")
        return {
          name: "Resistance",
          mainunit: "ohm",
          formula: "V/I",
          quantities: ["Voltage", "Current"],
          subunits: ["Volt", "I"],
          getters: [voltage, current],
          setters: [setVoltage, setCurrent],
        };
    };
    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        {/* <Navbar/> */}
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option value="voltage">Voltage (V)</option>
              <option value="current">Current (I)</option>
              <option value="resistance">Resistance (R)</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                {" "}
                To find the {choiceData().name}, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[0]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[0](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[0]}
              value={
                choiceData().getters[0] === null ? "" : choiceData().getters[0]
              }
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[1]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[1](e.target.value)}
              type="number"
              placeholder={
                choiceData().subunits[1] === "NaN"
                  ? "No Unit"
                  : "Enter in " + choiceData().subunits[1]
              }
              value={
                choiceData().getters[1] === null ? "" : choiceData().getters[1]
              }
            />
          </Form.Group>
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues()}
              formula={choiceData().formula}
              toFind={choiceData().name}
              insertValues={insertValues()}
              result={result}
            />
          </Form.Group>
        ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === null
                  ? "Result"
                  : result + " " + choiceData().mainunit
              }
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  //Time period
  const Timeperiod = () => {
    const [choice, setChoice] = useState("Time");
    const [mass, setMass] = useState(null);
    const [charge, setCharge] = useState(null);
    const [magnet, setMagnet] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const calcResult = () => {
      let res;
      if (choice === "Time" && mass!==null & charge!==null && magnet!==null) {
        res = (2 * Math.PI * mass) / (charge * magnet);
        setShowSolution(true);
      }
      else if (choice === "Frequency" && mass!==null & charge!==null && magnet!==null) {
        res = (charge * magnet) / (2 * Math.PI * mass);
        setShowSolution(true);
      }else {
        setShowModal(true)
      }
      setResult(res);
    };

    const givenValues = () => {
      if (choice === "Time")
        return {
      Mass:mass,
      Charge:charge,
      Magnetic_Field:magnet,
    };
    else
    return{
      Mass:mass,
      Charge:charge,
      Magnetic_Field:magnet,
    };
    };

    const insertValues = () => {
      if (choice === "Time")
        return `2 * π * ${mass}${SI["mass"]} / (${charge}${SI["charge"]} * ${magnet}${SI["magnet"]})`;
      else
      return `${charge}${SI["charge"]} * ${magnet}${SI["magnet"]} / (2 * π *${mass}${SI["mass"]})`;
    }

    const reset = () => {
      setMass(null);
      setCharge(null);
      setMagnet(null);
      setResult(null);
      setShowSolution(false);
    };

    const handleChange = (e) => {
      setChoice(e.target.value);
      setMass(null);
      setCharge(null);
      setMagnet(null);
    };
    const choiceData = () => {
      if (choice === "Time")
        return {
          name: "Time Period",
          mainunit: "s",
          formula:"2πm/(qB)",
          quantities: ["Mass", "Charge", "Magnetic field"],
          subunits: ["kg", "C", "Tesla"],
          getters: [mass, charge, magnet],
          setters: [setMass, setCharge, setMagnet],
        };
      if (choice === "Frequency")
        return {
          name: "Frequency",
          mainunit: "s⁻¹",
          formula:"qB/(2πm)",
          quantities: ["Mass", "Charge", "Magnetic field"],
          subunits: ["kg", "C", "Tesla"],
          getters: [mass, charge, magnet],
          setters: [setMass, setCharge, setMagnet],
        };
    };
    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        {/* <Navbar/> */}
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option value="Time">Time period (s)</option>
              <option value="Frequency">Frequency (s⁻¹)</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                {" "}
                To find the {choiceData().name}, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[0]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[0](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[0]}
              value={
                choiceData().getters[0] === null ? "" : choiceData().getters[0]
              }
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[1]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[1](e.target.value)}
              type="number"
              placeholder={
                choiceData().subunits[1] === "NaN"
                  ? "No Unit"
                  : "Enter in " + choiceData().subunits[1]
              }
              value={
                choiceData().getters[1] === null ? "" : choiceData().getters[1]
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[2]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[2](e.target.value)}
              type="number"
              placeholder={
                choiceData().subunits[2] === "NaN"
                  ? "No Unit"
                  : "Enter in " + choiceData().subunits[2]
              }
              value={
                choiceData().getters[2] === null ? "" : choiceData().getters[2]
              }
            />
          </Form.Group>
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues()}
              formula={choiceData().formula}
              toFind={choiceData().name}
              insertValues={insertValues()}
              result={result}
            />
          </Form.Group>
        ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === null
                  ? "Result"
                  : result + " " + choiceData().mainunit
              }
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  //Drift velocity
  const DriftVelocity = () => {
    const [area, setArea] = useState(null);
    const [current, setCurrent] = useState(null);
    const [number, setNumber] = useState(null);
    const [charge, setCharge] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const reset = () => {
      setCurrent(null);
      setNumber(null);
      setCharge(null);
      setResult(null);
      setArea(null);
      setShowSolution(false);

    };
    const calcResult = () => {
      if(current!==null && number!==null && charge!==null && area!==null){
      let res;
      res = current / (number * area * charge);
      setResult(res);
      setShowSolution(true);
      }else {
        setShowModal(true)
      }
    };

    const givenValues = {
      Number:number,
      Charge:charge,
      Area:area,
      Current:current,
    };

    const insertValues = `[(${current}${SI["current"]}) / (${number}${SI["number"]} * ${area}${SI["area"]} * ${charge}${SI["charge"]})]`;

    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Current (I)</Form.Label>
            <Form.Control
              onChange={(e) => setCurrent(e.target.value)}
              type="number"
              placeholder={"Enter in Ampere"}
              value={current === null ? "" : current}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Area (A)</Form.Label>
            <Form.Control
              onChange={(e) => setArea(e.target.value)}
              type="number"
              placeholder={"Enter in (m²)"}
              value={area === null ? "" : area}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Number of electrons (n)</Form.Label>
            <Form.Control
              onChange={(e) => setNumber(e.target.value)}
              type="number"
              placeholder={"Enter number of electrons"}
              value={number === null ? "" : number}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Charge (q)</Form.Label>
            <Form.Control
              onChange={(e) => setCharge(e.target.value)}
              type="number"
              placeholder={"Enter in coulomb"}
              value={charge === null ? "" : charge}
            />
          </Form.Group>

          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="I/nAq"
              toFind="Drift Velocity"
              insertValues={insertValues}
              result={result}
            />
          </Form.Group>
        ) : null}

          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " m/s"}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  //Self inductance
  const SelfInductance = () => {
    const [current, setCurrent] = useState(null);
    const [number, setNumber] = useState(null);
    const [flux, setFlux] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const reset = () => {
      setCurrent(null);
      setNumber(null);
      setFlux(null);
      setResult(null);
      setShowSolution(false);
    };

    const givenValues = {
      Current: current,
      Number: number,
      Magnetic_Flux:flux,
    };

    const insertValues = `(${number}${SI["number"]} * ${flux}${SI["Magnetic_Flux"]}) / ${current}${SI["current"]}`;

    const calcResult = () => {
      if(current!==null && number!==null && flux !== null){
      let res;
      res = (number * flux) / current;
      setResult(res);
      setShowSolution(true);
      }else {
        setShowModal(true)
      }
    };
    return (
      <>
       <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Number of turns(N)</Form.Label>
            <Form.Control
              onChange={(e) => setNumber(e.target.value)}
              type="number"
              placeholder={"Enter number of turns"}
              value={number === null ? "" : number}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Magnetic fux(Φ)</Form.Label>
            <Form.Control
              onChange={(e) => setFlux(e.target.value)}
              type="number"
              placeholder={"Enter in weber"}
              value={flux === null ? "" : flux}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Current(I)</Form.Label>
            <Form.Control
              onChange={(e) => setCurrent(e.target.value)}
              type="number"
              placeholder={"Enter in ampere"}
              value={current === null ? "" : current}
            />
          </Form.Group>
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="NΦ/I"
              toFind="Self Inductance"
              insertValues={insertValues}
              result={result}
            />
          </Form.Group>
        ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " Henry"}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };
  //Induced EMF Calculator (Faraday's Law)
  const InducedEmfCalculator = () => {
    const [turns, setTurns] = useState(null);
    const [flux, setFlux] = useState(null);
    const [time, setTime] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const reset = () => {
      setTurns(null);
      setFlux(null);
      setTime(null);
      setResult(null);
      setShowSolution(false);
    };

    const calcResult = () => {
      if(turns!==null && flux!==null && time!==null){
      let res;
      res = -turns * (flux / time);
      setResult(res);
      setShowSolution(true);
    }else{
      setShowModal(true)
    }
    };

    const givenValues = {
      Turns: turns,
      Flux: flux,
      Time: time,
    };

    const insertValues = `- ${turns}${SI["number"]} * (${flux}${SI["flux"]} / ${time}${SI["time"]})`;

    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Number of Turns(N)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setTurns(e.target.value);
              }}
              placeholder="Enter the number of turns"
              value={turns === null ? "" : turns}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Change in Flux(ΔΦ)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setFlux(e.target.value);
              }}
              placeholder="Enter the change in flux(Wb)"
              value={flux === null ? "" : flux}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Change in Time(Δt)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setTime(e.target.value);
              }}
              placeholder="Enter the change in time(s)"
              value={time === null ? "" : time}
            />
          </Form.Group>
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="-N * (ΔΦ /Δt)"
              toFind="Induced EMF"
              insertValues={insertValues}
              result={result}
            />
          </Form.Group>
        ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : `${result} Volts`}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  //EMF Calculator
  const EmfCalculator = () => {
    const [velocity, setVelocity] = useState(null);
    const [magnetic, setMagnetic] = useState(null);
    const [length, setLength] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const reset = () => {
      setVelocity(null);
      setMagnetic(null);
      setLength(null);
      setResult(null);
      setShowSolution(false);
    };

    const calcResult = () => {
      if(velocity!==null && magnetic!==null && length!==null){
      let res;
      res = -(velocity * magnetic * length);
      setResult(res);
      setShowSolution(true);
      }else{
        setShowModal(true);
      }
    };

      const givenValues = {
        Velocity: velocity,
        Magnetic_Field: magnetic,
        Length: length,
      };

      const insertValues = `- ${magnetic}${SI["Magnetic_Field"]} * ${velocity}${SI["Velocity"]} * ${length}${SI["Length"]}`;

    
    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Magnetic Field(B)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setMagnetic(e.target.value);
              }}
              placeholder="Enter the magnetic field in weber"
              value={magnetic === null ? "" : magnetic}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Velocity(V)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setVelocity(e.target.value);
              }}
              placeholder="Enter velocity in m/s"
              value={velocity === null ? "" : velocity}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Length(l)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setLength(e.target.value);
              }}
              placeholder="Enter the length of conductor in m"
              value={length === null ? "" : length}
            />
          </Form.Group>

          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="-Bvl"
              toFind="Motional EMF"
              insertValues={insertValues}
              result={result}
            />
          </Form.Group>
        ) : null}

          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : `${result} Volts`}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  // EnergyOfInductor
  const EnergyOfInductor = () => {
    const [magneticfeild, setmagneticfeild] = useState(null);
    // const [Permeability, setPermeability] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const reset = () => {
      setmagneticfeild(null);
      // setPermeability(null)
      setResult(null);
      setShowSolution(false);
    };
    const calcResult = () => {
      if(magneticfeild!==null){
      let res;
      res =
        (magneticfeild * magneticfeild) / (2 * 4 * Math.PI * Math.pow(10, -7));
      setResult(res);
      setShowSolution(true);
    }else{
      setShowModal(true)
    }
    };

    const givenValues = {
      Magnetic_Field: magneticfeild,
    };

    const insertValues = `(${magneticfeild}${SI["MagneticField"]})² / (2 * ${constant["Magnetic_Permeability"]})`;
    const constants = ["Magnetic_Permeability"];

    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Magnetic Field(B)</Form.Label>
            <Form.Control
              onChange={(e) => setmagneticfeild(e.target.value)}
              type="number"
              placeholder={"Enter in Tesla"}
              value={magneticfeild === null ? "" : magneticfeild}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Magnetic Permeability(μ₀)</Form.Label>
            <Form.Control
              className="permeability"
              readOnly={true}
              placeholder={"4π*10⁻⁷ Henry/m"}
            />
          </Form.Group>
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="B²/2μ₀"
              toFind="Energy Density Of Inductor"
              insertValues={insertValues}
              result={result}
              constants={constants}
            />
          </Form.Group>
        ) : null}

          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === null ? "Result" : result + " joules per cubic metre"
              }
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  // power factor
  const Power_factorCalculator = () => {
    const [resistance, setResistance] = useState(null);
    const [inductance, setInductance] = useState(null);
    const [capacitive, setCapacitive] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const reset = () => {
      setResistance(null);
      setInductance(null);
      setCapacitive(null);
      setResult(null);
      setShowSolution(false);
    };

    const calcResult = () => {
      if(resistance!==null && inductance!==null && capacitive!==null){
      let res;
      let r = Math.pow(resistance, 2);
      let i = Math.pow(inductance - capacitive, 2);
      let sum = parseInt(r) + parseInt(i);
      let impedance = Math.sqrt(sum);
      res = resistance / impedance;
      setResult(res);
      setShowSolution(true);
      }else{
        setShowModal(true)
      }
    };

    const givenValues = {
     Resistance: resistance,
     Capacitive:capacitive,
     Inductive:inductance,
    };

    const insertValues = `${resistance}${SI["Resistance"]} / (√((${resistance}${SI["Resistance"]})² + (${inductance}${SI["inductance"]} - ${capacitive}${SI["Capacitive"]})²))`;

    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Resistance(R)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setResistance(e.target.value);
              }}
              placeholder="Enter the resistance of the circuit in Ω"
              value={resistance === null ? "" : resistance}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Inductive reactance (XL)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setInductance(e.target.value);
              }}
              placeholder="Enter Inductive reactance in Ω"
              value={inductance === null ? "" : inductance}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Capacitive reactance (Xc)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setCapacitive(e.target.value);
              }}
              placeholder="Enter Capacitive reactance in Ω"
              value={capacitive === null ? "" : capacitive}
            />
          </Form.Group>
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="R/√(R²+(XL - Xc)²)"
              toFind="Power Factor"
              insertValues={insertValues}
              result={result}
            />
          </Form.Group>
        ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : `${result}`}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  // Magnetic Force
  const MagneticForce = () => {
    const [charge, setCharge] = useState(null);
    const [speed, setSpeed] = useState(null);
    const [magneticfield, setMagneticfield] = useState(null);
    const [theta, setTheta] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const reset = () => {
      setCharge(null);
      setSpeed(null);
      setMagneticfield(null);
      setTheta(null);
      setResult(null);
      setShowSolution(false);
    };
    const calcResult = () => {
      if(charge!==null && speed!==null && magneticfield!==null && theta!==null){
      let res;
      res = charge * speed * magneticfield * Math.sin(theta * (Math.PI / 180));
      setResult(res);
      setShowSolution(true);
      }else{
        setShowModal(true)
      }
    };

    const givenValues = {
      Charge:charge,
      Speed:speed,
      Magnetic_Field:magneticfield,
      Theta:theta,
    };

    const insertValues = `${charge}${SI["charge"]} * ${speed}${SI["speed"]} * ${magneticfield}${SI["MagneticField"]} * sin(${theta}${SI["theta"]})`;

    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Charge (q)</Form.Label>
            <Form.Control
              onChange={(e) => setCharge(e.target.value)}
              type="number"
              placeholder={"Enter in coulomb"}
              value={charge === null ? "" : charge}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Speed (v)</Form.Label>
            <Form.Control
              onChange={(e) => setSpeed(e.target.value)}
              type="number"
              placeholder={"Enter in m/s"}
              value={speed === null ? "" : speed}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Magnetic field (B)</Form.Label>
            <Form.Control
              onChange={(e) => setMagneticfield(e.target.value)}
              type="number"
              placeholder={"Enter in tesla"}
              value={magneticfield === null ? "" : magneticfield}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Theta (θ)</Form.Label>
            <Form.Control
              onChange={(e) => setTheta(e.target.value)}
              type="number"
              placeholder={"Enter in degrees"}
              value={theta === null ? "" : theta}
            />
          </Form.Group>
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="qvBsin(θ)"
              toFind="Magnetic Force"
              insertValues={insertValues}
              result={result}
            />
          </Form.Group>
        ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " Newtons"}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  // Gauss Law
  const GaussLaw = () => {
    const [charge, setCharge] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const e = 8.854187817 * Math.pow(10, -12);

    const reset = () => {
      setCharge(null);
      setResult(null);
      setShowSolution(false);
    };

    const calcResult = () => {
      if(charge!==null){
      let res;
      res = charge / e;
      setResult(res);
      setShowSolution(true);
      }else{
        setShowModal(true)
      }
    };

    const givenValues = {
      Charge: charge,
    };

    const insertValues = `${charge}${SI["Charge"]} / ${constant["Vacuum_permittivity"]}`;
    const constants = ["Vacuum_permittivity"];

    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Total Charge Enclosed (Q)</Form.Label>
            <Form.Control
              onChange={(e) => setCharge(e.target.value)}
              type="number"
              placeholder={"Enter charge in coulombs"}
              value={charge === null ? "" : charge}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Vacuum permittivity (ε₀)</Form.Label>
            <Form.Control
              readOnly
              // type="number"
              placeholder={"8.854 * 10⁻¹² F.m⁻¹"}
            />
          </Form.Group>
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="Q/ε₀"
              toFind="Electric Flux"
              insertValues={insertValues}
              result={result}
              constants={constants}
            />
          </Form.Group>
        ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " Nm²/C"}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  const calC = (key) => {
    let currentCall;
    switch (key) {
      case "Coulomb's law":
        currentCall = CoulombCalculator();
        break;
      case "Ohm's Law":
        currentCall = OhmCalculator();
        break;
      case "Resistivity":
        currentCall = ResistivityCalculator();
        break;
      case "Drift Velocity":
        currentCall = DriftVelocity();
        break;
      case "Self Inductance":
        currentCall = SelfInductance();
        break;
      case "Motional EMF":
        currentCall = EmfCalculator();
        break;
      case "Faraday's Law":
        currentCall = InducedEmfCalculator();
        break;
      case "Time period":
        currentCall = Timeperiod();
        break;
      case "Power Factor":
        currentCall = Power_factorCalculator();
        break;
      case "Energy Density Of Inductor":
        currentCall = EnergyOfInductor();
        break;
      case "Magnetic Force":
        currentCall = MagneticForce();
        break;
      case "Gauss Law":
        currentCall = GaussLaw();
        break;
      default:
        break;
    }
    return currentCall;
  };

  //Electric field
  if (details.topic === "Electric Field") {
    return (
      <div className="mech__main">
        <div className="mech__header">
          <h1>Electric field</h1>
        </div>
        <div className="mech__topics-card">
          {electricfield_data.map((data) => (
            <React.Fragment key={data.topic}>
              <Link
                to={`/electromagnetism/calc/electric_field/${data.topic}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  className="a"
                  key={data.topic}
                  style={{
                    width: "18rem",
                    color: "black",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  <Card.Body>
                    <div> {data.topic}</div>
                  </Card.Body>
                </Card>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  } else if (details.topic === "Magnetic field") {
    return (
      <div className="mech__main">
        <div className="mech__header">
          <h1>Magnetic field</h1>
        </div>
        <div className="mech__topics-card">
          {magneticfield_data.map((data) => (
            <React.Fragment key={data.topic}>
              <Link
                to={`/electromagnetism/calc/magnetic_field/${data.topic}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  className="a"
                  key={data.topic}
                  style={{
                    width: "18rem",
                    color: "black",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  <Card.Body>
                    <div> {data.topic}</div>
                  </Card.Body>
                </Card>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  } else if (details.topic === "Electric Potential") {
    return (
      <div className="mech__main">
        <div className="mech__header">
          <h1>Electric Potential</h1>
        </div>
        <div className="mech__topics-card">
          {electricpotential_data.map((data) => (
            <React.Fragment key={data.topic}>
              <Link
                to={`/electromagnetism/calc/electric_potential/${data.topic}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  className="a"
                  key={data.topic}
                  style={{
                    width: "18rem",
                    color: "black",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  <Card.Body>
                    <div> {data.topic}</div>
                  </Card.Body>
                </Card>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  } else if (details.topic === "Flux") {
    return (
      <div className="mech__main">
        <div className="mech__header">
          <h1>Flux</h1>
        </div>
        <div className="mech__topics-card">
          {flux_data.map((data) => (
            <React.Fragment key={data.topic}>
              <Link
                to={`/electromagnetism/calc/Flux/${data.topic}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  className="a"
                  key={data.topic}
                  style={{
                    width: "18rem",
                    color: "black",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  <Card.Body>
                    <div> {data.topic}</div>
                  </Card.Body>
                </Card>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <Navbar />
        <div className="Calculator__main">
          <Helmet>
            <title>{details.topic}</title>
            <meta
              name="description"
              content={details.details}
              data-react-helmet="true"
            />
            <meta
              name="keywords"
              content="Electromagnetism, calculator, physics, Tech n science, technscience, tech and science"
            />
          </Helmet>
          <div className="Calculator__header">
            <h1>{details.topic}</h1>
          </div>
          <div className="Calculator__details">
            <p>{details.details}</p>
          </div>
          <div className="Calculator__formula">
            <h3>Working Formula:</h3>
            <h3>{details.formula}</h3>
            <h3>S.I. Unit : {details.siunit}</h3>
            <h3>Dimension : {details.dimension}</h3>
          </div>
          <div className="Calculator__process">
            <h3> Process</h3>
            <p>{details.process}</p>
          </div>
          <div className="Calculator__calc">
            <h3>{details.topic} Calculator</h3>
            <hr />
            {calC(details.topic)}
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default calculator;
