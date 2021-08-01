
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { firebase } from '../firestore/firestore-config';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

import { PublicRouter } from './PublicRouter';
import { AuthRouter } from './AuthRouter';
import { MainRouter } from './MainRouter';
import { login } from '../actions/auth';
import { PrivateRouter } from './PrivateRouter';
import { DashboardRouter } from './DashboardRouter';
import { startLoadingProducts } from '../actions/product';

export const AppRouter = () => {    

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    

    useEffect( () => {

        firebase.auth().onAuthStateChanged( user => {

            dispatch( startLoadingProducts() );


            if( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );

                setIsLoggedIn( true );

            }else {
                setIsLoggedIn( false );
            }

            setChecking( false );
            
        } );


    }, [ dispatch, setChecking ]);


    if( checking ) {
        return (
            <div className="loadingPage">
                <h1 className="journal__app-title">Gran Bonsai</h1>
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }

    return (
        <Router>
            <div>

                <Switch>
                    <PublicRouter
                        path="/auth"
                        isLoggedIn={ isLoggedIn }
                        component={ AuthRouter }
                    />

                    <PrivateRouter 
                        path="/dashboard"
                        isLoggedIn={ isLoggedIn }
                        component={ DashboardRouter }
                    />
                    
                    <Route path="/" component={ MainRouter }/>

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
