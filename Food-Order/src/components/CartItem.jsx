import { useContext } from "react"
import { CartContext } from "../store/cart-context"

export default function CartItem( {id, name, quantity, price} ) {

    const { onUpdateCartItemQuantity } = useContext( CartContext )

    function handleOnClickButton( quantity ) {
        onUpdateCartItemQuantity( id, quantity );
    }
    
    return (
        <li className="cart-item" >
            <p> {name} - {quantity} x ${price}</p>
            <div className="cart-item-actions">
                <button onClick={() => { handleOnClickButton(-1)} } >-</button>
                {quantity}
                <button onClick={() => { handleOnClickButton(1)} }>+</button>
            </div>
        </li>
    )
}