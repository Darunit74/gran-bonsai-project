
import React from 'react';

import { GetProductByCategory } from '../../../selectors/GetProductByCategory';
import { CardItem } from './CardItem';

export const CardList = ({ category }) => {

    const products = GetProductByCategory( category );

    return (
        <ul className="card__list-clothes container mt-5">
            {
                products.map(  product => (
                    <li 
                        key={ product.id }
                    >
                        <CardItem 
                            { ...product }
                        />
                    </li>
                ))
            }
        </ul>
    )
}
