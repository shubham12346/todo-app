import React from 'react'
import FormComponent from '../Component/FormComponent'
import loginImage from '../assest/images/login.png'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/authUser'
const Login = () => {
    const navigate = useNavigate();
    const user = useAuth();

    type UserType = {
        email: string,
        password: string
    }
    const handleLogin = (userData: UserType) => {
        console.log(userData);
        user?.setUserToken({ userToken: 'userLoggedIn' })
        navigate('/home')
    }

    return (
        <>
            <div className=' text-center m-5    '  >
                <div style={{ display: 'inline-block' }} className='shadow-lg border rounded'>
                    <div className='h3'> <span className='underLineText'>Log In </span> </div>

                    <div className='flexdiv md:d-flex '  >
                        <div> <img src={loginImage} className='imageWidth' alt="loginImage" /></div>
                        <div className='p-4'>
                            <div>
                                <FormComponent
                                    handleUserData={handleLogin}
                                    buttonName='login'
                                />
                            </div>
                            <div> <p>don't have an account register ? <Link to='/register'> register</Link> </p></div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}
export default Login; 