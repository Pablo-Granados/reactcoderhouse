import React, { useState, createContext } from 'react';

//1- inicializar contexto
const cartContext = createContext({ carrito: []});
//2- extraer provider
const Provider = cartContext.Provider;
//3- crear value para provider

function CartContexProvider(props) {

    const [carrito, setCarrito] = useState([]);

    function agregarAlCarrito(item, count) {
        let indexItemInCart = carrito.findIndex(
            (itemInContext) => itemInContext.id === item.id
        );
        let isItemInCart = indexItemInCart !== -1;
        const newCarrito = [...carrito];

        if (isItemInCart) {
            newCarrito[indexItemInCart].count += count;
        setCarrito(newCarrito);
    } else {
        newCarrito.push({...item, count: count});
        setCarrito(newCarrito)
    }
    }

    let totalItemsEnCarrito = 0;
    carrito.forEach((item) => (totalItemsEnCarrito += item.count));

    function totalItemsEnCarritofn() {
        let totalItemsEnCarrito = 0;
        carrito.forEach(item => totalItemsEnCarrito += item.count);
        return totalItemsEnCarrito
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

    function getTotalPrice() {
        return carrito.reduce((prev, act) => prev + act.count * act.price, 0);
    }

    function getItemFromCart(id) {
        return carrito.find((item) => item.id === id);
      }
    
    function getItemCountfromCart(id) {
        let itemInCart = carrito.find((item) => item.id === id);
        return itemInCart?.count;
      }




    return (
        <Provider value={{
            carrito,
            agregarAlCarrito,
            removeItem,
            borrarCarrito,
            getTotalPrice,
            // totalItemsEnCarrito,
            totalItemsEnCarritofn,
            getItemCountfromCart
        }} >
            {console.log(carrito)}
            {props.children}
        </Provider>
    )
}

export { cartContext, CartContexProvider }