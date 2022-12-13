import React from 'react'
import "./portada.css"

function Portada({titulo, subtitulo}) {

    
  function handleImageClick() {
    console.log("Click en la imagen")
  }
    return (
        <div className="fondo">
            <h2 className="titulo">{titulo}</h2>
            <h4 className="subtitulo">{subtitulo}</h4>
            <img className="fondoIMG"
                onClick={handleImageClick}
                src="https://images.losandes.com.ar/resizer/5QdOTebiuhsTZRMbHdAndLbvqRk=/980x640/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/R5B764D2LRB4VGDN7RZVC4SLLE.jpg"
                alt="Bartenders"
            />
        </div>
        )
}

export default Portada