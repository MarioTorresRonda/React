import { Link } from "react-router-dom";

const PRODUCTS = [
    { id: '1', title: 'PRODUCT 1' },
    { id: '2', title: 'PRODUCT 2' },
    { id: '3', title: 'PRODUCT 3' } 
];

function ProductPage() {
    return (
        <> 
        <h1> Products </h1>
        <ul>
        { PRODUCTS.map( (item) => {
            return <li> <Link to={`${item.id}`} > {item.title} </Link> </li>
        } ) }
        </ul>
        </>
    )
}
export default ProductPage;
