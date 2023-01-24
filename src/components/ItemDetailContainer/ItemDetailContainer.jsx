import React, { useState, useEffect } from 'react'
import { getSingleItems } from '../../services/firebase';
import { useParams } from 'react-router-dom';
import "./itemDetail.css"
import ItemDetail from './ItemDetail';
import Loader from '../Loader/Loader';

function ItemDetailContainer() {

  const [producto, setProducto] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  let { itemID } = useParams();

  async function getData() {
    let respuesta = await getSingleItems(itemID);
    setProducto(respuesta);
    setIsLoading(false)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <h2>Detalles del producto</h2>
      {isLoading ? <Loader /> : <ItemDetail producto={producto} />}
    </>
  );
}

export default ItemDetailContainer