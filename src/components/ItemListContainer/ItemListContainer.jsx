import React, { useState, useEffect } from "react";
import getItems from "../../services/mockService";
import "./item.css";
import ItemList from "./ItemList";

function ItemListContainer() {
    console.log("%cRender/Update", "color: blue")

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getItems().then((respuesta) => setProductos(respuesta));
    }, [])


    return (
        <ItemList productos={productos} />
    );
}

export default ItemListContainer