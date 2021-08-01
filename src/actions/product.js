
import Swal from "sweetalert2";

import { types } from "../types/types";


import { db } from "../firestore/firestore-config";
import { uploadFile } from "../helpers/uploadFile";
import { loadProducts } from "../helpers/loadProducts";

export const startAddNewProduct = ( product, file ) => {

    return async( dispatch ) => {

        try {
            Swal.fire({
                title: 'Creando producto...',
                text: 'Porfavor espere...',
                willOpen: () => {
                    Swal.showLoading();
                }
            });
    
            const fileUrl = await uploadFile( file );
            product.url = fileUrl;

            const doc = await db.collection(`clothes__database`).add( product ); 
            dispatch( AddNewProduct( doc.id, product ) );
        
            Swal.close();

            Swal.fire({
                icon: 'success',
                title: 'Mensaje',
                text: 'Producto creado satisfactoriamente'
            });  

        } catch (error) {
            console.log(error)
        }
    }
}

export const startLoadingProducts = () => {

    return async( dispatch ) => {
        const products = await loadProducts();
        dispatch( setProducts( products ) );
    }
}

export const startSavingProducts = ( product, file ) => {

    return async( dispatch ) => {

        try {

            Swal.fire({
                title: 'Actualizando producto...',
                text: 'Porfavor espere...',
                willOpen: () => {
                    Swal.showLoading();
                }
            });

            if( file ) {
                const fileUrl = await uploadFile( file );
                product.url = fileUrl;
            }

            const productToFirestore = { ...product };
            delete productToFirestore.id;

            await db.doc(`clothes__database/${ product.id }`).update( productToFirestore );
            dispatch( refreshProduct( product ) );

            Swal.close();

            Swal.fire('Modificado correctamente', product.title, 'success');
            
        } catch (error) {
            console.log(error)
        }

    }   
}

export const startDeletingNotes = ( id ) => {

    return async( dispatch ) => {

        try {

            Swal.fire({
                title: 'Eliminando producto...',
                text: 'Porfavor espere...',
                willOpen: () => {
                    Swal.showLoading();
                }
            });

            await db.doc(`clothes__database/${ id }`).delete();
            dispatch( deleteProduct( id ) );

            Swal.close();

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error
            });  
        }

    }
}

export const deleteProduct = ( id ) => ({
    type: types.productDeleted, 
    payload: id
});

export const refreshProduct = ( product ) => ({
    type: types.productUpdate,
    payload: product
    
});

export const setProducts = ( products ) => ({
    type: types.productLoad,
    payload: products
});

export const AddNewProduct = ( id, product ) => ({
    type: types.productAddNew,
    payload: {
        id, 
        ...product
    }
})