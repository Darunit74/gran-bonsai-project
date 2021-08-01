
import { types } from "../types/types";


export const cartAddNewProduct = ( totalPrice, product ) => ({
    type: types.productAddNew,
    payload: {
        totalPrice,
        product
    }
});

export const removeCartProduct = ( id ) => ({
    type: types.cartRemoveProduct,
    payload: id
});

export const updatePriceTotalCart = ( totalPrice ) => ({
    type: types.cartUpdatePriceTotal,
    payload: totalPrice
});

export const updateAmountTotalCart = ( product ) => ({
    type: types.cartUpdateAmount,
    payload: product
});