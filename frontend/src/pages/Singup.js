import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from '../components/Meta';
import { NavLink, Link } from 'react-router-dom';

function Singup() {
    return (
        <>
            <Meta title={"Create Account"} />
            <BreadCrumb title="Create Account" />
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-3'>Create Account</h3>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <div>
                                        <input type='text' name='firstName' placeholder='First name' className='form-control' />
                                    </div>
                                    <div>
                                        <input type='text' name='lastName' placeholder='Last name' className='form-control' />
                                    </div>
                                    <div>
                                        <input type='email' name='email' placeholder='Email' className='form-control' />
                                    </div>
                                    <div>
                                        <input type='password' name='password' placeholder='Password' className='form-control' />
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center gap-15'>
                                        <Link className='button create'>Create</Link>
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

export default Singup