import Modal from "./Modal"

export default function MessageModal( {modal, title, message } ) {
    return (
        <Modal ref={modal} title={title} >
            <> <p> {message} </p> </>
        </Modal>
    )
}