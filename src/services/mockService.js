import productos from "../data/productos"

// function getItems(){
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve(productos)
//         }, 1500);
//     })
// }

export function getItemsCategory(categoryID){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
        let itemsFound = productos.filter(item =>{
            return(item.category === categoryID)
        });
        if (itemsFound.length > 0)
        resolve(itemsFound);
        else reject ("No hay productos para mostrar. Prueba en otra sección.")

    }, 1400)})}


// export function getSingleItems(itemID) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             let itemFound =productos.find((itemInArray) => itemInArray.id === parseInt(itemID));
//             if (itemFound) resolve(itemFound);
//             else reject ("Item no encontrado")
//         }, 500);
//     });
// }

export default getItems