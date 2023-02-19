import logo from '../../assets/logo.png'
import { Form, InputGroup, Tabs, Tab, Table, Row, Col } from 'react-bootstrap';
import './style.scss'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import BaseLayout from '../../general/layout';
import { useState } from 'react';
import AppButton from '../../general/components/appButton';
import ModalCreateDevice from './modalCreateDevice';
import ModalDeleteConfirm from '../../general/components/modalDeleteConfirm';

function Devices () {
    const [showModalCreateDevice, setShowModalCreateDevice] = useState(false)

    const devices = [
        {
            name: "Sensor",
            status: 'on'
        },
        {
            name: "Light",
            status: "on"
        },
        {
            name: "Fan",
            status: "on"
        },
        {
            name: "Light 2",
            status: "off"
        },
    ]

    const [showModalDeleteDevice, setShowModalDeleteDevice] = useState(false)
    return (
        <BaseLayout selected='devices'>
            <div className='dashboard devices-screen'>
                <div className='d-flex mb-1'>
                    <InputGroup className='w-50'>
                        <Form.Control className='search-bar' placeholder='Search...' />
                        {/* <i class="fas fa-search"></i> */}
                    </InputGroup>       
                    <p className='date-today w-50 text-end'>Monday, January 9th 2023</p>
                </div>
                {/* <Tabs
                    defaultActiveKey="living"
                    id="uncontrolled-tab-example"
                    className="mb-3 d-flex flex-row"
                >
                    <Tab eventKey="living" title="Living Room">
                    </Tab>
                    <Tab eventKey="bedroom" title="Bedroom">
                    </Tab>
                    <Tab eventKey="kitchen" title="Kitchen">
                    </Tab>
                </Tabs>           */}
               
                <Form.Group as={Row} className='mt-3'>
                    <Form.Label column sm="2"> Choose Room </Form.Label>
                    <Col sm="6">
                        <Form.Select aria-label="Default select example">
                            <option value="1">Kitchen</option>
                            <option value="2">Bedroom</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <AppButton
                    text='Add Device'
                    beforeIcon={<i class="fas fa-plus me-2"></i>}
                    className='btn-viewall d-flex mt-3'
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
                                <td>{index+1}</td>  
                                <td className="text-start">{item?.name} </td>
                                {/* <td>{item?.status}</td> */}
                                <td>
                                    {item?.status === 'on' ? (
                                        <Form.Check 
                                            type="switch"
                                            id="disabled-custom-switch"
                                            defaultChecked={true}
                                        />
                                        ) : (
                                        <Form.Check 
                                            type="switch"
                                            id="disabled-custom-switch"
                                            defaultChecked={false}
                                        />
                                    )}
                                </td>
                                <td className="text-center">
                                    <i className="fas fa-pencil-alt" onClick={(e) => {
                                        e.preventDefault()
                                        // handleEditRoom(item)
                                    }}></i>
                                    <i className="fas fa-trash-alt ms-3" onClick={() => {
                                        // setDeleteRoom(item)
                                        setShowModalDeleteDevice(true)
                                    }}></i>
                                </td>
                            </tr>
                        ))}

                        
                    </tbody>
                </Table>  
            </div>
        <ModalCreateDevice
            show={showModalCreateDevice}
            onHide={() => setShowModalCreateDevice(false)}
        />

        <ModalDeleteConfirm
            show={showModalDeleteDevice}
            onHide={() => {setShowModalDeleteDevice (false)}}
            title="Bạn có chắc chắn muốn xóa thiết bị này?"
        />
        </BaseLayout>
    )
}

export default Devices;