import React, { useContext } from 'react'
import {createBuyOrder_WithStockControl } from '../../services/firebase'
import { cartContext } from '../../storage/cartContext'
import Button from '../Button/Button'
import "./carrito.css"
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Checkout from './Checkout'



function Carrito() {
  let navigateTo = useNavigate()

  const { carrito, getTotalPrice, borrarCarrito } = useContext(cartContext)
  const {removeItem} = useContext(cartContext)
  const [orderId, setOrderId] = useState(false)


  function handleRemoveItem(itemID){
    removeItem(itemID)
  }

  function handleCheckout(buyerData) {
    const order = {
      buyer: buyerData,
      items: carrito,
      total: getTotalPrice(),
      date: new Date(),
    }

    // createBuyOrder(order).then((id) => {
    //   swal(
    //     "Gracias por su compra",
    //     `se genero la orden correctamente, tu numero de ticket es: ${id}`,
    //     "success"
    //   );
    //   borrarCarrito();
    // });

    createBuyOrder_WithStockControl(order).then((id)=> {
      setOrderId(id)
      swal(
        "Gracias por su compra", 
        `se genero la orden correctamente, tu numero de ticket es: ${id}`,
        "success"
        );
        borrarCarrito()
        navigateTo(`/thankyou/${id}`)
        
    });
  }


  return (
    <>
      <h1>Tu carrito</h1>
      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Miniatura</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Remover</th>
            <th>Total</th>
            {/* <th>Vaciar</th> */}
          </tr>
        </thead>
        <tbody>
          {carrito.map((item) => {
            return (
              <tr key={item.id} className="cartList_row">
                <td>
                  <img height={50} src={item.img} alt={item.alt}></img>
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.count}</td>
                <td>
                  <button color="#c63224" className="btn btn-remove" onClick={() => handleRemoveItem(item.id)}> X </button>
                </td>
                <th>$ {getTotalPrice()}</th>
                {/* <th> <Button >a{borrarCarrito}</Button> </th> */}
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className="cartList_detail">
        <h4>El total del carrito es de $ {getTotalPrice()}</h4>
        <Button onButtonTouch={borrarCarrito} className="btn">Borrar Carrito</Button>
        <Checkout onCheckout={handleCheckout} className="btn"/>
        {/* <Button color="3353d3" onButtonTouch={handleCheckout}>Finalizar compra</Button> */}
      </div>
    </>
  )
}

export default Carrito


  //   <div>
  //     <h1>Tu carrito</h1>
  //     {carrito.map((item) => (
  //       <div>
  //         <h3>{item.title}</h3>
  //         <p>cantidad: {item.count}</p>
  //         <p>$ {item.price}</p>
  //         <button>X</button>
  //       </div>
  //     ))}
  //     <h4>El total de su carrito es de ${getTotalPrice()}</h4>

  //   </div>