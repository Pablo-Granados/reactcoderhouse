import React from "react"
import { Link } from "react-router-dom";
import Contador from "../Contador/Contador";
import FavButton from "../FavButton/FavButton";

import "./item.css"

function Item({ title, price, description, img, alt, stock, id }) {

    let urlDetail = `/item/${id}`

    return (
        <div className="card">
            <FavButton
                boton={"♥"}
            />
            <div className="card-img">
                <Link to={urlDetail}>

                    <img
                        src={img}
                        alt={alt}
                    />
                </Link>

            </div>
            <div className="card-detail">
                <h2 className="articulo">{title}</h2>
                <h4 className="priceTag">$ {price}</h4>
                <p className="descripcion">{description}</p>
            </div>
            <div className="card-count">
                <Contador stock={stock} />
            </div>
        </div>
    )
}

export default Item