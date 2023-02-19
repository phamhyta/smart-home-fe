import { useNavigate } from "react-router-dom"
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

    const navigate = useNavigate()
    return (
        <div className="homepage w-75 mx-auto">
            homepage
            <div className="d-flex">
                {homes.map(item => (
                    <div className="home-card m-4 text-center" onClick={() => navigate('/dashboard')}>
                        <i class="fas fa-home"></i>
                        <div className="text-name">{item?.name}</div>
                        <p className="text-address">{item?.address}</p>
                    </div>
                ))} 
            </div>
        </div>
    )
}

export default Homepage