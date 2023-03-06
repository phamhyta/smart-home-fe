import axios from 'axios';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import authApi from '../../../api/authApi';
import './style.scss'

function Login () {
    const navigate = useNavigate()
    const [tempData, setTempData] = useState({})
    const handleLogin = async () => {
        try {
            const res = await authApi.signIn(tempData)
            toast(`Hello, ${res?.data?.fullname}`, {type: toast.TYPE.SUCCESS})
            if (res) console.log(res?.data)
            localStorage.setItem('currentAccount', JSON.stringify(res?.data))
            navigate('/homes')
        } catch (err) {
            toast("Wrong username or password", {type: toast.TYPE.ERROR})
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