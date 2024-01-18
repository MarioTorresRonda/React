import { useRef, useImperativeHandle, forwardRef, useContext } from "react";
import { CartContext } from "../store/cart-context"
import Modal from "./Modal";
import CartItem from "./CartItem";

export default function CartModal( { modal } ) {
    const { items } = useContext( CartContext )

    const total = items.reduce( (accumulator, currentValue) => accumulator + ( Number(currentValue.price) *  Number(currentValue.quantity) ), 0 );

    return ( 
    <Modal ref={modal}>
        <h2> Your Cart </h2>
        <ul>
        { items.map( (item) =>
          <CartItem {...item} key={item.id} />
          ) }
        </ul>
        <p className="cart-total">
          ${total}
        </p>
        <div className="modal-actions">
          <button onClick={() => { modal.current.close()} } className="text-button"> Close </button>
          <button className="button"> Go to Checkout </button>
        </div>
    </Modal>
    );
};