import "./item.css"

function ItemListContainer({titulo, subtitulo}) {
    return (
        <div className="contenedor">
            <h2>{titulo}</h2>
            <h4>{subtitulo}</h4>
        </div>
    )
}

export default ItemListContainer