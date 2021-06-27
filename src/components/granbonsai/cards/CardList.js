
import React from 'react';
import { CardItem } from './CardItem';

export const CardList = () => {

    const clothes = [1, 2, 3, 4, 5, 6];

    return (
        <ul className="card__list-clothes container mt-5">
            {
                clothes.map(  clothe => (
                    <li 
                        key={ clothe }
                    >
                        <CardItem />
                    </li>
                ))
            }
        </ul>
    )
}
