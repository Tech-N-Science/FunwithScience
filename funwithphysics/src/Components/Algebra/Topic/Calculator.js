import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Navbar from '../../Navbar/Navbar';

function Calculator({ match }) {
  // topics_data
  const Topics = [
    {
      topic: 'Permutation',
      details: `A permutation of a set is a loosely defined organisation of its members into a sequence or linear order, or a rearranging of its elements if the set is already sorted.
      The word "permutation" also refers to the act or process of changing the linear order of an ordered set.`,
      formula: 'nPr = n!/(n-r)!',
      process: [
        'To find the permutation, first we need to find the value of n factorial and n - r factorial, then we need to devide them.',
        <br />,
        <b>E.g. </b>,
        <span>
          10<b style={{ fontSize: 25 + 'px' }}>P</b>5 = 10!/(10-5)! = 30240
        </span>,
      ],
    },
    {
      topic: 'Combination',
      details: `A combination is a mathematical technique for determining the number of possible arrangements in a group of objects where the order of the items is irrelevant. Selecting r objects out of the given n objects is given by using the factorials. It is denoted by nCr.`,
      formula: 'C = n!/r!(n-r)!',
      process: [
        'To calculate combinations, we will use the formula nCr = n! / (r! * (n - r)!), where n represents the number of items, and r represents the number of items being chosen at a time.',
        <br />,
        <b>E.g. </b>,
        <span>
          10<b style={{ fontSize: 25 + 'px' }}>C</b>5 = 10!/5!(10-5)! = 252
        </span>,
      ],
    },
    {
      topic: 'Progression',
      details: [
        `An Arithmetic Progression is a sequence of numbers in which the difference between any two subsequent terms is always the same.`,
        <br />,
        <br />,
        'If the ratio of two consecutive terms is always the same, the sequence of numbers is denoted as a Geometric Progression.',
      ],
      formula: ['AP = a + d * (n-1)', <br />, 'GP = a * r ^ (n-1)'],
      process: [
        <b>E.g. </b>,
        '2,4,6,8.. is an AP because difference between any two consecutive terms in the series (common difference) is same (4 – 2 = 6 – 4 = 8 – 6 = 2).',
        <br />,
        'If ‘a’(2) is the first term and ‘d’(2) is the common difference,',
        <br />,
        'nth term of an AP = a + (n-1) d',
        <br />,
        '5th term of the AP = 2 + (5-1) * 2 = 10',
        <br />,
        <b>E.g. </b>,
        '2,4,8,16 is a GP because ratio of any two consecutive terms in the series (common difference) is same (4 / 2 = 8 / 4 = 16 / 8 = 2)',
        <br />,
        'If ‘a’(2) is the first term and ‘r’(2) is the common ratio,',
        <br />,
        'nth term of a GP = a rn-1',
        <br />,
        '5th term of the GP = 2 * 2 ^ (5-1) = 32',
        <br />,
      ],
    },
  ];

  const page = Topics.filter((data) => data.topic === match.params.topic);
  const details = page[0];

  //Permutationcalculator
  const Permutation = () => {
    const [n, setn] = useState(null);
    const [r, setr] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setn(null);
      setr(null);
      setResult(null);
    };
    function factorial(num) {
      if (num === 0) {
        return 1;
      }
      return num * factorial(num - 1);
    }
    const calcPermutation = () => {
      let permutation = factorial(n) / factorial(n - r);
      setResult(permutation);
    };

    return (
      <>
        <Form>
          <Form.Group className='mb-4' controlId='text'>
            <Form.Text className='text'>
              <strong>
                {' '}
                To find the Permutation, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label>Value in a Set (n)</Form.Label>
            <Form.Control
              onChange={(e) => setn(e.target.value)}
              type='number'
              placeholder={'Enter the value of n'}
              value={n === null ? '' : n}
            />
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label>Value in Sub-Set (r)</Form.Label>
            <Form.Control
              onChange={(e) => setr(e.target.value)}
              type='number'
              placeholder={'Enter the value of r'}
              value={r === null ? '' : r}
            />
          </Form.Group>

          <Form.Group className='mb-4'>
            <Form.Control
              readOnly
              type='number'
              placeholder={result === null ? 'Result' : result + ' '}
            />
          </Form.Group>
        </Form>
        <div className='button-custom-grp'>
          <Button variant='primary' onClick={calcPermutation}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant='dark' onClick={() => reset()} type='reset'>
            Reset
          </Button>
        </div>
      </>
    );
  };
  //Combination
  const Combination = () => {
    const [n, setn] = useState(null);
    const [r, setr] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setn(null);
      setr(null);
      setResult(null);
    };
    function factorial(num) {
      if (num === 0) {
        return 1;
      }
      return num * factorial(num - 1);
    }
    const calcCombination = () => {
      let Combination = factorial(n) / (factorial(r) * factorial(n - r));
      setResult(Combination);
    };

    return (
      <>
        <Form>
          <Form.Group className='mb-4' controlId='text'>
            <Form.Text className='text'>
              <strong>
                {' '}
                To find the Permutation, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label>Value in a Set (n)</Form.Label>
            <Form.Control
              onChange={(e) => setn(e.target.value)}
              type='number'
              placeholder={'Enter the value of n'}
              value={n === null ? '' : n}
            />
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label>Value in Sub-Set (r)</Form.Label>
            <Form.Control
              onChange={(e) => setr(e.target.value)}
              type='number'
              placeholder={'Enter the value of r'}
              value={r === null ? '' : r}
            />
          </Form.Group>

          <Form.Group className='mb-4'>
            <Form.Control
              readOnly
              type='number'
              placeholder={result === null ? 'Result' : result + ' '}
            />
          </Form.Group>
        </Form>
        <div className='button-custom-grp'>
          <Button variant='primary' onClick={calcCombination}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant='dark' onClick={() => reset()} type='reset'>
            Reset
          </Button>
        </div>
      </>
    );
  };

  //Pogression Calculator - AP/GP
  const Progression = () => {
    const [result, setResult] = useState(null);
    const [choice, setChoice] = useState('AP');
    const [n, setN] = useState(null);
    const [fr, setFR] = useState(null);
    const [nth, setNth] = useState(null);
    const [sum, setSum] = useState(null);
    function handleChange(e) {
      reset();
      setChoice(e.target.value);
      choiceData();
    }
    const calcResult = () => {
      let res, s;
      if (choice === 'AP') {
        res = Number(n) + Number(fr * (nth - 1));
        s = (nth / 2) * (Number(2 * n) + Number(fr * (nth - 1)));
      } else if (choice === 'GP') {
        res = Number(n) * Number(fr ** (nth - 1));
        s = (n * (fr ** nth - 1)) / (fr - 1);
      }
      setResult(res);
      setSum(s);
    };
    function reset() {
      setResult(null);
      setN(null);
      setFR(null);
      setNth(null);
      setSum(null);
    }
    const choiceData = () => {
      if (choice === 'AP')
        return {
          name: 'Arithmetic Progression',
          quantities: ['First Number', 'Common diffrence'],
          disable: true,
        };
      else if (choice === 'GP') {
        return {
          name: 'Geometric Progression',
          quantities: ['First Number', 'Common ratio'],
        };
      }
    };
    return (
      <>
        <Form>
          {/* dropdown */}
          <Form.Group className='mb-4' controlId='choice'>
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control
              as='select'
              className='select-custom-res'
              onChange={(e) => handleChange(e)}
            >
              <option value='AP'>Arethmetic Progression</option>
              <option value='GP'>Geometric Progression</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className='mb-4' controlId='text'>
            <Form.Text className='text'>
              <strong>
                To find the {choiceData().name}, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label>{choiceData().quantities[0]}</Form.Label>
            <Form.Control
              onChange={(e) => setN(e.target.value)}
              type='number'
              placeholder={'Enter the First Number'}
              value={n === null ? '' : n}
            />
          </Form.Group>

          <Form.Group className='mb-4'>
            <Form.Label>{choiceData().quantities[1]}</Form.Label>
            <Form.Control
              onChange={(e) => setFR(e.target.value)}
              type='number'
              placeholder={'Enter the ' + choiceData().quantities[1]}
              value={fr === null ? '' : fr}
            />
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label>nth Number to obtain</Form.Label>
            <Form.Control
              onChange={(e) => setNth(e.target.value)}
              type='number'
              placeholder={'Enter the nth Number to obtain'}
              value={nth === null ? '' : nth}
            />
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label>Number at {nth ? nth : 'nth'} position</Form.Label>
            <Form.Control
              readOnly
              type='number'
              placeholder={result === null ? 'Result' : result}
            />
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label>
              Sum of numbers till {nth ? nth : 'nth'} position
            </Form.Label>
            <Form.Control
              readOnly
              type='number'
              placeholder={sum === null ? 'Result' : sum}
            />
          </Form.Group>
        </Form>
        <div className='button-custom-grp'>
          <Button variant='primary' onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant='dark' onClick={() => reset()} type='reset'>
            Reset
          </Button>
        </div>
      </>
    );
  };

  //adding the calculators togather
  function calC(key) {
    let currentCall;
    switch (key) {
      case 'Permutation':
        currentCall = Permutation();
        break;
      case 'Combination':
        currentCall = Combination();
        break;
      case 'Progression':
        currentCall = Progression();
        break;
      default:
        break;
    }
    return currentCall;
  }
  return (
    <React.Fragment>
      <Navbar />
      <div className='Calculator__main'>
        <Helmet>
          <title>{details.topic}</title>
          <meta name='description' content='{details.details}' />
          <meta
            name='keywords'
            content='Algebra, calculator, Algebra calculator, physics, Tech n science, technscience, tech and science'
          />
        </Helmet>

        <div className='Calculator__header'>
          <h1>{details.topic}</h1>
        </div>
        <div className='Calculator__details'>
          <p>{details.details}</p>
        </div>
        <div className='Calculator__formula'>
          <h3>Working Formula:</h3>
          <h3>{details.formula}</h3>
        </div>
        <div className='Calculator__process'>
          <h3> Process</h3>
          <p>{details.process}</p>
        </div>
        <div className='Calculator__calc'>
          <h3>{details.topic} Calculator</h3>
          <hr />
          {calC(details.topic)}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Calculator;
