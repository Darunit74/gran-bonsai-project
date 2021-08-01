
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <div className="sidebar__main">
            <div className="info__user--box">
                <div className="info__user-img">

                </div>
                <div className="info__user-content">
                    <h4>Darkuz</h4>
                    <p>Administrador</p>
                </div>
            </div>

            <div className="dashboard__menu--box">
                <h3>Menú</h3>
                <nav className="hamburguer__nav dashboard__menu">
                    <li>
                        <NavLink
                            to="/dashboard/products"
                            activeClassName="active"
                        >
                            <i className="fas fa-book"></i>
                            Productos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/order"
                            activeClassName="active"
                        >
                            <i className="fas fa-receipt"></i>
                            Pedidos
                        </NavLink>
                    </li>
                </nav>
            </div>
        </div>
    )
}
