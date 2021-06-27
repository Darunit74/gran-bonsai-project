
import React from 'react';

export const CategoryBanner = ({ title, category = '' }) => {

    const titleArray = title.split(' ');

    return (
        <div className={ `category__banner ${ category }` }>
            <div className="container">
                <div className={ `category__banner-content ${ category }` }>
                    <h2>{ titleArray[0] }<br/>{ titleArray[1] }</h2>
                </div>
            </div>
        </div>
    )
}
