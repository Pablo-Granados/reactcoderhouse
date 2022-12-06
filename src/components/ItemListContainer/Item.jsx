import React from "react"
import "./item.css"

function Item({ title, price, description, img, alt }) {
    return (
        <div className="card">
            <div className="card-img">
                <img
                    src={img}
                    alt={alt}
                />
            </div>
            <div className="card-detail">
                <h2>{title}</h2>
                <h4>$ {price}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Item