import React, { useState, createContext} from 'react';

//1- inicializar contexto
const cartContex = createContext({ carrito: []});
//2- extraer provider
const Provider = cartContex.Provider;
//3- crear value para provider

function CartContexProvider(props){

    const [carrito, setCarrito] = useState([]);

    function agregarAlCarrito(item, count){
        let indexItemInCart = carrito.findIndex(itemInContext => itemInContext.id === item.id)
        let isItemInCart = indexItemInCart !== -1;
        const newCarrito = [...carrito];

        if (isItemInCart){
            newCarrito[indexItemInCart].count += count
            setCarrito(newCarrito)
        } else {
        
        newCarrito.push({...item, count});
        setCarrito(newCarrito)}
    };

    function totalItemsEnCarritofn(){
        let totalItemsEnCarrito = 0;
        carrito.forEach(item => totalItemsEnCarrito += item.count);
        return totalItemsEnCarrito
    };

    const borrarCarrito = () => {
        setCarrito([]);
    };

    const removeItem = (idToRemove) => {
        let newCart = carrito.filter((itemInCart) => itemInCart.id !== idToRemove);
        setCarrito(newCart);
    };

    function getTotalPrice(){
        return carrito.reduce((prev, act) => prev + act.count * act.price, 0);
    }


    

    return(
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

export {cartContex, CartContexProvider}

//4- nos conectamos al contecto