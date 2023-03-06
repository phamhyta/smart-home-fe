import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { toast } from "react-toastify";

function ModalUpdateDevice(props) {
  const { show, onHide, updateDevice } = props;
  const [tempData, setTempData] = useState(updateDevice);

  const handleChange = (e) => {
    setTempData({
      ...tempData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateSubmit = async () => {
    try {
      const res = await roomApi.updateRoom({
        ...tempData,
        id: updateDevice?.id,
      });
      toast("Successfully updated device", { type: toast.TYPE.SUCCESS });
      onHide();
    } catch (err) {
      toast("Error! Try again", { type: toast.TYPE.ERROR });
      onHide();
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header className="px-5 py-3 d-flex align-items-center justify-content-center">
        <Modal.Title className="modal-title">
          Update Device Information
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-light modal-content">
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm="3">
              {" "}
              Name{" "}
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                name="name"
                defaultValue={updateDevice?.name}
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button className="btn-blue" onClick={handleUpdateSubmit}>
          Update
        </Button>
        <Button className="btn-light" onClick={onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalUpdateDevice;
