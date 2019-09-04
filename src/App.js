import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import './App.css';

const App = () => {

  const [tempo, setTempo] = useState(localStorage.getItem('delayCalcTempo') || 120);
  const [division, setDivision] = useState(localStorage.getItem('delayCalcDivision') || 0.25);
  const [delayTime, setDelayTime] = useState(0);

  const handleTempoChange = ({ currentTarget: { value } }) => {
    setTempo(value);
    localStorage.setItem('delayCalcTempo', value);
  }

  const handleDivisionChange = ({ currentTarget: { value } }) => {
    setDivision(value);
    localStorage.setItem('delayCalcDivision', value);
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

  const formatDelayTime = delayTime => Math.round(delayTime * 10) / 10;

  useEffect(() => {
    calcTime();
  });

  return (
    <div className="App col-lg-8">
      <h1>Delay Time Calculator</h1>
      <p>Older rack effects units, such as the Alesis Quadraverb, lack MIDI sync for their delay effects. I built this tool to
      help calculate ideal delay effect times for a given tempo and note length.</p>
      <Card className="form-card">
        <Form>
          <Form.Row as={Row}>
            <Form.Group as={Col} controlId="formGridTempo" sm={6}>
              <Form.Label className="label">Tempo (bpm)</Form.Label>
              <Form.Control value={tempo} as="select" onChange={handleTempoChange}>
                {getTempoOptions()}
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridDivision" sm={6}>
              <Form.Label className="label">Delay Note Length</Form.Label>
              <Form.Control as="select" value={division} onChange={handleDivisionChange}>
                <option value="0.125">Thirty-second</option>
                <option value="0.1875">Dotted Thirty-second</option>
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
            <Col>
              <Form.Label className="label label-row">Delay time</Form.Label>          
              <Form.Label className="delay-time">{formatDelayTime(delayTime)} ms</Form.Label>          
            </Col>
          </Form.Row>        
        </Form>
      </Card>
      <footer>
        <p className="written-by">Calculator by <a href="https://github.com/wilsontr">Trevor Wilson</a>. <a href="https://github.com/wilsontr/delay-calc">View source</a></p>
      </footer>
    </div>
  );
}

export default App;
