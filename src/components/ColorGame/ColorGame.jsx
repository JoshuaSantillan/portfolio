import React, { useState, useEffect, useCallback } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './ColorGame.css'
function ColorGame() {
    const [numSquares, setNumSquares] = useState(6);
    const [colors, setColors] = useState([]);
    const [pickedColor, setPickedColor] = useState('');
    const [message, setMessage] = useState('');
    const [titleColor, setTitleColor] = useState('#072e33');
    const generateRandomColor = useCallback(() => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
  }, []);

  const generateRandomColors = useCallback((num) => {
    let output = [];
    for (let i = 0; i < num; i++) {
      output.push(generateRandomColor())
    }
    return output;
  }, [generateRandomColor]);


  const reset = useCallback(() => {
    const newColors = generateRandomColors(numSquares);
    const newPickedColor = newColors[Math.floor(Math.random() * newColors.length)];
    setColors(newColors);
    setPickedColor(newPickedColor);
    setMessage('');
    setTitleColor('#072e33');
  }, [generateRandomColors, numSquares]);


  useEffect(() => {
    reset();
    // eslint-disable-next-line
  }, [numSquares]);

  const handleSquareClick = (color) => {
    if (color === pickedColor) {
      setMessage("Nice job!");
      setColors(Array(numSquares).fill(color));
      setTitleColor(color);
    } else {
      setMessage("Sorry, Guess Again");
      setColors(colors.map(c => c === color ? '#05161A' : c));
    }
  };

  const handleDifficultyChange = (difficulty) => {
    reset();
    if (difficulty === "Easy") setNumSquares(3);
    else if (difficulty === "Hard") setNumSquares(6);
    else setNumSquares(9);
  };
  return (
    <>
      <div className="color-title text-white" style={{ backgroundColor: titleColor }}>
        <h1 className="text-center color-header">
          Pick The Correct <br />
          <span id="colorDisplay" className="text-nowrap text-flud">{pickedColor}</span>
          <br />
          Color Game
        </h1>
        <Row id="stripe" className="justify-content-center flex-column flex-sm-row" >
          <Col xs="12" sm="auto" className="text-center">
            <Button onClick={reset} className="cg-button btn-sm" variant="info">New Colors</Button>
            <Button className="mode cg-button btn-sm" onClick={() => handleDifficultyChange('Easy')} variant="info">Easy</Button>
            <Button className="mode cg-button btn-sm" onClick={() => handleDifficultyChange('Hard')} variant="info">Hard</Button>
            <Button className="mode cg-button btn-sm" onClick={() => handleDifficultyChange('Very Hard')} variant="info">Very Hard</Button>
          </Col>
        </Row>
        <Row>
          <span id="message">{message}</span>
        </Row>
      </div>

      <Container fluid className="p-2">
        <div className="cg-container">
          {colors.map((color, i) => (
            <div
              key={i}
              className="square"
              style={{ backgroundColor: color }}
              onClick={() => handleSquareClick(color)}
            ></div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default ColorGame;
