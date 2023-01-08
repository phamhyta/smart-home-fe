import logo from '../../assets/logo.png'
import { Form, InputGroup, Tabs, Tab } from 'react-bootstrap';
import './style.scss'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function Rooms () {
    return (
        <div className='homepage devices-screen d-flex'>
            <div className='nav-bar me-5 mt-8 text-center h-100'>
                <img className='my-2' src={logo} width={120} />
                <div className='text-start'>
                    <div className='navbar-item'>Dashboard</div>
                    <div className='navbar-item'>Devices</div>
                    <div className='navbar-item' style={{background: '#f7f7f9', color: '#566d7f'}}>Rooms</div>
                    <div className='navbar-item'>Statistics</div>
                    <div className='navbar-item'>Settings</div>
                </div>
            </div>

            <div className='content w-75'>
                <div className='d-flex mb-1'>
                    <InputGroup className='w-50'>
                        <Form.Control className='search-bar' placeholder='Search...' />
                        {/* <i class="fas fa-search"></i> */}
                    </InputGroup>       
                    <p className='date-today w-50 text-end'>Monday, January 9th 2023</p>
        
                </div>
                <Tabs
                    defaultActiveKey="living"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="living" title="Living Room">
                        {/* <Sonnet /> */}
                    </Tab>
                    <Tab eventKey="bedroom" title="Bedroom">
                        {/* <Sonnet /> */}
                    </Tab>
                    <Tab eventKey="kitchen" title="Kitchen">
                        {/* <Sonnet /> */}
                    </Tab>
                </Tabs>
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
            </div>
        </div>
    )
}

export default Rooms;