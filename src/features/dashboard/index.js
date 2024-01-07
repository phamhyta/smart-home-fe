import { Form, InputGroup } from 'react-bootstrap';
import avatar from '../../assets/avatar.png'
import './style.scss'
import Chart from './chart';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import BaseLayout from '../../general/layout';
import homeApi from '../../api/homeApi';
import { useEffect, useState } from 'react';
function Dashboard () {
    let today = new Date()
    const currentUser = JSON.parse(localStorage.getItem('currentAccount'))
    const [analytic, setAnalytic] = useState({})
    const [currentAnalytic, setCurrentAnalytic] = useState({})


    const getAnalytic = async () => {
        try {
            const res = await homeApi.getAnalytic()
            console.log(res)
            setAnalytic(res?.data?.data)
        } catch (err) {

        }
    }

    useEffect(() => {
        setTimeout(()=>{
            getCurrentAnalytic()
        }, 10000)
    })
    
    const getCurrentAnalytic = async () => {
        try {
            const res = await homeApi.getCurrentAnalytic()
            console.log(res)
            setCurrentAnalytic(res?.data?.data)
        } catch (err) {

        }
    }

    useEffect(() => {
        getAnalytic();
        getCurrentAnalytic()
    }, [])

    return (
        <BaseLayout selected='dashboard'>
        <div className='dashboard d-flex justify-content-between'>
            <div className='content'>
                <div className='d-flex mb-1'>
                    <p className='date-today w-50 text-end'>
                        {today.toDateString()}
                    </p>
        
                </div>

                <div className='d-flex justify-content-between'>
                    <div className='part'>
                        <i class="fas fa-temperature-high"></i>
                        <div className='ms-5 text-center'>
                            <p className='label'>Temperature</p>
                            <p className='number'>{currentAnalytic?.currentTemp} <sup>o</sup>C</p>
                        </div>
                    </div>
                    <div className='part'>
                        <i class="fas fa-temperature-high"></i>
                        <div className='ms-5 text-center'>
                            <p className='label'>Humidity</p>
                            <p className='number'>{currentAnalytic?.currentHumid} <span style={{fontSize: 20}}>%</span></p>
                        </div>
                    </div>
                </div>
                
                <Chart className='w-100'/>
            </div>
            <div className="my-devices d-flex flex-column p-3 text-center ">
                <img src={avatar} width={120} alt="avatar" />
                <p className='text'>Hi, {currentUser?.fullname}!</p>
                <div className='bg-white' style={{borderRadius: "30px"}}>
                    <div className='d-flex'>
                        <div className='device' style={{background: "#ffe0e0"}}>
                            <i class="fas fa-lightbulb"></i>
                            <p>Lights</p>
                        </div>
                        <div className='device' style={{background: "#e0ffde"}}>
                            <i class="fas fa-fan"></i>
                            <p>Fans</p>
                        </div>                    
                    </div>
                    <div className='d-flex'>
                        <div className='device' style={{background: "#ffebd0"}}>
                            <i class="fas fa-wind"></i>
                            <p>AC</p>
                        </div>
                        <div className='device' style={{background: "#d8f6ff"}}>
                            <i class="fas fa-wifi"></i>
                            <p>Wifi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </BaseLayout>
    )
}

export default Dashboard;