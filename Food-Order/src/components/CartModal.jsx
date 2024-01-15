import { useRef, useImperativeHandle, forwardRef, useContext } from "react";
import { CartContext } from "../store/cart-context"
import CartItem from "./CartItem";
const CartModal = forwardRef( function Modal( {}, ref ) {
    const { items } = useContext( CartContext )
    const modal = useRef();

    const total = items.reduce( (accumulator, currentValue) => accumulator + ( Number(currentValue.price) *  Number(currentValue.quantity) ), 0 );

    useImperativeHandle(ref, () => {
      return {
        open: () => {
          modal.current.showModal();
        },
        close: () => {
          modal.current.close();
        }
      };
    });

    function handleOnClose() {
      modal.current.close();
    }

    return ( 
    <dialog className="cart modal" ref={modal} >
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
          <button onClick={handleOnClose} className="text-button"> Close </button>
          <button className="button"> Go to Checkout </button>
        </div>
    </dialog> 
    );
} );

export default CartModal;