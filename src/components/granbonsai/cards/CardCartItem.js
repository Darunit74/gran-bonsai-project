
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { removeCartProduct, updatePriceTotalCart } from '../../../actions/cart';
import { numberWithDots } from '../../../helpers/numberWithDots';
import { useForm } from '../../../hooks/useForm';

export const CardCartItem = ({
    productId,
    title,
    amountForm,
    size,
    url,
    price,
    subtotal
}) => {

    const dispatch = useDispatch();
    const { totalPrice } = useSelector(state => state.cart);

    const [ values, handleInputChange ] = useForm({
        amount: amountForm
    });

    const { amount } = values;

    const subTotal2 = price * amount;

    const handleRemove = () => {
        dispatch( removeCartProduct( productId ) );
    };

    const handleUpdatePriceTotal = () => {
        dispatch( updatePriceTotalCart( Number(totalPrice) + subTotal2 ) );
    }

    return (
        <>
            <td 
                className="product__remove"
                onClick={ handleRemove }
            >
                <i className="fas fa-times"></i>
            </td>
            <td className="product__img">
                <img src={ url } alt="Tshirt" />
            </td>
            <td className="product__info">
                <p>{ title } - ({ size.toUpperCase() })</p>
            </td>
            <td className="product__price">
                <p>COP { numberWithDots( price ) }</p>
            </td>
            <td className="product__amount">
                <form className="amount__box">
                    <input 
                        type="number" 
                        min="1"
                        value={ amount }
                        onChange={ ( e ) => { handleInputChange(e); handleUpdatePriceTotal(); } }
                        name="amount"
                    />
                </form>
            </td>
            <td className="product__subtotal">
                <p>COP { numberWithDots( subTotal2 ) }</p>
            </td>
        </>
    )
}
