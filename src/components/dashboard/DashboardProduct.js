
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { startSavingProducts } from '../../actions/product';
import { useForm } from '../../hooks/useForm';
import { GetProductById } from '../../selectors/getProductById';

export const DashboardProduct = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { productId } = useParams();

    const [ objProduct ] = GetProductById( productId ); 

    const [ values, handleInputChange, reset ] = useForm({
        title: objProduct.title,
        description: objProduct.description,
        price: objProduct.price,
        category: objProduct.category,
        amount: objProduct.amount
    });

    const {
        title,
        description,
        price,
        category,
        amount,
    } = values;

    let file = '';

    const handleForm = ( e ) => {
        e.preventDefault();

        const product = { id: productId, ...values };

        dispatch(startSavingProducts( product, file ));
        reset();
        history.push('/dashboard/products');

    }

    const handleFile = (e) => {

        const aux = e.target.files[0];
        if( aux ) {
            file = aux;
        }
    }

    return (
        <div className="dashboard__product-main">
            <div className="dashboard__product-box">
                <div className="dashboard__product-header">
                    <h4>Llena los campos para actualizar un producto.</h4>
                </div>
                <form 
                    className="product__form"
                    onSubmit={ handleForm }
                >
                    <div className="product__item">
                        <div className="label__box">
                            <label name="product-name">Nombre del producto:</label>
                        </div>
                        <div className="input__box">
                            <input 
                                type="text" 
                                name="title"
                                placeholder="Ingresa el nombre del producto"
                                className="auth__input"
                                onChange={ handleInputChange }
                                value={ title }
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="product__item">
                        <div className="label__box">
                            <label name="product-description">Descripción del Producto:</label>
                        </div>
                        <div className="input__box">
                            <textarea 
                                name="description" 
                                placeholder="Ingresa la descripción del producto"
                                className=""
                                onChange={ handleInputChange }
                                value={ description }
                            ></textarea>
                        </div>
                    </div>
                    <div className="product__item">
                        <div className="label__box">
                            <label name="product-price">Precio del producto</label>
                        </div>
                        <div className="input__box">
                            <input 
                                type="number" 
                                name="price"
                                placeholder="Ingresa el precio del producto"
                                className="auth__input"
                                onChange={ handleInputChange }
                                value={ price }
                            />
                        </div>
                    </div>
                    <div className="product__item">
                        <div className="label__box">
                            <label name="product-category">Categoría del producto:</label>
                        </div>
                        <div className="input__box">
                            <select 
                                name="category"
                                onChange={ handleInputChange }
                                value={ category }
                            >
                                <option value="" disabled>Elige una opción</option>
                                <option value="woman">Mujer</option>
                                <option value="man">Hombre</option>
                                <option value="child">Niños</option>
                            </select>
                        </div>
                    </div>
                    <div className="product__item">
                        <div className="label__box">
                            <label name="product-amount">Cantidad del producto:</label>
                        </div>
                        <div className="input__box">
                            <input 
                                type="number" 
                                name="amount"
                                min="1"
                                placeholder="Ingresa la cantidad del producto"
                                className="auth__input"
                                onChange={ handleInputChange }
                                value={ amount }
                            />
                        </div>
                    </div>
                    <div className="product__item">
                        <div className="label__box">
                            <label name="product-name">Imagen del poducto:</label>
                        </div>
                        <div className="input__box">
                            <input 
                                type="file" 
                                name="url"
                                placeholder="Seleccione la imagen del proucto"
                                className="auth__input"
                                onChange={ handleFile }
                            />
                        </div>
                    </div>
                    <div className="btn__box container">
                        <button 
                            className="btn btn-primary"
                        >
                            Actualizar Producto
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
