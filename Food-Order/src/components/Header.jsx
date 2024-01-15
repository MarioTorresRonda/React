import logoHeaderImg from '../assets/logo.jpg';
import CartModal from './CartModal';
import { useRef, useImperativeHandle, forwardRef, useContext } from 'react';
import { CartContext } from "../store/cart-context"
export default function Header() {

    const { items } = useContext( CartContext )
    const modal = useRef();

    function handleOpenModal() {
        modal.current.open();
    }

    return ( 
    <div id="main-header">
        <div id="title"> 
            <img src={logoHeaderImg} />
            <h1> REACTFOOD </h1>
        </div>
        <button className='text-button' onClick={handleOpenModal} >
            Cart( {items.length} )
        </button>
        <CartModal ref={modal} />

    </div> 
    )
}