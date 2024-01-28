
import { Link, useParams } from 'react-router-dom'
export default function ProductDefail() {
    const params = useParams();


    return ( <>
        <h1> Product Details!  </h1>
        { params.productId }
        <p> <Link to=".."  relative='path' > Back </Link> </p>
    </> )
}