import "./Button.scss";

const Button = ({ children, secondary, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="button"
      style={{ backgroundColor: !secondary ? "red" : "blue" }}
    >
      {children}
    </button>
  );
};

export default Button;
