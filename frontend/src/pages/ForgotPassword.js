import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from '../components/Meta';
import { NavLink, Link } from 'react-router-dom';

function ForgotPassword() {
    return (
        <>
            <Meta title={"Forgot Password"} />
            <BreadCrumb title="Forgot Password" />
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-3'>Reset Password</h3>
                                <p className='text-center'>We will send you an email to reset your password</p>
                                <form action='' className='d-flex flex-column gap-30'>
                                    <div>
                                        <input type='email' name='email' placeholder='Email' className='form-control' />
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center gap-15 flex-column'>
                                        <Link to='/reset-password' className='button submit'>Submit</Link>
                                        <Link to='/login' className='button cancel'>Cancel</Link>
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

export default ForgotPassword