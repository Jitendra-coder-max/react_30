import React, { useState } from 'react';

// Function to generate a random hex color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Box = () => {
  const [inputValue, setInputValue] = useState(''); // For input value
  const [boxes, setBoxes] = useState(0); // For number of boxes

  const handleClick = () => {
    const numBoxes = parseInt(inputValue) || 0; // Convert inputValue to a number
    setBoxes(numBoxes); // Update the number of boxes
  };

  // Create the array of box elements with random colors
  const boxElements = Array.from({ length: boxes }, (_, index) => (
    <li
      key={index}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: getRandomColor(), // Use random color
        margin: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        listStyleType: 'none',
      }}
    >
      Box {index + 1}
    </li>
  ));

  return (
    <div>
      <h1>Box</h1>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleClick}>Click here</button>

      <ul style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 0,
        margin: 0,
      }}>
        {boxElements}
      </ul>
    </div>
  );
};

export default Box;
