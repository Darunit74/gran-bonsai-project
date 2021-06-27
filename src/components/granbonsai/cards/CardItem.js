
import React from 'react';
import { useHistory } from 'react-router-dom';

import tshirtPng from '../../../images/test-images/tshirt.png';

export const CardItem = () => {

    const history = useHistory();

    const handleProduct = () => {
        history.push('/products/ropa-prueba');
    }


    return (
        <div 
            className="card__item-box"
            onClick={ handleProduct }
        >
            <div className="card__item-img">
                <img src={ tshirtPng } alt="Tshirt" />
            </div>
            <div className="card__item-content">
                <h4>Ropa 1</h4>
                <p>COP 40.000,00</p>
            </div>
        </div>
    )
}
