import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from "sweetalert2";

import { useParams } from 'react-router-dom';
import { cartAddNewProduct } from '../../actions/cart';
import { useForm } from '../../hooks/useForm';
import { GetProductById } from '../../selectors/getProductById';
import { numberWithDots } from '../../helpers/numberWithDots';

export const DetailsProduct = () => {

    const { productId } = useParams();
    const dispatch = useDispatch();
    const { totalPrice } = useSelector( state => state.cart );

    const [{
        title,
        url,
        price,
        description,
        amount
    }] = GetProductById( productId );

    const [ values, handleInputChange, reset ] = useForm({
        size: '',
        amountForm: '1'
    });

    const {
        size, 
        amountForm
    } = values;

    const subTotal = (price * amountForm);


    const handleForm = ( e ) => {
        e.preventDefault();

        dispatch(cartAddNewProduct(
            Number(totalPrice) + subTotal,
            {
                productId,
                title,
                amountForm,
                size,
                url,
                price,
                subtotal: subTotal
            }
        ));

        Swal.fire({
            icon: 'success',
            title: 'Mensaje',
            text: 'Producto agregado al carrito correctamente'
        });  

        reset();
    }

    return (
        <div className="container">
            <div className="details__main">
                <div className="details__main-img-box">
                    <img src={ url } alt="Tshirt" />
                </div>
                <div className="details__main-content">
                    <div className="details__main-content-header">
                        <h3>{ title } <span>({ amount } Disponibles)</span> </h3>
                        <p className="details__main-content-price">COP { numberWithDots( subTotal ) }</p>
                        <p className="details__main-content-description">{ description }</p>
                    </div>
                    <form 
                        className="details__main-content-form"
                        onSubmit={ handleForm }
                    >
                        <div className="size__box">
                            <label name="size">Talla</label>
                            <select 
                                name="size"
                                onChange={ handleInputChange }
                                value={ size }
                            >
                                <option value="">Elige una opción</option>
                                <option value="m">M</option>
                                <option value="s">S</option>
                                <option value="x">X</option>
                            </select>
                        </div>

                        <div className="amount__box">
                            <input 
                                type="number" 
                                placeholder="1"
                                min="1"
                                max={ amount }
                                name="amountForm"
                                onChange={ handleInputChange }
                                value={ amountForm }
                            />
                            <button
                                className="btn btn-primary"
                                type="submit"
                            >
                                Añadir al carrito
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
