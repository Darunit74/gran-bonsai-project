import { db } from "../firestore/firestore-config"


export const loadProducts = async () => {

    const productsSnap = await db.collection(`clothes__database`).get();
    const products = [];

    productsSnap.forEach( snapHijo => {
        products.push({
            id: snapHijo.id,
            ...snapHijo.data()
        });
    } )

    return products;

}