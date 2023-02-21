import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AppButton from "../../general/components/appButton"
import ModalCreateHome from "./modalCreateHome"
import "./style.scss"
function Homepage() {
    const homes = [
        {
            name: "Home 1",
            address: "Hai Ba Trung, Ha Noi"
        },
        {
            name: "Home 2",
            address: "Hoang Mai, Ha Noi"
        }
    ]
    const [showModalCreateHome, setShowModalCreateHome] = useState(false)
    const navigate = useNavigate()
    return (
        <div className="homepage w-75 mx-auto">
            <AppButton
                text='Add Home'
                beforeIcon={<i class="fas fa-plus me-2"></i>}
                className='btn-viewall d-flex mt-3 ms-4'
                onClick={() => setShowModalCreateHome(true)}
            />
            <div className="d-flex">
                {homes.map(item => (
                    <div className="home-card m-4 text-center" onClick={() => navigate('/dashboard')}>
                        <i class="fas fa-home"></i>
                        <div className="text-name">{item?.name}</div>
                        <p className="text-address">{item?.address}</p>
                    </div>
                ))} 
            </div>

            <ModalCreateHome
                show={showModalCreateHome}
                onHide={() => setShowModalCreateHome(false)}
            />
        </div>
    )
}

export default Homepage