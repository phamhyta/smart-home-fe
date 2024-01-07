import './style.scss'
import Chart from './chart';
import BaseLayout from '../../general/layout';
import homeApi from '../../api/homeApi';
import { useEffect, useState } from 'react';
function Dashboard () {
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
            
        </div>
        </BaseLayout>
    )
}

export default Dashboard;