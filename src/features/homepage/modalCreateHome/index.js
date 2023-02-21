import { useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";

function ModalCreateHome (props) {
    const {show, onHide} = props
    const [tempData, setTempData] = useState({})

    const handleChange = (e) => {
        setTempData({
            ...tempData,
            [e.target.name]: e.target.value
        })
    }

    const handleCreateSubmit = () => {

    }

    return(
        <Modal show={show} onHide={onHide}>
            <Modal.Header className='px-5 py-3 d-flex align-items-center justify-content-center'>
                <Modal.Title className='modal-title'>
                    Create New Home
                </Modal.Title>
            </Modal.Header>
            
            <Modal.Body className='bg-light modal-content'>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm="3"> Name </Form.Label>
                        <Col sm="9">
                            <Form.Control type='text' name="name" value={tempData?.name} onChange={(e) => handleChange(e)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mt-3">
                        <Form.Label column sm="3"> Address </Form.Label>
                        <Col sm="9">
                            <Form.Control type='text' name="address" value={tempData?.address} onChange={(e) => handleChange(e)} />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button className="btn-blue" onClick={handleCreateSubmit}>Create</Button>
                <Button className="btn-light" onClick={onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalCreateHome;