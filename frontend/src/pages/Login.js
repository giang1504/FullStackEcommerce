import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from '../components/Meta';
import { NavLink, Link } from 'react-router-dom';


function Login() {
    return (
        <>
            <Meta title={"Login"} />
            <BreadCrumb title="Login" />
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-3'>Login</h3>
                                <form action='' className='d-flex flex-column gap-30'>
                                    <div>
                                        <input type='email' name='email' placeholder='Email' className='form-control' />
                                    </div>
                                    <div>
                                        <input type='password' name='password' placeholder='Password' className='form-control' />
                                    </div>
                                    <div>
                                        <Link to='/forgot-password' className='forgot-password'> Forgot Password?</Link>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center gap-15'>
                                        <Link className='button border-0'>Login</Link>
                                        <Link to='/singup' className='button singup'>SignUp</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login