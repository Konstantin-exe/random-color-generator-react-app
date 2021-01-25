const Button = () => {
  const onClick = () => {
    console.log('click');
  };
  return (
    <div className="inputs">
      <div>
        <input className="input" type="color" placeholder="Choose Color" />
        <button className="btn" onClick={onClick}>
          feel lucky?
        </button>
      </div>
      <div>
        <div>
          <input className="input" type="text" placeholder="Choose lightness" />
          <button className="btn" onClick={onClick}>
            feel lucky?
          </button>
        </div>
      </div>

      <input className="input" type="text" placeholder="Block-Size (WWxHH)" />
      <button className="btn" onClick={onClick}>
        feel lucky?
      </button>
    </div>
  );
};

export default Button;
