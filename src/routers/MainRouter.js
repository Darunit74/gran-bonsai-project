
import React from 'react';

import { 
    Redirect, 
    Route, 
    Switch } 
from 'react-router-dom';


import { AboutScreen } from '../components/granbonsai/AboutScreen';
import { CartProducts } from '../components/granbonsai/CartProducts'
import { CategoryProducts } from '../components/granbonsai/CategoryProducts'
import { DetailsProduct } from '../components/granbonsai/DetailsProduct'
import { GranbonsaiScreen } from '../components/granbonsai/GranbonsaiScreen'
import { OrderScreen } from '../components/granbonsai/OrderScreen';
import { BarNavigator } from '../components/ui/BarNavigator'
import { FooterComponent } from '../components/ui/FooterComponent';

export const MainRouter = () => {
    return (
        <>
            <BarNavigator />

             <div>
                <Switch>
                    <Route exact path="/"  component={ GranbonsaiScreen }/>
                    <Route exact path="/category/:categoryName"  component={ CategoryProducts }/>
                    <Route exact path="/products/:productId"  component={ DetailsProduct }/>
                    <Route exact path="/cart"  component={ CartProducts }/>
                    <Route exact path="/about"  component={ AboutScreen }/>
                    <Route exact path="/orders"  component={ OrderScreen }/>

                    <Redirect to="/" />
                </Switch>
            </div>

            <FooterComponent />
        </>
    )
}
