import { useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import roomApi from "../../../api/roomApi";

function ModalUpdateRoom (props) {
    const {show, onHide, updateRoom} = props
    const [tempData, setTempData] = useState(updateRoom)

    const handleChange = (e) => {
        setTempData({
            ...tempData,
            [e.target.name]: e.target.value
        })
    }

    const handleUpdateSubmit = async () => {
        try {
            const res = await roomApi.updateRoom({
                ...tempData,
                id: updateRoom?.id
            })
            toast('Successfully updated room', {type: toast.TYPE.SUCCESS})
            onHide()
        } catch (err) {
            toast('Error! Try again', {type: toast.TYPE.ERROR})
            onHide()
        }
    }

    return(
        <Modal show={show} onHide={onHide}>
            <Modal.Header className='px-5 py-3 d-flex align-items-center justify-content-center'>
                <Modal.Title className='modal-title'>
                    Update Room Information
                </Modal.Title>
            </Modal.Header>
            
            <Modal.Body className='bg-light modal-content'>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm="3"> Name </Form.Label>
                        <Col sm="9">
                            <Form.Control type='text' name="name" defaultValue={updateRoom?.name} onChange={(e) => handleChange(e)} />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button className="btn-blue" onClick={handleUpdateSubmit}>Update</Button>
                <Button className="btn-light" onClick={onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalUpdateRoom;