import { useContext } from "react"
import { CartContext } from "../store/cart-context"


export default function Meal( { id, image, name, price, description } ) {
    
    const { addItemToCart } = useContext( CartContext )

    function handleOnClickAddCart() {
        addItemToCart( id );
    }
    
    return ( <div className="meal-item" >
        <img src={`http://localhost:3000/${image}`} alt={name} /> 
        <h3> {name} </h3>
        <div > 
            <p className="meal-item-price"> ${price} </p>
            <p className="meal-item-description">
                {description}
            </p>
        </div>
        <p className="meal-item-actions" > 
            <button className="button" onClick={handleOnClickAddCart} >
                Add to Cart 
            </button>
        </p>
    </div> 
    )
}