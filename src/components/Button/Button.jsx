import { useState } from "react";
import "./button.css";

function Button(props) {
  const [colorButton, setColorButton] = useState(props.color);
  const styleBtn = { backgroundColor: colorButton };

function changeColor(){
  setColorButton("red");
}

  return (
    <button onClick={props.onButtonTouch} style={styleBtn} className={props.className} disabled={props.disabled}>
      {props.children || props.text}
    </button>
  );
}

export default Button;
