import React, {useState} from 'react'



function ThankYou(props) {

  const [orderId, setOrderId] = useState()


  return (
    <div>
        <h1>Gracias por su compra</h1>
        <p>Se generó la orden correctamente✅</p>
    </div>
  )
}

export default ThankYou