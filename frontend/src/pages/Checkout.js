import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsChevronLeft } from "react-icons/bs";
import watch from '../images/watch.jpg';


function Checkout() {
    return (
        <>
            <div className='checkout-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-7'>
                            <div className='checkout-left-data'>
                                <h3 className='website-name'>Digitic</h3>
                                <nav
                                    style={{ "--bs-breadcrumb-divider": ">" }}
                                    aria-label="breadcrumb">
                                    <ol className='breadcrumb'>
                                        <li className='breadcrumb-item'>
                                            <Link to='/cart' className='text-dark'>
                                                Cart
                                            </Link>
                                        </li>
                                        &nbsp; /
                                        <li className='breadcrumb-item active' aria-current="page">
                                            Information
                                        </li>
                                        &nbsp; /
                                        <li className='breadcrumb-item active' aria-current="page">
                                            Shipping
                                        </li>
                                        &nbsp; /
                                        <li className='breadcrumb-item active' aria-current="page">
                                            Payment
                                        </li>
                                    </ol>
                                </nav>
                                <h4 className='title'> Contact Information</h4>
                                <p className='user-details'>
                                    Abc(abc@gmail.com)
                                </p>
                                <h4 className='title'>Shipping Address</h4>
                                <form action='' className='d-flex gap-15 flex-wrap justify-content-between'>
                                    <div className='w-100'>
                                        <select name='' className='form-control form-select'>
                                            <option value='' selected disabled> Select Country</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' className='form-control' placeholder='First name (optional)' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' className='form-control' placeholder='Last name' />
                                    </div>
                                    <div className='w-100'>
                                        <input type='text' className='form-control' placeholder='Address' />
                                    </div>
                                    <div className='w-100'>
                                        <input type='text' className='form-control' placeholder='Apartment, suite, etc. (optional)' />
                                    </div>
                                    <div>
                                        <input type='text' className='form-control' placeholder='City' />
                                    </div>
                                    <div className='w-25'>
                                        <select name='' className='form-control form-select'>
                                            <option value='' selected disabled> State</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input type='text' className='form-control' placeholder='ZIP Code' />
                                    </div>

                                </form>
                                <div className='d-flex justify-content-between align-items-center pt-5'>
                                    <Link to='/cart' className='d-flex align-items-center text-dark'>
                                        <BsChevronLeft /> &nbsp; Return to cart
                                    </Link>
                                    <Link className='button bg-danger'> Continue to shipping</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='border-bottom py-4'>
                                <div className='d-flex gap-10 align-items-center'>
                                    <div className='d-flex gap-10  justify-content-between'>
                                        <div className='w-25 position-relative'>
                                            <span className='quantity position-absolute'>1</span>
                                            <img src={watch} className='img-fluid' alt='product' />
                                        </div>
                                        <div className='w-75'>
                                            <h6 className='title'> It's used to sy used to setines of text.</h6>
                                            <p>S/#ASSASSAS</p>
                                        </div>
                                        <div className='w-25'>
                                            <h6>$ 100</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border-bottom py-4'>
                                <div className='d-flex gap-10 align-items-center'>
                                    <div className='d-flex gap-10  justify-content-between'>
                                        <div className='w-25 position-relative'>
                                            <span className='quantity position-absolute'>1</span>
                                            <img src={watch} className='img-fluid' alt='product' />
                                        </div>
                                        <div className='w-75'>
                                            <h6 className='title'> It's used to sy used to setines of text.</h6>
                                            <p>S/#ASSASSAS</p>
                                        </div>
                                        <div className='w-25'>
                                            <h6>$ 100</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border-bottom py-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p>SubTotal</p>
                                    <p>$ 1000</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p>Shipping</p>
                                    <p>$100</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                                <h4>Total</h4>
                                <h5>$1100</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout