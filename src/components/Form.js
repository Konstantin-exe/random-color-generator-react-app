const randomColor = require('randomcolor');

export default function Form() {
  const [color, setColor]; = useState(#000000);
  const changeColor = event => setColor(event.getElementById.value)

  return (
    <form className="color-form">
      <label htmlFor="hue">Choose Color</label>
      <input
        className="input"
        type="text"
        id="hue"
        placeholder="red, yellow, blue..."
      />

      <label htmlFor="luminosity">Luminosity</label>
      <input
        className="input"
        id="luminosity"
        type="text"
        placeholder="light, dark..."
      />

      <div>
        <button className="btn" type="submit" value="Submit">
          DRAW ME!
        </button>
      </div>
    </form>
  );
}
