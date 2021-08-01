
import React from 'react';
import { useSelector } from 'react-redux';
import { CardCartItem } from './CardCartItem';

export const CardCartList = () => {

    const { products } = useSelector( state => state.cart );

    return (
        <>
            {
                products.map( product => (
                    <tr
                        key={ product.productId }
                    >
                        <CardCartItem 
                            { ...product }
                        />
                    </tr>
                ) )
            }
        </>
    )
}
