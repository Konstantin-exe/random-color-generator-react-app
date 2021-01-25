import { useState } from 'react';
const randomColor = require('randomcolor');

const Form = () => {
  const [color, setColor] = useState('#000000');

  return (
    <form
      className="form" //onSubmit={this.handleSubmit} >
    >
      {color}
      <input
        className="input"
        onChange={() => {
          setColor(this.randomColor.hue);
        }}
        type="text"
        placeholder="Choose Color"
      />

      <input
        className="input"
        name="lightness"
        type="text"
        placeholder="Choose lightness"
      />

      <input
        className="input"
        name="blockSize"
        type="text"
        placeholder="Block-Size (WWxHH)"
      />

      <div>
        <button className="btn" type="submit" value="Submit">
          DRAW ME!
        </button>
      </div>
    </form>
  );
};

export default Form;
