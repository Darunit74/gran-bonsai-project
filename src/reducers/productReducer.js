import { types } from "../types/types";


export const productReducer = ( state = [ ], action ) => {

    switch ( action.type ) {
        case types.productAddNew:
            
            return [
                action.payload,
                ...state
            ];

        case types.productLoad:

            return action.payload;

        case types.productUpdate:
            return state.map( product => product.id === action.payload.id ? action.payload : product  );
    
        case types.productDeleted:
            return state.filter( product => product.id !== action.payload );
    
        default:
            return state;
    }

}