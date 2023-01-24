import React, { useState, useEffect, useContext } from "react";
import { getItems, getItemsCategory } from "../../services/firebase";
import "./item.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState (true);
    const categoryID = useParams().categoryID;
    

    useEffect(() => {

        if (categoryID === undefined) {
            getItems()
            .then((respuesta) => {
                setProductos(respuesta);
                setIsLoading (false);
            })
            .catch((error) => console.error(error))
        }else{
            getItemsCategory(categoryID)
            .then((respuestaFiltrada) => {
                setProductos(respuestaFiltrada);
                setIsLoading (false);
            })
            .catch((errorMsg) => alert(errorMsg))
        }

    }, [categoryID ])

    if (isLoading) {
        return <Loader />
    }


    return (
        <ItemList productos={productos} />
    );
}

export default ItemListContainer