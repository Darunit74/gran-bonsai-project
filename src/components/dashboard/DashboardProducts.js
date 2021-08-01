
import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCardList } from './cards/ProductCardList';

export const DashboardProducts = () => {
    return (
        <>
                <div className="products__header">
                    <h4>Productos</h4>
                </div>
                <div className="products__search">
                    <form>
                        <input 
                            name="nombre"
                            className="auth__input"
                            placeholder="Introduzca el titulo del producto"
                        />

                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Buscar
                        </button>
                    </form>

                    <Link
                        to="/dashboard/create"
                        className="btn btn-primary"
                    >
                        <i className="fas fa-upload"></i>
                    </Link>
                </div>
                <div className="products__list">
                    <div className="products__list-header">
                        <h4 className="title__dashboard">Título: </h4>
                        <h4 className="category__dashboard">Categoría: </h4>
                        <h4 className="state__dashboard">Estado: </h4>
                        <h4 className="action__dashboard">Acciones: </h4>
                    </div>
                    <div className="products__list-content">
                        <ProductCardList />
                    </div>
                </div>
        </>
    )
}
