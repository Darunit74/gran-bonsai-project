
import React from 'react';
import { useParams } from 'react-router-dom';

import { CategoryBanner } from '../ui/CategoryBanner';
import { CardList } from './cards/CardList';

export const CategoryProducts = () => {

    const { categoryName } = useParams();
    let title = "";

    if( categoryName === "woman" ) {
        title = "Ropa Mujeres"
    }else if( categoryName === "man" ) {
        title = "Ropa Hombres"
    }else if( categoryName === "child" ) {
        title = "Ropa Niños"
    }


    return (
        <div>
            <CategoryBanner 
                title={ title }
                category={ categoryName }
            />

            <CardList 
                category={ categoryName }
                limit
            />
        </div>
    )
}
