import React, { useState} from 'react';
import { createContext } from 'react';

//1- inicializar contexto
const cartContex = createContext({ carrito: []});
//2- extraer provider
const Provider = cartContex.Provider;
//3- crear value para provider

function CartContexProvider(props){

    const [carrito, setCarrito] = useState([])
    let saludo = "holis desde contexto";

    function agregarAlCarrito(item, count){
        let indexItemInCart = carrito.findIndex(itemInContext => itemInContext.id === item.id)
        let isItemInCart = indexItemInCart !== -1;
        const newCarrito = [...carrito];

        if (isItemInCart){
            newCarrito[indexItemInCart].count += count
            setCarrito(newCarrito)
        } else {
        
        // console.log("--->", isItemInCart)
        //const newCarrito = carrito.map(item => item)
        // const newItem = item;
        // newItem.count = count;
        // console.log(newItem);

        newCarrito.push({...item, count});
        setCarrito(newCarrito)}
    }

    // let totalItemsEnCarrito = 0;
    // carrito.forEach(item => totalItemsEnCarrito += item.count);

    function totalItemsEnCarritofn(){
        let totalItemsEnCarrito = 0;
        carrito.forEach(item => totalItemsEnCarrito += item.count);
        return totalItemsEnCarrito
    }

    

    return(
        <Provider value={{
            carrito,
            saludo,
            agregarAlCarrito,
            // totalItemsEnCarrito,
            totalItemsEnCarritofn
            }} >
            {console.log(carrito,saludo)}
            {props.children} 
        </Provider>
    )
}

export {cartContex, CartContexProvider}

//4- nos conectamos al contecto