import { useContext } from "react";
import { CartContext } from "../store/cart-context"
import Modal from "./Modal";
import CartItem from "./CartItem";

export default function CartModal( { modal, onSubmit } ) {
    const { items, total } = useContext( CartContext )

    const sumbit = !items.length == 0;

    return ( 
    <Modal 
      ref={modal} 
      title="Your Cart" 
      submit={sumbit}
      onSubmit={onSubmit}
    >
        <ul>
        { items.map( (item) =>
          <CartItem {...item} key={item.id} />
        ) }
        </ul>
        <p className="cart-total">
          ${total}
        </p>
        
    </Modal>
    );
};