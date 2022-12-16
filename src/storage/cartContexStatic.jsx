import React, { useContext } from 'react';
import { createContext } from 'react';

//1- inicializar contexto
const cartContexStatic = createContext({ carrito: []});
//2- extraer provider
const Provider = cartContexStatic.Provider;
//3- crear value para provider


function CartContexProviderStatic(props){

    let carrito = [];
    let saludo = "holis desde contexto";

    return(
        <Provider value={{carrito: carrito, saludo: saludo}} >
            {console.log(carrito,saludo)}
            {props.children} 

        </Provider>
    )
}

export {cartContexStatic, CartContexProviderStatic}

//4- nos conectamos al contecto