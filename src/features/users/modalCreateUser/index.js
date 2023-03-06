import { useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import userApi from "../../../api/userApi";
import { toast } from "react-toastify";

function ModalCreateUser (props) {
    const {show, onHide} = props
    const [tempData, setTempData] = useState({
        roleId: 2
    })
    const currentHome = JSON.parse(localStorage.getItem('currentHome'))
    const handleChange = (e) => {
        setTempData({
            ...tempData,
            [e.target.name]: e.target.value
        })
    }

    const handleCreateSubmit = async () => {
        try {
            const res = await userApi.createUser(tempData, {
                homeId: currentHome?.id
            })
            toast('Successfully Created new user', {type: toast.TYPE.SUCCESS})
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
                    Create New User
                </Modal.Title>
            </Modal.Header>
            
            <Modal.Body className='bg-light modal-content'>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm="3"> Fullname </Form.Label>
                        <Col sm="9">
                            <Form.Control type='text' name="fullname" onChange={(e) => handleChange(e)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mt-3">
                        <Form.Label column sm="3"> Username </Form.Label>
                        <Col sm="9">
                            <Form.Control type='text' name="username" onChange={(e) => handleChange(e)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mt-3">
                        <Form.Label column sm="3"> Password </Form.Label>
                        <Col sm="9">
                            <Form.Control type='password' name="password" onChange={(e) => handleChange(e)} />
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

export default ModalCreateUser;