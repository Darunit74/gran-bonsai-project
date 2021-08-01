
import { useSelector } from "react-redux";

export const GetProductById = ( id ) => {

    const products = useSelector( state => state.products );

    return products.filter( product => product.id === id );
}