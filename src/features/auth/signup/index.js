import axios from 'axios';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import authApi from '../../../api/authApi';
import bgImg from '../../../assets/bg-login-2.jpg'
import '../login/style.scss';

function Signup () {
    const navigate = useNavigate()
    const [tempData, setTempData] = useState({
        roleId: 2
    })
    const handleSignup = async () => {
        try {
            const res = await authApi.signUp(tempData)
            toast('Successfully Signed Up!', {type: toast.TYPE.SUCCESS})
            if (res) console.log(res)
            navigate('/login')
        } catch (err) {
            toast("Error! Try again", {type: toast.TYPE.ERROR})
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
            <div className='d-flex w-100 justify-content-center mt-5'>
                <div style={{width: '30%'}}>
                    <img className='w-100 h-100' src={bgImg} alt="" />
                </div>
                <div style={{width: '30%'}} className='bg-white py-2 px-4 text-center'>
                    <p className='title'>SIGNUP</p>
                    <Form className='login-form text-start'>
                        <Form.Group>
                            <Form.Label>Fullname</Form.Label>
                            <Form.Control type='text' name="fullname" onChange={(e) => handleChange(e)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type='text' name="username" onChange={(e) => handleChange(e)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' name="password" onChange={(e) => handleChange(e)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password confirm</Form.Label>
                            <Form.Control type='password' name="passwordConfirm"/>
                        </Form.Group>
                    </Form>
                    <p className='text-start mt-2'>Already have an account? <Link to='/login'>Login</Link></p>
                    <div>
                        <Button className='btn-login mt-2' onClick={handleSignup}>Signup</Button>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Signup;