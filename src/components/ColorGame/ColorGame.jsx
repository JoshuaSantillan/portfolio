import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './ColorGame.css'
function ColorGame() {
  const [numSquares, setNumSquares] = useState(6);
  const [colors, setColors] = useState([]);
  const [pickedColor, setPickedColor] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const newColors = generateRandomColors(numSquares);
    setColors(newColors);
    setPickedColor(pickColor());
    setMessage('');
  }, []);
  


  const pickColor = () => {
    const random = Math.floor(Math.random() * colors.length)
    return colors[random];
  };

  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
  };

  const generateRandomColors = (num) => {
    let output = [];
    for (let i = 0; i < num; i++) {
      output.push(generateRandomColor())
    }
    return output;
  };

  const reset = () => {
    const newColors = generateRandomColors(numSquares);
    setColors(newColors);
    setPickedColor(pickColor());
    setMessage('');
  };

  const handleSquareClick = (color) => {
    if (color === pickedColor) {
      setMessage("Nice job!");
      setColors(Array(numSquares).fill(color));
    } else {
      setMessage("Sorry, Try Again");
      setColors(colors.map(c => c === color ? 'black' : c));
    }
  };

  const handleDifficultyChange = (difficulty) => {
    if (difficulty === "Easy") setNumSquares(3);
    else if (difficulty === "Hard") setNumSquares(6);
    else setNumSquares(9);
  };

  return (
    <Container fluid className="p-3 bg-dark text-white">
      <h1 className="text-center">
        Pick The Correct <br />
        <span id="colorDisplay">{pickedColor}</span>
        <br />
        Color Game
      </h1>
  
      <Row className="justify-content-center my-2">
        <Col xs="auto">
          <Button onClick={reset} className="mode">New Colors</Button>
        </Col>
        <Col xs="auto">
          <Button className="mode" onClick={() => handleDifficultyChange('Easy')} variant="info">Easy</Button>
        </Col>
        <Col xs="auto">
          <Button className="mode" onClick={() => handleDifficultyChange('Hard')} variant="info">Hard</Button>
        </Col>
        <Col xs="auto">
          <Button className="mode" onClick={() => handleDifficultyChange('Very Hard')} variant="info">Very Hard</Button>
        </Col>
      </Row>
  
      <p className="text-center" id="message">{message}</p>
  
      <Row id="stripe">
        {colors.map((color, i) => (
          <Col xs={4} md={2} key={i} className="square">
            <div
              style={{ backgroundColor: color, height: '100px', borderRadius: '100%' }}
              onClick={() => handleSquareClick(color)}
            ></div>
          </Col>
        ))}
      </Row>
    </Container>
  );  
};

export default ColorGame;
