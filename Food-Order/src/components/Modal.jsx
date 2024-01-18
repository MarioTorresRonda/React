import { useRef, useImperativeHandle, forwardRef, useContext } from "react";

const Modal = forwardRef( function Modal( {children}, ref ) {
    const modal = useRef();

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

    return ( 
        <dialog className="cart modal" ref={modal} >
            {children}
        </dialog> 
    );

} );

export default Modal;