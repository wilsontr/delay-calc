import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './App.css';

const App = () => {

  const [tempo, setTempo] = useState(120);
  const [division, setDivision] = useState(1);
  const [delayTime, setDelayTime] = useState(0);

  const handleTempoChange = ({ currentTarget: { value } }) => {
    setTempo(value);
  }

  const handleDivisionChange = ({ currentTarget: { value } }) => {
    setDivision(value);
  }

  const getTempoOptions = () => {
    const options = [];
    for ( let i = 20; i <= 250; i++ ) {
      options.push(<option value={i} key={`option_${i}`}>{i}</option>);
    }
    return options;
  }

  const calcTime = () => {
    const beatTime = 60 / tempo;
    const delayTime = beatTime * division;
    console.log('division', division, 'beatTime', beatTime);
    setDelayTime(delayTime * 1000);
  }

  useEffect(() => {
    calcTime();
  });


  return (
    <div className="App">
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridTempo" className="col-lg-4">
            <Form.Label>Tempo</Form.Label>
            <Form.Control value={tempo} as="select" onChange={handleTempoChange}>
              {getTempoOptions()}
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridDivision" className="col-lg-8">
            <Form.Label>Division</Form.Label>
            <Form.Control as="select" value={division} onChange={handleDivisionChange}>
              <option value="0.25">Sixteenth</option>
              <option value="0.375">Dotted Sixteenth</option>
              <option value="0.5">Eighth</option>
              <option value="0.75">Dotted Eighth</option>
              <option value="1">Quarter</option>
              <option value="1.5">Dotted Quarter</option>
              <option value="2">Half</option>
              <option value="3">Dotted Half</option>
              <option value="4">Whole</option>
              <option value="6">Dotted Whole</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} className="col-sm-12">
            <Form.Label>Delay Time: {delayTime} ms</Form.Label>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
}

export default App;
