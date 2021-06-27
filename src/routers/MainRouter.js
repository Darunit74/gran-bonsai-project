
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CategoryProducts } from '../components/granbonsai/CategoryProducts'
import { GranbonsaiScreen } from '../components/granbonsai/GranbonsaiScreen'
import { BarNavigator } from '../components/ui/BarNavigator'

export const MainRouter = () => {
    return (
        <>
            <BarNavigator />

             <div>
                <Switch>
                    <Route exact path="/"  component={ GranbonsaiScreen }/>
                    <Route exact path="/category/:categoryName"  component={ CategoryProducts }/>
                    <Route exact path="/products/:productId"  component={ CategoryProducts }/>

                    <Redirect to="/" />
                </Switch>
            </div>
        </>
    )
}
