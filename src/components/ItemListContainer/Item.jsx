import React from "react"
import Contador from "../Contador/Contador";
import FavButton from "../FavButton/FavButton";

import "./item.css"

function Item({ title, price, description, img, alt, stock }) {

    return (
        <div className="card">
            <FavButton 
            boton={"♥"}
            />
            <div className="card-img">
                <img
                    src={img}
                    alt={alt}
                />
            </div>
            <div className="card-detail">
                <h2>{title}</h2>
                <h4>{price} goles</h4>
                <p>{description}</p>
            </div>
            <div className="card-count">
                <Contador stock={stock} />
            </div>
        </div>
    )
}

export default Item