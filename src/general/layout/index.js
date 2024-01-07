import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"
import AppButton from "../components/appButton";
import avatar from '../../assets/avatar.png'
import './style.scss'
function BaseLayout (props) {
    let today = new Date()
    const {selected} = props;
    const [selectMenu, setSelectMenu] = useState(selected)
    const navigate = useNavigate()
    const currentUser = JSON.parse(localStorage.getItem('currentAccount'))
    return (
        <div className="base-layout d-flex">
            <div className="layout-sidebar d-flex flex-column text-start">
                <div className="d-flex justify-content-center my-3 pb-3 border-bottom">
                    <img src={logo} onClick={() => navigate('/homes')} className='w-100' style={{cursor: 'pointer'}} alt=""/>
                </div>
                <div>
                    <AppButton
                        className={`d-flex btn-no-bg text-start nav-item ${selectMenu==='dashboard' ? 'selected' : ''}`}
                        text='Dashboard'
                        beforeIcon={<i class="fas fa-chart-line me-3"></i>}
                        onClick={() => {
                            navigate('/dashboard')
                            setSelectMenu('dashboard')
                        }}
                    />
                </div>
                <div>
                    <AppButton
                        className={`d-flex btn-no-bg text-start nav-item ${selectMenu==='rooms' ? 'selected' : ''}`}
                        text='Rooms'
                        beforeIcon={<i class="fas fa-book me-3"></i>}
                        onClick={() => {
                            setSelectMenu('rooms')
                            navigate('/rooms')
                        }}
                    />
                </div>
                <div>
                    <AppButton
                        className={`d-flex btn-no-bg text-start nav-item ${selectMenu==='devices' ? 'selected' : ''}`}
                        text='Devices'
                        beforeIcon={<i class="fas fa-pencil-ruler me-3"></i>}
                        onClick={() => {
                            navigate('/devices')
                            setSelectMenu('devices')
                        }}
                    />
                </div>
                <div>
                    <AppButton
                        className={`d-flex btn-no-bg text-start nav-item ${selectMenu==='users' ? 'selected' : ''}`}
                        text='Users'
                        beforeIcon={<i class="fas fa-users me-3"></i>}
                        onClick={() => {
                            navigate('/users')
                            setSelectMenu('users')
                        }}
                    />
                </div>
                <div className="logout-item">
                    <AppButton
                        className={`d-flex btn-no-bg text-start nav-item`}
                        text='Logout'
                        beforeIcon={<i class="fas fa-sign-out me-3"></i>}
                        onClick={() => navigate('/login')}
                    />
                </div>
            </div>
            <div className="layout-children">
                <div className="my-devices d-flex justify-content-between px-3 text-center shadow-sm py-3">
                    <div className="date-today text-end fw-bold align-items-center my-auto">{today.toDateString()}</div>
                    <div className="d-flex align-items-center">
                        <img src={avatar} width={40} alt="avatar" />
                        <div className='text fw-bold ms-2 my-auto align-items-center'>{currentUser?.fullname}</div>
                    </div>
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default BaseLayout;