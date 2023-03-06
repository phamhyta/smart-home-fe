import { useEffect, useState } from "react";
import { Col, Form, InputGroup, Row, Table } from "react-bootstrap";
import deviceApi from "../../api/deviceApi";
import AppButton from "../../general/components/appButton";
import ModalDeleteConfirm from "../../general/components/modalDeleteConfirm";
import BaseLayout from "../../general/layout";
import ModalCreateDevice from "./modalCreateDevice";
import "./style.scss";

function Devices(props) {
  const [showModalCreateDevice, setShowModalCreateDevice] = useState(false);
  const roomList = JSON.parse(localStorage.getItem("roomList"));
  const [selectedRoom, setSelectedRoom] = useState(roomList?.[0]);
  const [selectedDeviceId, setSelectedDeviceId] = useState(0);
  const [showModalDeleteDevice, setShowModalDeleteDevice] = useState(false);

  // const devices = [
  //     {
  //         name: "Sensor",
  //         status: 'on'
  //     },
  //     {
  //         name: "Light",
  //         status: "on"
  //     },
  //     {
  //         name: "Fan",
  //         status: "on"
  //     },
  //     {
  //         name: "Light 2",
  //         status: "off"
  //     },
  // ]
  const [devices, setDevices] = useState([]);
  const getDeviceList = async () => {
    try {
      const res = await deviceApi.getDeviceList({
        roomId: selectedRoom?.id,
      });

      setDevices(res?.data?.data);
      console.log(res);
    } catch (err) {}
  };

  const changeDeviceStatus = async (deviceId) => {
    try {
      const res = await deviceApi.toggleStatus(deviceId);
    } catch (err) {}
  };

  const deleteDevice = async () => {
    try {
      console.log("1");
      console.log(selectedDeviceId);
      const res = await deviceApi.deleteDevice(selectedDeviceId);
      setShowModalDeleteDevice(false);
    } catch (err) {}
  };

  useEffect(() => {
    getDeviceList();
  }, []);

  useEffect(() => {
    getDeviceList();
  }, [showModalCreateDevice, selectedRoom, showModalDeleteDevice]);

  return (
    <BaseLayout selected="devices">
      <div className="dashboard devices-screen">
        <div className="d-flex mb-1">
          <InputGroup className="w-50">
            <Form.Control className="search-bar" placeholder="Search..." />
            {/* <i class="fas fa-search"></i> */}
          </InputGroup>
          <p className="date-today w-50 text-end">Monday, March 6th 2023</p>
        </div>

        <Form.Group as={Row} className="mt-3">
          <Form.Label column sm="2">
            {" "}
            Choose Room{" "}
          </Form.Label>
          <Col sm="6">
            <Form.Select aria-label="Default select example">
              {roomList?.map((item) => (
                <option value={item?.id} onClick={() => setSelectedRoom(item)}>
                  {item?.name}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>
        <AppButton
          text="Add Device"
          beforeIcon={<i class="fas fa-plus me-2"></i>}
          className="btn-viewall d-flex mt-3"
          onClick={() => setShowModalCreateDevice(true)}
        />

        <Table striped hover className="mt-4 text-center">
          <thead className="text-center">
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {devices?.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td className="text-start">{item?.name} </td>
                <td>
                  {item?.status ? (
                    <Form.Check
                      type="switch"
                      id="disabled-custom-switch"
                      defaultChecked={true}
                      onChange={() => changeDeviceStatus(item?.id)}
                    />
                  ) : (
                    <Form.Check
                      type="switch"
                      id="disabled-custom-switch"
                      defaultChecked={false}
                      onChange={() => changeDeviceStatus(item?.id)}
                    />
                  )}
                </td>
                <td className="text-center">
                  <i
                    className="fas fa-pencil-alt"
                    onClick={(e) => {
                      e.preventDefault();
                      // handleEditRoom(item)
                    }}
                  ></i>
                  <i
                    className="fas fa-trash-alt ms-3"
                    onClick={() => {
                      //setDeleteRoom(item);
                      setSelectedDeviceId(item?.id);
                      setShowModalDeleteDevice(true);
                    }}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <ModalCreateDevice
        show={showModalCreateDevice}
        onHide={() => setShowModalCreateDevice(false)}
        roomId={selectedRoom?.id}
      />

      <ModalDeleteConfirm
        show={showModalDeleteDevice}
        onHide={() => {
          setShowModalDeleteDevice(false);
        }}
        title="Bạn có chắc chắn muốn xóa thiết bị này?"
        handleDeleteSubmit={deleteDevice}
      />
    </BaseLayout>
  );
}

export default Devices;
