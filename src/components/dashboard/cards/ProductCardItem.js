import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startDeletingNotes } from '../../../actions/product';

export const ProductCardItem = ({ 
    title, 
    category,
    id
 }) => {

    const dispatch = useDispatch();

    let categorySpanish = '';

    if( category === 'woman' ) {
        categorySpanish = 'Mujer';

    }else if( category === 'man' ) {
        categorySpanish = 'Hombre';

    }else {
        categorySpanish = 'Niños';

    }

    const handleDeleteProduct = () => {
        dispatch( startDeletingNotes( id ) );
    }

    return (
        <div className="products__item">
            <h4>{ title }</h4>
            <h4>{ categorySpanish }</h4>
            <h4 className="products__item-state products__item-state-on">Publicado</h4>
            <div className="products__item-actions">
                <Link
                    to={ `/dashboard/products/${ id }` }
                >
                    <i className="fas fa-cogs"></i> 
                </Link>

                <i 
                    onClick={ handleDeleteProduct }
                    className="fas fa-trash"
                ></i>
            </div>
        </div>
    )
}
