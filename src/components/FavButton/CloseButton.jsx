import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function CloseButton(boton) {

    return (
        <div className="close">
            <button className="closeBtn">
                <div>x</div></button>
        </div>
    )
}


export default CloseButton
