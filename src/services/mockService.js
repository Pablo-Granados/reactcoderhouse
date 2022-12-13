import productos from "../data/productos"

function getItems(){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })
}

export default getItems