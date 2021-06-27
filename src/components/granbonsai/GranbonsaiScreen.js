
import React from 'react';
import { Link } from 'react-router-dom';

import { CategoryBanner } from '../ui/CategoryBanner';
import { CardList } from './cards/CardList';

export const GranbonsaiScreen = () => {
    return (
        
        <div>

            <CategoryBanner 
                title={'Ropa Mujeres'}
            />

            <CardList />

            <div className="btn__box container">
                <Link 
                    to="/category/woman"
                    className="btn btn-primary"
                >
                    Ver Todos
                </Link >
            </div>
            
            <CategoryBanner 
                title={'Ropa Hombres'}
                category={'man'}
            />

            <CardList />

            <div className="btn__box container">
                <Link 
                    to="/category/man"
                    className="btn btn-primary"
                >
                    Ver Todos
                </Link >
            </div>

            <CategoryBanner 
                title={'Ropa Niños'}
                category={'child'}
            />

            <CardList />

            <div className="btn__box container">
                <Link 
                    to="/category/child"
                    className="btn btn-primary"
                >
                    Ver Todos
                </Link >
            </div>
        </div>
    )
}
