import logoHeaderImg from '../assets/logo.jpg';
import CartModal from './CartModal';
import { useRef, useContext } from 'react';
import { CartContext } from "../store/cart-context"
import FormModal from './FormModal';



export default function Header() {

    const { items } = useContext( CartContext )
    const cartModal = useRef();
    const formModal = useRef();    

    function handleOpenCartModal() {
        cartModal.current.open();
    }

    function handleOpenFormModal() {
        cartModal.current.close();
        formModal.current.open();
    }

    return ( 
    <div id="main-header">
        <div id="title"> 
            <img src={logoHeaderImg} />
            <h1> REACTFOOD </h1>
        </div>
        <button className='text-button' onClick={handleOpenCartModal} >
            Cart( {items.length} )
        </button>
        <CartModal modal={cartModal} onSubmit={handleOpenFormModal} />
        <FormModal modal={formModal} />
    </div> 
    )
}