import React, { useState, createContext } from 'react';

//1- inicializar contexto
const cartContext = createContext([]);
//2- extraer provider
const Provider = cartContext.Provider;
//3- crear value para provider

function CartContexProvider(props) {

    const [carrito, setCarrito] = useState([]);

    // function estaEnCarrito(id) {
    //     carrito.find((item) => item.id === id)
    // }

    function agregarAlCarrito(item, count) {
        let indexItemInCart = carrito.findIndex(
            (itemInContext) => itemInContext.id === item.id
        );
        const newCarrito = [...carrito];
        indexItemInCart !== -1
            ? (newCarrito[indexItemInCart].count += count)
            : newCarrito.push({ ...item, count: count });
        setCarrito(newCarrito);
    };

    function borrarCarrito() {
        setCarrito([]);
    }

    function removeItem(itemID) {
        const carritoFiltrado = carrito.filter(function (item) {
            return item.id !== itemID;
        });
        borrarCarrito();
        const newCarrito = carritoFiltrado;
        setCarrito(newCarrito)
    }


    // function agregarAlCarrito(item, count) {

    //     if (estaEnCarrito(item.id)) {
    //         setCarrito(
    //             carrito.map((producto) => {
    //                 return producto.id === item.id
    //                 ? {...producto, count: (producto.count += count)}
    //                 : producto;
    //             } ));
    //     } else {
    //         setCarrito([...carrito, {...item, count}])
    //     }
    // }

    // function agregarAlCarrito(item, count){
    //     let indexItemInCart = carrito.findIndex(itemInContext => itemInContext.id === item.id)
    //     let isItemInCart = indexItemInCart !== -1;
    //     const newCarrito = [...carrito];

    //     if (isItemInCart){
    //         newCarrito[indexItemInCart].count += count
    //         setCarrito(newCarrito)
    //     } else {

    //     newCarrito.push({...item, count});
    //     setCarrito(newCarrito)}
    // };

    function totalItemsEnCarritofn() {
        let totalItemsEnCarrito = 0;
        carrito.forEach(item => totalItemsEnCarrito += item.count);
        return totalItemsEnCarrito
    };

    // function borrarCarrito(){
    //     setCarrito([]);
    // };

    // function removeItem(idToRemove){
    //     const carritoFiltrado = carrito.filter(function (item){
    //         return item.id !== idToRemove;
    //     });
    //     borrarCarrito();
    //     const newCarrito = carritoFiltrado;
    //     setCarrito(newCarrito)
    // };

    function getTotalPrice() {
        return carrito.reduce((prev, act) => prev + act.count * act.price, 0);
    }




    return (
        <Provider value={{
            carrito,
            agregarAlCarrito,
            removeItem,
            borrarCarrito,
            getTotalPrice,
            // totalItemsEnCarrito,
            totalItemsEnCarritofn
        }} >
            {console.log(carrito)}
            {props.children}
        </Provider>
    )
}

export { cartContext, CartContexProvider }