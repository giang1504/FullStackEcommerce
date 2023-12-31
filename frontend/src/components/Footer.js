import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsYoutube, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import newsletter from '../images/newsletter.png';


const Footer = () => {
    return (
        <>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-5'>
                            <div className='footer-top-data d-flex gap-30 align-items-center'>
                                <img src={newsletter} alt='newsletter' />
                                <h2 className='text-white'>
                                    Sign Up for New
                                </h2>
                            </div>
                        </div>
                        <div className='col-7'>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control py-1" placeholder="Địa chỉ Email ..."
                                    aria-label="Địa chỉ Email ..." aria-describedby="basic-addon2" />
                                <span className="input-group-text p-1" id="basic-addon2">
                                    Subcrice
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <h4 className='text-white mb-4'>Contant Us</h4>
                            <div className='footer-link d-flex flex-column'>
                                <address className='text-white fs-6'>Co lo nhue, Ha Noi, Viet Nam</address>
                                <a className='text-white mt-4 d-block mb-2' href='tel: 0123456'>
                                    0123456
                                </a>
                                <a className='text-white mt-4 d-block mb-2' href='mailto: gmail@gmail.com'>
                                    Gmail@gmail.com
                                </a>
                                <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                                    <a className='text-white' href=''>
                                        <BsLinkedin className='fs-4' />
                                    </a>
                                    <a className='text-white' href=''>
                                        <BsInstagram className='fs-4' />
                                    </a>
                                    <a className='text-white' href=''>
                                        <BsGithub className='fs-4' />
                                    </a>
                                    <a className='text-white' href=''>
                                        <BsYoutube className='fs-4' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-2'>
                            <h4 className='text-white'>Information</h4>
                            <div className='footer-link d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'> Privacy Policy</Link>
                                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                                <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                                <Link className='text-white py-2 mb-1'>Terms Of Server</Link>
                                <Link className='text-white py-2 mb-1'>Blogs</Link>
                            </div>
                        </div>
                        <div className='col-2'>
                            <h4 className='text-white'>Accout</h4>
                            <div className='footer-link d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Search</Link>
                                <Link className='text-white py-2 mb-1'>About Us</Link>
                                <Link className='text-white py-2 mb-1'>Faq</Link>
                                <Link className='text-white py-2 mb-1'>Contact</Link>
                                <Link className='text-white py-2 mb-1'>Size Chart</Link>
                            </div>
                        </div>
                        <div className='col-2'>
                            <h4 className='text-white'>Quick Links</h4>
                            <div className='footer-link d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Laptops</Link>
                                <Link className='text-white py-2 mb-1'>HeadPhones</Link>
                                <Link className='text-white py-2 mb-1'>Tablets</Link>
                                <Link className='text-white py-2 mb-1'>Watch</Link>
                            </div>
                        </div>
                        <div className='col-3'>
                            <h4 className='text-white'>Our App</h4>
                            <div className='footer-link d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Download our App and get extra 15% Discount on your first Order</Link>
                                <Link className='text-white py-2 mb-1'>HeadPhones</Link>
                                <Link className='text-white py-2 mb-1'>Tablets</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='text-center mb-0 text-white'>
                                &copy;{new Date().getFullYear()}; Deverloper
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
