import { useState } from 'react';
const randomColor = require('randomcolor');

export default function Form(props) {
  const [hue, setHue] = useState('red');
  const [luminosity, setLuminosity] = useState('bright');
  const hueList = [
    'red',
    'blue',
    'orange',
    'yellow',
    'green',
    'purple',
    'pink',
  ];

  const luminosityList = ['bright', 'light', 'dark'];

  return (
    <div className="Form">
      <label className="select" htmlFor="hue">
        Color
      </label>
      <select
        onChange={(event) => {
          setHue(event.currentTarget.value);
        }}
        type="text"
        value={hue}
      >
        {hueList.map((hueItem) => (
          <option key={hueItem} value={hueItem}>
            {hueItem.charAt(0).toUpperCase() + hueItem.slice(1)}
          </option>
        ))}
        ;
      </select>

      <label htmlFor="luminosity">Luminosity</label>
      <select
        onChange={(event) => {
          setLuminosity(event.currentTarget.value);
        }}
        value={luminosity}
      >
        {luminosityList.map((luminosityItem) => (
          <option key={luminosityItem} value={luminosityItem}>
            {luminosityItem.charAt(0).toUpperCase() + luminosityItem.slice(1)}
          </option>
        ))}
        ;
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
      <button
        type="submit"
        className="btnluck"
        onClick={() => {
          props.setHex(
            randomColor({
              luminosity:
                luminosityList[
                  Math.floor(Math.random() * luminosityList.length)
                ],
              hue: hueList[Math.floor(Math.random() * hueList.length)],
            }),
          );
        }}
      >
        FEEL LUCKY?
      </button>
    </div>
  );
}
