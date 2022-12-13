import { useState, useEffect } from "react";

function FavButton({ boton }) {

    const [isFavorite, setIsFavorite] = useState(false);
    function handleFavorite() {
        setIsFavorite(!isFavorite)
        // isFavorite === true ? setIsFavorite(false) : setIsFavorite(true);
    }

    useEffect(() => {
    }, []);
    //al tener el array vacio, lo hago ejecutarse una sola vez

    return (
        <div className="favorite">
            <button
                onClick={handleFavorite}
                className={isFavorite ? "card-favicon favorite" : "card-favicon"}>
                {boton}
            </button>
        </div>
)}

export default FavButton