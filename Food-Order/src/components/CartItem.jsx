export default function CartItem( {name, quantity, price} ) {
    return (
        <li className="cart-item" >
            <p> {name} - {quantity} x ${price}</p>
            <div className="cart-item-actions">
                <button>-</button>
                {quantity}
                <button>+</button>
            </div>
        </li>
    )
}