import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import homeApi from "../../api/homeApi"
import AppButton from "../../general/components/appButton"
import ModalCreateHome from "./modalCreateHome"
import "./style.scss"
function Homepage() {
    const [showModalCreateHome, setShowModalCreateHome] = useState(false)
    const [homes, setHomes] = useState([])
    const navigate = useNavigate()
    const currentAccount = JSON.parse(localStorage.getItem('currentAccount'))
    const getHomeList = async () => {
        try {
            const res = await homeApi.getHomeList({
                userId: currentAccount?.id
            })
            console.log(res?.data)
            setHomes(res?.data?.data)
        } catch (err) {

        }
    }

    useEffect(() => {
        getHomeList()
    }, [])

    useEffect(() => {
        getHomeList()
    }, [showModalCreateHome])

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
                    <div className="home-card m-4 text-center" onClick={() => {
                        localStorage.setItem('currentHome', JSON.stringify(item))
                        navigate('/dashboard')
                    }}>
                        <i class="fas fa-home"></i>
                        <div className="text-name">{item?.name}</div>
                        <p className="text-address">{item?.location}</p>
                    </div>
                ))} 
            </div>

            <ModalCreateHome
                show={showModalCreateHome}
                onHide={() => setShowModalCreateHome(false)}
                userId={currentAccount?.id}
            />
        </div>
    )
}

export default Homepage