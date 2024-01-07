import axios from 'axios';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import authApi from '../../../api/authApi';
import './style.scss';
import bgImg from '../../../assets/bg-login-2.jpg'

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
        <div className="login-screen pt-5">
           <div className='d-flex w-100 justify-content-center mt-5'>
                <div style={{width: '30%'}}>
                    <img className='w-100' src={bgImg} alt="" />
                </div>
                <div style={{width: '30%'}} className='bg-white py-2 px-4 text-center'>
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
                    <div>
                        <Button className='btn-login mt-4' onClick={() => handleLogin()}>Login</Button>
                    </div>
                    <div>
                        <Button className='btn-login mt-2' onClick={() => navigate('/signup')}>Signup</Button>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Login;