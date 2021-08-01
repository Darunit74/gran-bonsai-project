
import React from 'react';

export const OrderScreen = () => {
    return (
        <div className="order__main">
            <div className="order__main-box">
                <div className="order__main-header">
                    <h4>Pedidos</h4>
                </div>
                <div className="order__list">
                    <ul>
                        <li>
                            <div className="order__item">
                                    <h4>Pedido de: Test</h4>
                                    <h4 className="products__item-state products__item-state-pending">Pendiente</h4>
                                    <div className="products__item-actions">
                                        <i className="fas fa-cogs"></i>
                                        <i className="fas fa-trash"></i>
                                    </div>
                            </div>
                        </li>
                        <li>
                            <div className="order__item">
                                    <h4>Pedido de: Test</h4>
                                    <h4 className="products__item-state products__item-state-pending">Pendiente</h4>
                                    <div className="products__item-actions">
                                        <i className="fas fa-cogs"></i>
                                        <i className="fas fa-trash"></i>
                                    </div>
                            </div>
                        </li>
                        <li>
                            <div className="order__item">
                                    <h4>Pedido de: Test</h4>
                                    <h4 className="products__item-state products__item-state-pending">Pendiente</h4>
                                    <div className="products__item-actions">
                                        <i className="fas fa-cogs"></i>
                                        <i className="fas fa-trash"></i>
                                    </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
