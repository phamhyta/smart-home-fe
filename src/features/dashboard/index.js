import { Form, InputGroup } from 'react-bootstrap';
import avatar from '../../assets/avatar.png'
import './style.scss'
import Chart from './chart';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import BaseLayout from '../../general/layout';
function Dashboard () {
    let today = new Date()
    return (
        <BaseLayout selected='dashboard'>
        <div className='dashboard d-flex justify-content-between'>
            <div className='content'>
                <div className='d-flex mb-1'>
                    <InputGroup className='w-50'>
                        <Form.Control className='search-bar' placeholder='Search...' />
                        {/* <i class="fas fa-search"></i> */}
                    </InputGroup>       
                    <p className='date-today w-50 text-end'>Monday, January 9th 2023</p>
                    {/* <p className='date-today w-50 text-end'>{today}</p> */}
        
                </div>

                <div className='d-flex'>
                    <div className='me-5 w-50'>
                        <div className='part'>
                            <i class="fas fa-temperature-high"></i>
                            <div className='ms-5 text-center'>
                                <p className='label'>Temperature</p>
                                <p className='number'>25 <sup>o</sup>C</p>
                            </div>
                        </div>
                        <div className='part'>
                            <i class="fas fa-temperature-high"></i>
                            <div className='ms-5 text-center'>
                                <p className='label'>Humidity</p>
                                <p className='number'>30 <span style={{fontSize: 20}}>%</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='ml-5 w-50 d-block light-intensity part text-center'>
                        <p>Light Intensity</p>
                        <CircularProgressbar 
                            className='w-50'
                            strokeWidth={14}
                            value={75} 
                            text={`75 %`} 
                            styles={buildStyles({
                                pathColor: '#566d7f',
                                trailColor: "#eee",
                                strokeLinecap: 'butt'
                            })}
                        />
                    </div>
                </div>
                
                <Chart className='w-100'/>
            </div>
            <div className="my-devices d-flex flex-column p-3 text-center">
                <img src={avatar} width={120} />
                <p className='text'>Hi, Quynh Anh!</p>
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
                    <p className='text fw-light'>Tap to turn on/ off devices</p>
                </div>
            </div>
        </div>
        </BaseLayout>
    )
}

export default Dashboard;