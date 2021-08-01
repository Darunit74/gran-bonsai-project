
import React from 'react';
import { useHistory } from 'react-router-dom';
import { numberWithDots } from '../../../helpers/numberWithDots';


export const CardItem = ({
    id,
    url,
    title,
    price
}) => {

    const history = useHistory();

    const handleProduct = () => {
        history.push(`/products/${ id }`);
    }


    return (
        <div 
            className="card__item-box"
            onClick={ handleProduct }
        >
            <div className="card__item-img">
                <img src={ url } alt="Tshirt" />
            </div>
            <div className="card__item-content">
                <h4>{ title }</h4>
                <p>COP { numberWithDots(price) }</p>
            </div>
        </div>
    )
}
