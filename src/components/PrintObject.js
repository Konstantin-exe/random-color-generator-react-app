const PrintObject = (props) => {
  return (
    <div style={{ background: props.hex }} className="hashBox">
      <h4>{props.hex}</h4>
    </div>
  );
};

export default PrintObject;
