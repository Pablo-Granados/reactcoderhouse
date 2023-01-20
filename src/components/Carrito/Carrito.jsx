import React, {useContext} from 'react'
import { cartContex } from '../../storage/cartContext'
import { CartContexProvider } from '../../storage/cartContexStatic'


function Carrito() {

  const {carrito, removeItem} = useContext(cartContex)
  return (
    <div>
        <h1>Tu carrito</h1>
        {carrito.map((item) => (
        <div>
          <h3>{item.title}</h3>
          <p>cantidad: {item.count}</p>
          <p>$ {item.price}</p>
          <h4>total: ${}</h4>
          <button>X</button>
        </div>
      ))}
    </div>
  )
}

export default Carrito