import React, { useState, useEffect, useContext } from 'react'
import { getSingleItems } from '../../services/firebase';
import Contador from '../Contador/Contador';
import { Link, useParams } from 'react-router-dom';
import CloseButton from '../FavButton/CloseButton';
import { cartContext } from '../../storage/cartContext';
import Button from '../Button/Button';
import swal from 'sweetalert'


function ItemDetail() {

  const [producto, setProducto] = useState({});


  const [CountInCart, setCountInCart] = useState(0);

  let { itemID } = useParams();


  const { getItemCountfromCart, agregarAlCarrito } = useContext(cartContext)

  useEffect(() => {
    getSingleItems(itemID)
      .then((respuesta) => {
        setProducto(respuesta);
      }).catch((error) => alert(error));
  }, []);



  function handleAddToCart(count) {
    setCountInCart(count);
    agregarAlCarrito(producto, count);
    swal(
      "Agregado al carrito",
      `Agregaste: ${count} unidad/es de "${producto.title}" al carrito."`,
      "success"
    );
    console.log("Agregaste: ", count, "unidad/es de ", producto.title, " al carrito.")
  }

  function calcularStock() {
    let cantInCart = getItemCountfromCart(producto.id);
    console.log("Cantidad->", cantInCart);
    if (cantInCart) return producto.stock - cantInCart;
    else return producto.stock;
  }



  return (
    <div className="card-detail_main">
      {/* <CloseButton /> */}
      <div className="card-detail_img">
        <img
          src={producto.img}
          alt={producto.alt}>
        </img>
      </div>
      <div className="card-detail_detail">
        <h2 className="titulo">{producto.title}</h2>
        <h4 className="priceTag">$ {producto.price}</h4>
        <p>{producto.description}</p>
      </div>
      <Link to="/">
        <Button className="btn-sigue-comprando" >Sigue comprando</Button>
      </Link>

      {calcularStock() >= 1 ? (
        CountInCart ?
          <Link to="/carrito">
            <Button className="btn">Ir al carrito</Button> </Link>
          :
          <>
            <Link to="/carrito">
              <Button className="btn">Ir al carrito</Button>
            </Link>
            <Contador stock={calcularStock()} onAddToCart={handleAddToCart} />
          </>
      ) : (
        <h3>No hay stock disponible</h3>

      )}


    </div>
  )
}
export default ItemDetail