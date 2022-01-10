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
        'The sequence of numbers is called a Geometric Progression if the ratio of two subsequent terms is always the same.',
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
    {
      topic: 'Statistics',
      details: `Statistics is the branch of science that studies and develops methods for gathering, analysing, interpreting, and interpreting empirical data.`,
      formula: '',
      process: [
        'To calculate the mean, median and mode, we have to use the formulae giving below',
        <br />,
        <b>E.g. </b>,
        'Numbers given: 20 30 60 20 10 40 80 90',
        <br />,
        'Mean = Sum of all items/Total no. of items = 350/8 = 43.75',
        <br />,
        'Since total number of items is 6(even), Median = (n / 2)th = 3rd item = 30',
        <br />,
        'Mode = 20 (as 20 occured most number of times in the given set of numbers)',
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
  // Statistics calculator
  const Statistics = () => {
    let numArr = [];
    let statOBJ = {
      sort: [],
      count: 0,
      sum: 0,
      largest: 0,
      smallest: 0,
      mean: 0,
      median: 0,
      mode: 0,
    };
    const [number, setNum] = useState(0);
    const [statData, setStatData] = useState(statOBJ);

    const calcStat = () => {
      numArr = number.split(/[\s,]+/);
      numArr = numArr.sort();
      statOBJ.sort = numArr; //sorted numbers
      statOBJ.count = numArr.length; //Number of items
      statOBJ.smallest = numArr[1];
      numArr.map((item, index) => {
        statOBJ.sum += Number(item); //Sum of all items
      });
      statOBJ.largest = numArr[statOBJ.count - 1]; //largest of all items
      statOBJ.smallest = numArr[0]; //smalles of all items
      statOBJ.mean = (statOBJ.sum / statOBJ.count).toFixed(2); //mean or average of all
      let med = 0;
      if (statOBJ.count % 2 === 0) {
        med = statOBJ.count / 2;
      } else {
        med = (statOBJ.count + 1) / 2;
      }
      statOBJ.median = numArr[med - 1]; //median of all items
      let repeatCount = 1;
      let modeIndex = 0;
      let maxRepeat = 0;
      for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] === numArr[i + 1]) {
          repeatCount = repeatCount + 1;
          if (repeatCount > maxRepeat) {
            maxRepeat = repeatCount;
            modeIndex = i;
          }
        } else {
          repeatCount = 0;
        }
      }
      statOBJ.mode = numArr[modeIndex]; //mode of all items
    };
    const resetStat = () => {
      setNum(0);
    };
    return (
      <>
        <Form>
          <Form.Group className='mb-4' controlId='text'>
            <Form.Text className='text'>
              <strong>Enter the following values</strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label>Enter numbers sparated by a space or comma</Form.Label>
            <Form.Control
              onChange={(e) => setNum(e.target.value)}
              type='text'
              placeholder={'Enter the First Number'}
              value={number === 0 ? '' : number}
            />
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label>Sorted Data</Form.Label>
            <Form.Control
              readOnly
              type='number'
              placeholder={
                statData.count === 0
                  ? 'Numbers in ascending order'
                  : statData.sort
              }
            />
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label>Total number of items</Form.Label>
            <Form.Control
              readOnly
              type='number'
              placeholder={statData.count === 0 ? 'Count' : statData.count}
            />
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label>Sum of all the items</Form.Label>
            <Form.Control
              readOnly
              type='number'
              placeholder={statData.sum === 0 ? 'Sum' : statData.sum}
            />
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label>Smallest of all the items</Form.Label>
            <Form.Control
              readOnly
              type='number'
              placeholder={
                statData.smallest === 0 ? 'Smallest' : statData.smallest
              }
            />
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label>Largest of all the items</Form.Label>
            <Form.Control
              readOnly
              type='number'
              placeholder={
                statData.largest === 0 ? 'Largest' : statData.largest
              }
            />
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label>Mean(average) of all the items</Form.Label>
            <Form.Control
              readOnly
              type='number'
              placeholder={statData.mean === 0 ? 'Mean' : statData.mean}
            />
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label>Median of all the items</Form.Label>
            <Form.Control
              readOnly
              type='number'
              placeholder={statData.median === 0 ? 'Median' : statData.median}
            />
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label>Mode of all the items</Form.Label>
            <Form.Control
              readOnly
              type='number'
              placeholder={statData.mode === 0 ? 'Mode' : statData.mode}
            />
          </Form.Group>
        </Form>
        <div className='button-custom-grp'>
          <Button
            variant='primary'
            onClick={() => {
              calcStat();
              setStatData(statOBJ);
            }}
          >
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant='dark' onClick={() => resetStat()} type='reset'>
            Reset
          </Button>
        </div>
        <div className='formula-table mb-4'>
          <table className='formulae'>
            <thead>
              <tr>
                <th className='row-1 row-ID  '>Folmulae used</th>
                <th className='row-2 row-name '></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mean</td>
                <td>
                  <b>Sum of all items/Total no. of items</b>
                </td>
              </tr>
              <tr>
                <td>Median</td>
                <td>
                  <b>
                    if total number of items is odd then [(n + 1) ÷ 2]th
                    otherwise (n ÷2)th{' '}
                  </b>
                </td>
              </tr>
              <tr>
                <td>Mode</td>
                <td>
                  <b>
                    The mode is the value that appears most often in a set of
                    data values
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
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
      case 'Statistics':
        currentCall = Statistics();
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
