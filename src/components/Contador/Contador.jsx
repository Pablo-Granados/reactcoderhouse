import Button from "../Button/Button";
import React, { useState } from 'react';
import "./contador.css"
// import productos from "../../data/productos";


function Contador({stock, onAddToCart}) {

    const [count, setCount] = useState(1);

    function handleSuma() {
        if (count < stock) setCount(count + 1);
      }
    
      function handleResta() {
        if (count > 1)
        setCount(count - 1);
      }

  return (
    <div className="contador-container">
      <div className="contador">
        <Button onButtonTouch={handleResta} className="contador-style" disabled={count === 1}>
          -
        </Button>
        <h3>{count}</h3>
        <Button onButtonTouch={handleSuma} className="contador-style" disabled={count === stock} >
          +
        </Button>
      </div>
      <Button className="agregar-style" onButtonTouch={()=>onAddToCart(count)} >Agregar al carrito</Button>
    </div>
  )
}

export default Contador