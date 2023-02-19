import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import AppButton from "../../general/components/appButton";
import BaseLayout from "../../general/layout";
import ModalCreateUser from "./modalCreateUser";


function Users (props) {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)

    return (
        <BaseLayout selected='users'>
            <div className="dashboard users-screen">
                <div className='d-flex mb-1'>
                    <InputGroup className='w-50'>
                        <Form.Control className='search-bar' placeholder='Search...' />
                        {/* <i class="fas fa-search"></i> */}
                    </InputGroup>       
                    <p className='date-today w-50 text-end'>Monday, January 9th 2023</p>
        
                </div>

                <AppButton
                    text='Add User'
                    beforeIcon={<i class="fas fa-plus me-2"></i>}
                    className='btn-viewall d-flex mt-3'
                    onClick={() => setShowModalCreateUser(true)}
                />
            </div>

        <ModalCreateUser
            show={showModalCreateUser}
            onHide={() => setShowModalCreateUser(false)}
        />
        </BaseLayout>
    )
}

export default Users;