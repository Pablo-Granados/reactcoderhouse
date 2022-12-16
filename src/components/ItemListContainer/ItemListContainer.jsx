import React, { useState, useEffect, useContext } from "react";
import getItems, { getItemsCategory } from "../../services/mockService";
import "./item.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { cartContex } from "../../storage/cartContext";

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const categoryID = useParams().categoryID;
    

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