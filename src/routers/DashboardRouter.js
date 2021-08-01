
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DashboardProduct } from '../components/dashboard/DashboardProduct';
import { DashboardProductCreate } from '../components/dashboard/DashboardProductCreate';

import { DashboardProducts } from '../components/dashboard/DashboardProducts'
import { OrderProducs } from '../components/dashboard/OrderProducs';
import { OrderScreen } from '../components/dashboard/OrderScreen';
import { Sidebar } from '../components/dashboard/Sidebar';

export const DashboardRouter = () => {
    return (
        <div className="dashboard__main">
            <Sidebar />
            <div className="products__main">
                <div className="products__box">
                    <Switch>
                        <Route exact path="/dashboard/products" component={ DashboardProducts }/>
                        <Route exact path="/dashboard/products/:productId" component={ DashboardProduct }/>
                        <Route exact path="/dashboard/create" component={ DashboardProductCreate }/>
                        <Route exact path="/dashboard/order" component={ OrderScreen }/>
                        <Route exact path="/dashboard/order/:orderId" component={ OrderProducs }/>

                        <Redirect to="/dashboard/products" />
                    </Switch>
                </div>
            </div>
        </div>
    )
}
