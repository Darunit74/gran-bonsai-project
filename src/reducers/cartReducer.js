
import { types } from "../types/types";

const initialState = {
    totalPrice: 0,
    products: []
}

// //     cart: {
//             totalPrice: 121212,
//             products:[
//               {
// //             id: 'aasdadad',
// //             amount: 1,
//                size: M,
//                price: 1231313
// //           }
//             ]
//             }


export const cartReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.productAddNew:

            return {
                totalPrice: action.payload.totalPrice,
                products: [
                    ...state.products,
                    action.payload.product
                ]
            };

        case types.cartRemoveProduct:
            return {
                ...state,
                products: state.products.filter( product => product.productId !== action.payload )
            };

        case types.cartUpdatePriceTotal:
            return {
                ...state,
                totalPrice: action.payload
            }

        case types.cartUpdateAmount:
            return {
                ...state,
                products: state.products.map( product => product.productId === action.payload.productId ? action.payload : product  )
            }
    
        default:
            return state;
    }

}