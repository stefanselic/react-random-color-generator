import './App.css';
import { useState } from 'react';

export default function App() {
  // Defining state variable
  const [hex, setHex] = useState('#ffffff');

  // randomHex function generates a random hexadecimal
  const randomHex = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Sets the state variable hex to this random color using the setHex function
    setHex(randomColor);
  };
  return (
    // Updates background-color
    <div
      className="App"
      style={{
        backgroundColor: hex,
      }}
    >
      Generated Color: {hex} <br />
      <br />
      <div>
        <br />
        <button onClick={randomHex}>Generate</button>
      </div>
    </div>
  );
}
