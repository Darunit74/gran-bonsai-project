
import { useSelector } from "react-redux";

export const GetProductByCategory = ( category ) => {

    const products = useSelector( state => state.products );

    const test = products.filter( product => product.category === category );

    return test;
}