import React, { useState, useEffect } from 'react'
import { getSingleItems } from '../../services/mockService';
import { useParams } from 'react-router-dom';
import "./itemDetail.css"
import ItemDetail from './ItemDetail';

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
      {isLoading ? <h3>Cargando . . . </h3> : <ItemDetail producto={producto} />}
    </>
  );
}

export default ItemDetailContainer