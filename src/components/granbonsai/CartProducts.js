
import React from 'react';
import { useSelector } from 'react-redux';
import { numberWithDots } from '../../helpers/numberWithDots';

import { CardCartList } from './cards/CardCartList';

export const CartProducts = () => {

    const { totalPrice } = useSelector(state => state.cart);

    return (
        <div className="cart__table container">
            <table>
                <thead>
                    <tr>
                        <th className="product__remove"></th>
                        <th className="product__img"></th>
                        <th className="product__info">Producto</th>
                        <th className="product__price">Precio</th>
                        <th className="product__amount">Cantidad</th>
                        <th className="product__subtotal">Subtotal</th>
                    </tr>
                </thead>
                <tbody>

                    <CardCartList />

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="product__totalName">
                            <p>Total:</p>
                        </td>
                        <td className="product__total">
                            <p>COP { numberWithDots( totalPrice ) }</p>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="btn__box--order">
                <button
                    className="btn btn-primary"
                >
                    Realizar Compra
                </button>
            </div>
        </div>
    )
}
