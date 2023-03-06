import { useEffect, useState } from "react";
import { Form, InputGroup, Table } from "react-bootstrap";
import userApi from "../../api/userApi";
import AppButton from "../../general/components/appButton";
import ModalDeleteConfirm from "../../general/components/modalDeleteConfirm";
import BaseLayout from "../../general/layout";
import ModalCreateUser from "./modalCreateUser";
import { toast } from "react-toastify";


function Users (props) {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false)
    const currentHome = JSON.parse(localStorage.getItem('currentHome'))

    // const users = [
    //     {
    //         name: "Quynh Anh",
    //         email: "qa@gmail.com"
    //     },
    //     {
    //         name: "Quynh Anh",
    //         email: "qa@gmail.com"
    //     },
    //     {
    //         name: "Quynh Anh",
    //         email: "qa@gmail.com"
    //     },
    // ]

    const [users, setUsers] = useState([])
    const getUserList = async () => {
        try {
            const res = await userApi.getUserList(currentHome?.id)
            setUsers(res?.data?.data)
            localStorage.setItem('userList', JSON.stringify(res?.data?.data))
        } catch (err) {

        }
    }

    useEffect(() => {
        getUserList()
    }, [])

    useEffect(() => {
        getUserList()
    }, [showModalCreateUser])

    return (
        <BaseLayout selected='users'>
            <div className="dashboard users-screen devices-screen">
                <div className='d-flex mb-1'>
                    <InputGroup className='w-50'>
                        <Form.Control className='search-bar' placeholder='Search...' />
                        {/* <i class="fas fa-search"></i> */}
                    </InputGroup>       
                    <p className='date-today w-50 text-end'>Monday, March 6th 2023</p>
        
                </div>

                <AppButton
                    text='Add User'
                    beforeIcon={<i class="fas fa-plus me-2"></i>}
                    className='btn-viewall d-flex mt-3'
                    onClick={() => setShowModalCreateUser(true)}
                />

                <Table striped hover className="mt-4 text-center">
                    <thead className="text-center">
                        <tr>
                            <th>No.</th>
                            <th>Fullname</th>
                            <th>username</th>
                            <th></th>
                        </tr>
                    </thead>
                        
                    <tbody>
                        {users?.map((item, index) => (
                            <tr>  
                                <td>{index+1}</td>  
                                <td className="text-start">{item?.fullname} </td>
                                <td>
                                    {item?.username}
                                </td>
                                <td className="text-center">
                                    <i className="fas fa-pencil-alt" onClick={(e) => {
                                        e.preventDefault()
                                        // handleEditRoom(item)
                                    }}></i>
                                    <i className="fas fa-trash-alt ms-3" onClick={() => {
                                        // setDeleteRoom(item)
                                        setShowModalDeleteUser(true)
                                    }}></i>
                                </td>
                            </tr>
                        ))}

                        
                    </tbody>
                </Table> 
            </div>

        <ModalCreateUser
            show={showModalCreateUser}
            onHide={() => setShowModalCreateUser(false)}
        />

        <ModalDeleteConfirm
            show={showModalDeleteUser}
            onHide={() => {setShowModalDeleteUser (false)}}
            title="Bạn có chắc chắn muốn xóa người dùng này?"
        />
        </BaseLayout>
    )
}

export default Users;