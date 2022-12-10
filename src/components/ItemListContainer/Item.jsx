// import { faL } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react"
import Contador from "../Contador/Contador";

import "./item.css"

function Item({ title, price, description, img, alt, stock }) {

    const [isFavorite, setIsFavorite] = useState(false);

    function handleFavorite() {
        setIsFavorite(!isFavorite)
        // isFavorite === true ? setIsFavorite(false) : setIsFavorite(true);
    }


    return (
        <div className="card">
            <button
                onClick={handleFavorite}
                className={isFavorite ? "card-favicon favorite" : "card-favicon"}>
                ♥
            </button>
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