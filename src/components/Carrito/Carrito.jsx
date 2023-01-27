import React, { useContext } from 'react'
import { cartContex, CartContexProvider } from '../../storage/cartContext'
import Button from '../Button/Button'


function Carrito() {

  const { carrito, removeItem, getTotalPrice, borrarCarrito } = useContext(cartContex)
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
                  <Button color="#c63224" onClick={removeItem}> X </Button>
                </td>
                <th>$ {getTotalPrice()}</th>
                {/* <th> <Button >a{borrarCarrito}</Button> </th> */}
              </tr>
            )
          })}
        </tbody>
      </table>
      <h4>El total del carrito es de $ {getTotalPrice()}</h4>
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