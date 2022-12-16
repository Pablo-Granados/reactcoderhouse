import React, { useState, useEffect } from 'react'
import { getSingleItems } from '../../services/mockService';
import Contador from '../Contador/Contador';
import "./itemDetail.css"
import { Link, useParams } from 'react-router-dom';
import CloseButton from '../FavButton/CloseButton';

function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const [CountInCart, setCountInCart] = useState(0)

  let { itemID } = useParams();


  useEffect(() => {
    getSingleItems(itemID).then((respuesta) => {
      setProducto(respuesta);
    }).catch((error) => alert(error));
  }, []);

  function handleAddToCart(count){
    setCountInCart(count);
    console.log("compraste: ", count, "unidad/es de ", producto.title)
  }


  //obtener parametro de la url


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
      <Contador stock={producto.stock} onAddToCart={handleAddToCart}> </Contador>
      <Link to="/carrito">Ir al carrito</Link>

    </div>
  )
}

export default ItemDetailContainer