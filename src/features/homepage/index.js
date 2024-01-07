import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import homeApi from "../../api/homeApi"
import AppButton from "../../general/components/appButton"
import ModalCreateHome from "./modalCreateHome"
import homeAvt from "../../assets/home-avt.jpg"
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
        <div className="homepage">
            <div className="w-75 mx-auto p-5">
                <AppButton
                    text='Add Home'
                    beforeIcon={<i class="fas fa-plus me-2"></i>}
                    className='btn-add-home'
                    onClick={() => setShowModalCreateHome(true)}
                />
                <div className="d-flex mt-4">
                    {homes.map(item => (
                        <div className="home-card me-4 text-center" onClick={() => {
                            localStorage.setItem('currentHome', JSON.stringify(item))
                            navigate('/dashboard')
                        }}>
                            <img className="w-100" src={homeAvt} alt="" />
                            <div className="text-name mt-2">{item?.name}</div>
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
        </div>
    )
}

export default Homepage