import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar }  from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Contador from "../Contador/Contador";
import FavButton from "../FavButton/FavButton";

import "./item.css"

function Item({ title, newProduct, price, description, img, alt, stock, id, discount }) {

    let urlDetail = `/item/${id}`;

    let classNamePrice = discount? "offerTag" : "priceTag"
    let classNameItem = `card ${newProduct && "item-new"}`;

    return (
        <div className={classNameItem}>
            <FavButton
                boton={<FontAwesomeIcon icon={faStar}/>}
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
                <h4 className= {classNamePrice}>
                    $ {price}
                    {discount && <small>{discount} % off</small>}
                    </h4>
                <p className="descripcion">{description}</p>
            </div>
            <div className="card-count">
                <Contador stock={stock} />
            </div>
        </div>
    )
}

export default Item