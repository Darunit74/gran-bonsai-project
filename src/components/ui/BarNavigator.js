
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { startLogout } from '../../actions/auth';


export const BarNavigator = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );
    const { products } = useSelector(state => state.cart);

    const handleGoToHome = () => {
        history.push('/');
    }

    const handleGoToCart = () => {
        history.push('/cart');
    }

    const handleHamburguerNav = () => {
        document.querySelector('.hamburguer__nav').classList.toggle('active-bar');
    } 

    const handleLogout = () => {
        dispatch( startLogout() );
    }


    return (
        <div className="header__bar">
            <div className="container">
                <nav className="main__nav">
                    <li 
                        className="navigation__icon-box"
                        onClick={ handleHamburguerNav }
                    >
                        <span className="navigation__icon"></span>
                    </li>
                    <li 
                        className="header__bar-title"
                        onClick={ handleGoToHome }
                    >
                        <h1>Gran <br/><span>Bonsai</span></h1>
                    </li>
                    <li className="header__bar-cart-icon">
                        {
                            name && 
                            ( 
                                <>
                                    <i className="fas fa-user"></i>
                                    <h5>{ name }</h5>
                                    <i 
                                        className="fas fa-sign-out-alt"
                                        onClick={ handleLogout }
                                    >
                                    </i>
                                </>
                            )
                        }
                        <i 
                            className="fas fa-shopping-cart"
                            onClick={ handleGoToCart }
                        >
                            <span
                                className="amount__clothes"
                            >
                                { products.length }
                            </span>
                        </i>
                    </li>
                </nav>

                <nav className="hamburguer__nav active-bar">
                    <li>
                        <NavLink
                            exact
                            to="/"
                            activeClassName="active"
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/category/woman"
                            activeClassName="active"
                        >
                            Ropa Mujeres
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/category/man"
                            activeClassName="active"
                        >
                            Ropa Hombres
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/category/child"
                            activeClassName="active"
                        >
                            Ropa Niños
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/cart"
                            activeClassName="active"
                        >
                            Ir al Carrito
                        </NavLink>
                    </li>
                    {
                        name &&
                        (
                            <li>
                                <NavLink
                                    exact
                                    to="/orders"
                                    activeClassName="active"
                                >
                                    Tus Pedidos
                                </NavLink>
                            </li>
                        )
                    }
                    <li>
                        <NavLink
                            exact
                            to="/about"
                            activeClassName="active"
                        >
                            ¿Quiénes somos?
                        </NavLink>
                    </li>
                    {
                        name ? 
                        (<></>)
                        :
                        (
                            <li>
                                <NavLink
                                    exact
                                    to="/auth"
                                    activeClassName="active"
                                >
                                    Iniciar Sesión
                                </NavLink>
                        </li>
                        )
                    }
                </nav>
            </div>
        </div>
    )
}
