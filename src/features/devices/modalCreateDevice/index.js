import { useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";

function ModalCreateDevice (props) {
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
                    Create New Device
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
                        <Form.Label column sm="3"> Description </Form.Label>
                        <Col sm="9">
                            <Form.Control type='text' name="description" value={tempData?.description} onChange={(e) => handleChange(e)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className='mt-3'>
                        <Form.Label column sm="3"> Type </Form.Label>
                        <Col sm="9">
                            <Form.Select aria-label="Default select example">
                                <option value="1">Light</option>
                                <option value="2">Fan</option>
                            </Form.Select>
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

export default ModalCreateDevice;