import logo from '../../assets/logo.png'
import { Form, InputGroup, Tabs, Tab, Table } from 'react-bootstrap';
import './style.scss'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import BaseLayout from '../../general/layout';
import AppButton from '../../general/components/appButton';
import { useEffect, useState } from 'react';
import ModalCreateRoom from './modalCreateRoom';
import ModalDeleteConfirm from '../../general/components/modalDeleteConfirm';
import roomApi from '../../api/roomApi';
import { useNavigate } from 'react-router-dom';

function Rooms () {
    const [showModalCreateRoom, setShowModalCreateRoom] = useState(false)
    const navigate = useNavigate()
    const [rooms, setRooms] = useState([])
    const [showModalDeleteRoom, setShowModalDeleteRoom] = useState(false)
    const currentHome = JSON.parse(localStorage.getItem('currentHome'))
    const getRoomList = async () => {
        try {
            const res = await roomApi.getRoomList(currentHome?.id)
            setRooms(res?.data?.data)
            localStorage.setItem('roomList', JSON.stringify(res?.data?.data))
        } catch (err) {

        }
    }

    useEffect(() => {
        getRoomList()
    }, [])

    useEffect(() => {
        getRoomList()
    }, [showModalCreateRoom])

    return (
        <BaseLayout selected='rooms'>
            <div className='dashboard devices-screen'>
                <div className='d-flex mb-1'>
                    <InputGroup className='w-50'>
                        <Form.Control className='search-bar' placeholder='Search...' />
                        {/* <i class="fas fa-search"></i> */}
                    </InputGroup>       
                    <p className='date-today w-50 text-end'>Monday, January 9th 2023</p>
        
                </div>

                <AppButton
                    text='Add Room'
                    beforeIcon={<i class="fas fa-plus me-2"></i>}
                    className='btn-viewall d-flex'
                    onClick={() => setShowModalCreateRoom(true)}
                />    

                <Table striped hover className="mt-4 text-center">
                    <thead className="text-center">
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            {/* <th>Total Devices</th> */}
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                        
                    <tbody>
                        {rooms?.map((item, index) => (
                            <tr>  
                                <td>{index+1}</td>  
                                <td className="text-start">{item?.name} </td>
                                {/* <td>{item?.totalDevices}</td> */}
                                <td>
                                    <AppButton
                                        text='View Detail'
                                        beforeIcon={<i class="fas fa-plus me-2"></i>}
                                        className='btn-viewall d-flex'
                                        onClick={() => navigate('/devices')}
                                    />
                                </td>
                                <td className="text-center">
                                    <i className="fas fa-pencil-alt" onClick={(e) => {
                                        e.preventDefault()
                                        // handleEditRoom(item)
                                    }}></i>
                                    <i className="fas fa-trash-alt ms-3" onClick={() => {
                                        // setDeleteRoom(item)
                                        setShowModalDeleteRoom(true)
                                    }}></i>
                                </td>
                            </tr>
                        ))}

                        
                    </tbody>
                </Table>   
            </div>

        <ModalCreateRoom
            show={showModalCreateRoom}
            onHide={() => setShowModalCreateRoom(false)}
            homeId={currentHome?.id}
        />

        <ModalDeleteConfirm
            show={showModalDeleteRoom}
            onHide={() => {setShowModalDeleteRoom(false)}}
            title="Bạn có chắc chắn muốn xóa phòng này?"
            // handleDeleteSubmit={handleDeleteRoom}
        />
        </BaseLayout>
    )
}

export default Rooms;