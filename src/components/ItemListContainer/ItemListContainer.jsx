import React, { useState, useEffect } from "react";
import getItems, { getItemsCategory } from "../../services/mockService";
import "./item.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const categoryID = useParams().categoryID

    useEffect(() => {

        if (categoryID === undefined) {
            getItems()
            .then((respuesta) => {
                setProductos(respuesta);
            })
            .catch((error) => console.error(error))
        }else{
            getItemsCategory(categoryID)
            .then((respuestaFiltrada) => setProductos(respuestaFiltrada))
            .catch((errorMsg) => alert(errorMsg))
        }

    }, [categoryID ])


    return (
        <ItemList productos={productos} />
    );
}

export default ItemListContainer