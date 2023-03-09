import React from 'react'
import FormComponent from '../Component/FormComponent'
import registerImage from '../assest/images/register.png'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()
    type UserType = {
        email: string,
        password: string
    }
    const handleRegister = (userData: UserType) => {

        console.log(userData);
        navigate('/')

    }

    return (

        <>
            <div className=' text-center m-5    '  >
                <div style={{ display: 'inline-block' }} className='shadow-lg border rounded '>
                    <div className='h3'> <span className='underLineText'>Register</span> </div>

                    <div className='flexdiv md:d-flex '  >
                        <div> <img src={registerImage} className='imageWidth' alt="loginImage" /></div>
                        <div className='p-4'>
                            <div> <FormComponent
                                handleUserData={handleRegister}
                                buttonName='register'
                            /></div>
                            <div> <p>Already have an account Login ? <Link to='/'> Login</Link> </p></div>
                        </div>

                    </div>

                </div>
            </div>

        </>

    )
}

export default Register