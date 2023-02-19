import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './style.scss'

function Login () {
    const navigate = useNavigate()
    return (
        <div className="login-screen d-flex flex-column">
            <div style={{background: '#FFFFFF', borderRadius: '30px', width: '40%'}} className='p-5 text-center'>
                <p className='title'>LOGIN</p>
                <Form className='login-form text-start'>
                    <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type='string'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' />
                    </Form.Group>
                </Form>
                <p className='text-start'>Don't have an account? <Link to='/signup'>Signup</Link></p>

                <Button className='btn-login mt-4' onClick={() => navigate('/')}>Login</Button>
            </div>
            
        </div>
    )
}

export default Login;