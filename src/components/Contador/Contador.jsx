import React, { useState } from 'react';
import "./contador.css"

function Contador(props) {

    const [count, setCount] = useState(1);

    function handleSuma() {
        if (count < props.stock) setCount(count + 1);
      }
    
      function handleResta() {
        setCount(count - 1);
      }

      function onAddToCart(){
        console.log("Agregado al carrito")
      }
  return (
    <div className="contador-container">
      <div className="contador">
        <button className="contador-style" disabled={count === 1} onClick={handleResta}>
          -
        </button>
        <h3>{count}</h3>
        <button className="contador-style" disabled={count === props.stock} onClick={handleSuma}>
          +
        </button>
      </div>
      <button className="agregar-style" onClick={onAddToCart}>Agregar al carrito</button>
    </div>
  )
}

export default Contador