import React from 'react'
import "./portada.css"

function Portada({titulo, subtitulo, img, alt}) {

    return (
        <div className="fondo">
            <h2 className="titulo">{titulo}</h2>
            <h4 className="subtitulo">{subtitulo}</h4>
            <img className="fondoIMG"
                src={img}
                alt={alt}
            />
        </div>
        )
}

export default Portada