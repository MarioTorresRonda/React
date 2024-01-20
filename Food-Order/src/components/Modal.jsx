import { useRef, useImperativeHandle, forwardRef, useContext } from "react";

const Modal = forwardRef( function Modal( {children, title, submit, onSubmit }, ref ) {
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
            <h2> {title} </h2>
            {children}
            <div className="modal-actions">
                <button onClick={() => { modal.current.close()} } className="text-button"> Close </button>
                { submit && <button onClick={onSubmit} className="button"> Go to Checkout </button> }
            </div>
        </dialog> 
    );

} );

export default Modal;