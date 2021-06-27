
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';


export const BarNavigator = () => {

    const history = useHistory();

    const handleGoToHome = () => {
        history.push('/');
    }


    return (
        <div className="header__bar">
            <div className="container">
                <nav className="main__nav">
                    <li className="navigation__icon-box">
                        <span className="navigation__icon"></span>
                    </li>
                    <li 
                        className="header__bar-title"
                        onClick={ handleGoToHome }
                    >
                        <h1>Gran <br/><span>Bonsai</span></h1>
                    </li>
                    <li className="header__bar-cart-icon">
                        <i className="fas fa-shopping-cart"></i>
                    </li>
                </nav>

                <nav className="hamburguer__nav">
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
                            to="/carrito"
                            activeClassName="active"
                        >
                            Ir al Carrito
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/about"
                            activeClassName="active-nav"
                        >
                            ¿Quiénes somos?
                        </NavLink>
                    </li>
                </nav>
            </div>
        </div>
    )
}
