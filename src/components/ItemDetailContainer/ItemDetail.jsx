import React, { useState, useEffect, useContext } from 'react'
import { getSingleItems } from '../../services/firebase';
import Contador from '../Contador/Contador';
import { Link, useParams } from 'react-router-dom';
import CloseButton from '../FavButton/CloseButton';
import { cartContext } from '../../storage/cartContext';

function ItemDetail() {

  const [producto, setProducto] = useState({});


  const [CountInCart, setCountInCart] = useState(0);

  let { itemID } = useParams();


  const {agregarAlCarrito} = useContext(cartContext)

  useEffect(() => {
    getSingleItems(itemID)
    .then((respuesta) => {
      setProducto(respuesta);
    }).catch((error) => alert(error));
  }, []);



  function handleAddToCart(count){
    setCountInCart(count);
    agregarAlCarrito(producto, count);
    console.log("Agregaste: ", count, "unidad/es de ", producto.title, " al carrito.")
  }

  return (
    <div className="card-detail_main">
    <CloseButton />
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
    {
      CountInCart?
      <Link to="/carrito">Ir al carrito</Link>
      :
      <Contador stock={producto.stock} onAddToCart={handleAddToCart}> </Contador>
    }


  </div>
  )
}
export default ItemDetail