import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Card } from 'react-bootstrap';
// import './Relativity.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Algebra() {
  // topics_data
  const Topics = [
    {
      topic: 'Permutation',
      details: `Permutation is an act of arranging the objects or numbers in
        order. Combinations are the way of selecting the objects or
        numbers from a group of objects.`,
      formula: 'P = n!/(n-r)!',
      process:
        'To find the permutation, first we need to find the value of n factorial and n - r factorial, then we need to devide them.',
      siunit: 'Unitless',
      dimension: 'dimmensionless',
    },
    {
      topic: 'Combination',
      details: `Permutation is an act of arranging the objects or numbers in
        order. Combinations are the way of selecting the objects or
        numbers from a group of objects.`,
      formula: 'C = n!/r!(n-r)!',
      process:
        'To find the permutation, first we need to find the value of n factorial and n - r factorial, then we need to devide them.',
      siunit: 'Unitless',
      dimension: 'dimmensionless',
    },
  ];

  return (
    <>
      <Navbar />

      <div className='mech__main'>
        <Helmet>
          <title>Relativity | physics | Tech N Science</title>
          <meta
            name='description'
            content='Explore the Relativity calculator'
          />
          <meta name='keywords' content='Relativity,' />
        </Helmet>
        <div className='mech__header'>
          <h1>Relativity-Topics</h1>
        </div>
        <div className='mech__topics-card'>
          {Topics.map((data) => (
            <React.Fragment key={data.topic}>
              <Card key={data.topic} style={{ width: '18rem' }}>
                <Card.Body>
                  {data.details === undefined ? (
                    <Link
                      className='btn'
                      disabled={true}
                      to={`/algebra/calc/${data.topic}`}
                      variant='outline-dark'
                    >
                      {' '}
                      {data.topic}
                    </Link>
                  ) : (
                    <Link
                      className='btn'
                      to={`/algebra/calc/${data.topic}`}
                      variant='outline-dark'
                    >
                      {' '}
                      {data.topic}
                    </Link>
                  )}
                  <div style={{ padding: '0.3em' }}>
                    {data.details === undefined ? (
                      <Card.Text>
                        {' '}
                        Will be{' '}
                        <span style={{ fontWeight: 'bold', color: '#19165b' }}>
                          available
                        </span>{' '}
                        soon...
                      </Card.Text>
                    ) : (
                      <Card.Text> </Card.Text>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
