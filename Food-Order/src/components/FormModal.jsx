import { useContext, useState, useRef } from "react";
import { CartContext } from "../store/cart-context"
import Modal from "./Modal";
import FormInput from "./FormInput";
import { uploadOrder } from "../http";
import MessageModal from './MessageModal'

const baseFormObj = {
    name: '',
    email: '',
    street: '',
    "postal-code": '',
    city: ''
}

export default function FormModal( {modal} ) {
    const modalMessage = useRef();

    const { total, items, clearItems } = useContext( CartContext )

    const [ formObj, setFormObj ] = useState( {
        ...baseFormObj
    } )
    const [ modalBody, setModalBody ] = useState({
        title: '',
        message: ''
    });
    

    function handleChangeValue( name, value ) {
        setFormObj( (updatedFormObj) => {
            const newFormObj = {...updatedFormObj}
            newFormObj[name] = value;
            return newFormObj;
        } )
    }

    async function handleSaveForm() {

        try {
            await uploadOrder(  { customer: formObj, items: items } );
            handleOpenMessageModal( {
                title: 'Success',
                message: `Your order was submitted successfully.
                We Will get back to you with more details via email within the next few minutes.`
            } )
            setFormObj( { ...baseFormObj } );
            clearItems();

        } catch (error) {
            handleOpenMessageModal( {
                title: 'Error',
                message: error.message || 'Failed to add Orders.' 
            } )
        }
    }

    function handleOpenMessageModal( { title, message } ) {
        setModalBody( {
            title: title,
            message : message
        } )
        modal.current.close()
        modalMessage.current.open();
    }

    return(
        <>
            <Modal 
                ref={modal} 
                title="Checkout" 
                submit={true} 
                onSubmit={handleSaveForm}
            >
                <p> Total Amount: ${total} </p>
                <FormInput 
                    title="Full Name"
                    name="name"
                    onHandleChangeForm={handleChangeValue}
                    formObj={formObj}
                />
                <FormInput 
                    title="E-Mail Address"
                    name="email"
                    onHandleChangeForm={handleChangeValue}
                    formObj={formObj}
                />
                <FormInput 
                    title="Street"
                    name="street"
                    onHandleChangeForm={handleChangeValue}
                    formObj={formObj}
                />
                <div className="control-row">
                <FormInput 
                    title="Postal Code"
                    name="postal-code"
                    onHandleChangeForm={handleChangeValue}
                    formObj={formObj}
                />
                <FormInput 
                    title="City"
                    name="city"
                    onHandleChangeForm={handleChangeValue}
                    formObj={formObj}
                />
                </div>
            </Modal>
            <MessageModal modal={modalMessage} title={modalBody.title} message={modalBody.message} />
        </>
    )

}