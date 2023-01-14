import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Portada from "../Portada/Portada"

function InicioAPP() {
    return (
        <div className="home">
            <Portada 
            titulo= "La coctelera"
            subtitulo="Las mejores recetas e insumos para tus tragos"
            img="https://images.losandes.com.ar/resizer/5QdOTebiuhsTZRMbHdAndLbvqRk=/980x640/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/R5B764D2LRB4VGDN7RZVC4SLLE.jpg"
            alt="Cocteleria"
            />
            <ItemListContainer />
        </div>
    )
}

export default InicioAPP