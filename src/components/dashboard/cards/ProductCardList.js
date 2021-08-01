
import React from 'react';

import { useSelector } from 'react-redux';
import { ProductCardItem } from './ProductCardItem';

export const ProductCardList = () => {

    const products = useSelector( state => state.products );

    return (
        <ul>
            {
                products.map( product => (
                    <li
                        key={ product.id }
                    >
                        <ProductCardItem 
                            { ...product }
                        />
                    </li>
                ) )
            }
        </ul>
    )
}
