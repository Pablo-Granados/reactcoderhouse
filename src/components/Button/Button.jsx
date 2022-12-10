import "./button.css";
import { useState } from "react";

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
