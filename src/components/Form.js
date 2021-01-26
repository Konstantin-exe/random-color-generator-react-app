import { useState } from 'react';
const randomColor = require('randomcolor');

export default function Form(props) {
  const [hue, setHue] = useState('red');
  const [luminosity, setLuminosity] = useState('bright');
  const [hex, setHex] = useState('#000000');

  return (
    <div>
      <label htmlFor="hue">Color</label>
      <select
        onChange={(event) => {
          setHue(event.currentTarget.value);
        }}
        type="text"
        value={hue}
      >
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
        <option value="pink">Pink</option>
      </select>

      <label htmlFor="luminosity">Luminosity</label>
      <select
        onChange={(event) => {
          setLuminosity(event.currentTarget.value);
        }}
        value={luminosity}
      >
        <option value="bright">Bright</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>

      <button
        className="btn"
        type="submit"
        onClick={() => {
          props.setHex(randomColor({ luminosity: luminosity, hue: hue }));
        }}
      >
        SHOW ME HEX!
      </button>
      <h4 style={{ color: hex }}>{hex}</h4>
    </div>
  );
}
