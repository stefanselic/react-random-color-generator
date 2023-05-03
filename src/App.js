import './App.css';
import { useState } from 'react';

export default function App() {
  const [hex, setHex] = useState('#ffffff');
  const randomizedHex = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    setHex(randomColor);
  };
  return (
    <div
      className="App"
      style={{
        backgroundColor: hex,
        minHeight: '33.34vh',
        overflow: 'hidden',
      }}
    >
      <div>
        <br />
        <p id="hex-code">Generated Color: {hex}</p>
        <button onClick={randomizedHex}>Generate</button>
      </div>
    </div>
  );
}
