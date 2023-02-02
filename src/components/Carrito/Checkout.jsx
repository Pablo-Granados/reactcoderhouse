import React, { useState } from 'react';
import Formulario from './Formulario';

function Checkout({ onCheckout }) {

    const [buyerData, setBuyerData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    function handleInputChange(evt) {
        let nameInput = evt.target.name;
        let value = evt.target.value;

        const newBuyerData = { ...buyerData };
        newBuyerData[nameInput] = value;
        setBuyerData(newBuyerData);
    }

    function onSubmit(evt) {
        evt.preventDefault();
        setBuyerData({
            name: "",
            email: "",
            phone: "",
        });
        onCheckout(buyerData);
    }





    return (
        <div>
            <h1>Genera tu orden de compra</h1>
            <form>
                <Formulario
                    value={buyerData.name}
                    name="name"
                    title="Nombre completo"
                    onChange={handleInputChange}
                />
                <Formulario
                    value={buyerData.email}
                    name="email"
                    title="Email"
                    onChange={handleInputChange}
                />
                <Formulario
                    value={buyerData.phone}
                    name="phone"
                    title="Tel"
                    onChange={handleInputChange}
                />

                <button onClick={onSubmit}>Crear orden</button>
            </form>
        </div>
    )
}

export default Checkout