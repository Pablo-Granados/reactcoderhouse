import "./button.css";

function Button(props) {
  const styleBtn = { backgroundColor: props.color };

  return (
    <button style={styleBtn} className="btn">
      {props.children || props.text}
    </button>
  );
}

export default Button;
