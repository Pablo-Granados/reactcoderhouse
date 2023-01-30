import React from 'react'
import { useParams } from 'react-router-dom'


function ThankYou() {

    let {newOrderID} = useParams()

  return (
    <div>
        <h1>Gracias por su compra</h1>
        <p>Se generó la orden correctamente✅</p>
        <small>{newOrderID}</small>
    </div>
  )
}

export default ThankYou