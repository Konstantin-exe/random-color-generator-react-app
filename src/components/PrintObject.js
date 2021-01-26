const randomColor = require('randomcolor');

const PrintObject = (props) => {
  return (
    <div className="hashBox">
      <h4 style={{ color: props.hex }}>{props.hex}</h4>
    </div>
  );
};

export default PrintObject;
