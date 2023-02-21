import axios from 'axios';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import './style.scss'

function Login () {
    const navigate = useNavigate()
    const [tempData, setTempData] = useState({})
    const handleLogin = async () => {
        try {
            const res = await axios.post('http://localhost:3500/', tempData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            toast('Successfully Logged In!', {type: toast.TYPE.SUCCESS})
            if (res) console.log(res)
        } catch (err) {
            // toast("Error! Try again", {type: toast.TYPE.ERROR})
        }
    }
    const handleChange = (e) => {
        setTempData({
            ...tempData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="login-screen d-flex flex-column">
            <div style={{background: '#FFFFFF', borderRadius: '30px', width: '40%'}} className='p-5 text-center'>
                <p className='title'>LOGIN</p>
                <Form className='login-form text-start'>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type='string' name="username" onChange={(e) => handleChange(e)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' name="password" onChange={(e) => handleChange(e)}/>
                    </Form.Group>
                </Form>
                <p className='text-start'>Don't have an account? <Link to='/signup'>Signup</Link></p>

                <Button className='btn-login mt-4' onClick={() => handleLogin()}>Login</Button>
            </div>
            
        </div>
    )
}

export default Login;