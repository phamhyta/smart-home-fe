import { Modal, Button } from "react-bootstrap"
import "./styles.scss"

export default function ModalDeleteConfirm (props) {
    const {title, show, onHide, handleDeleteSubmit} = props
    return (
        <Modal show={show} onHide={onHide} className="modal-delete-confirm" centered>
             <Modal.Header className='px-5 py-3 d-flex align-items-center justify-content-center'>
                <Modal.Title className='modal-title'>
                    {title}
                </Modal.Title>
            </Modal.Header>
            
            <Modal.Body className='bg-light modal-content'>
                <i class="fas fa-trash-alt"></i>
            </Modal.Body>

            <Modal.Footer>
                <Button className="btn-del" onClick={handleDeleteSubmit}>Xóa</Button>
                <Button className="btn-light" onClick={onHide}>Hủy</Button>
            </Modal.Footer>
        </Modal>
    )
}