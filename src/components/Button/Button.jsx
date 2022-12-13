import { useState } from "react";
import "./button.css";

function Button(props) {
  const [colorButton, setColorButton] = useState(props.color)
  const styleBtn = { backgroundColor: colorButton };

function changeColor(){
  setColorButton("red");
}

  return (
    <button onClick={changeColor} style={styleBtn} className="btn">
      {props.children || props.text}
    </button>
  );
}

export default Button;
