import React from 'react';
import Meta from '../components/Meta';
import { NavLink, Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";


const Home = () => {
    return (
        <>
            <Meta title={"Ecommerce App"} />
            <section className='home-wrapper-1 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-banner position-relative'>
                                <img src='images/main-banner-1.jpg'
                                    className='img-fluid rounded-3' alt='main banner' />
                                <div className='main-banner-content position-absolute'>
                                    <h4>SUPERCHRGED FOR PROS</h4>
                                    <h5>IPad S13+ Pro</h5>
                                    <p>From $999.00 or $41.52/mo</p>
                                    <Link className='button'>BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                                <div className='small-banner position-relative'>
                                    <img src='images/catbanner-01.jpg'
                                        className='img-fluid rounded-3' alt='main banner' />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>BEST SALE</h4>
                                        <h5>Laptops Max</h5>
                                        <p>From $999.00 <br /> or $41.52/mo</p>
                                    </div>
                                </div>
                                <div className='small-banner position-relative'>
                                    <img src='images/catbanner-03.jpg'
                                        className='img-fluid rounded-3' alt='main banner' />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>NEW ARRIVAL</h4>
                                        <h5>Buy Ipad Air</h5>
                                        <p>From $999.00 <br /> or $41.52/mo</p>
                                    </div>
                                </div>
                                <div className='small-banner position-relative'>
                                    <img src='images/catbanner-02.jpg'
                                        className='img-fluid rounded-3' alt='main banner' />
                                    <div className='small-banner-content position-absolute'>
                                        <h4> 15% OFF</h4>
                                        <h5> Smartwatch 7</h5>
                                        <p>From $999.00 <br /> or $41.52/mo</p>
                                    </div>
                                </div>
                                <div className='small-banner position-relative'>
                                    <img src='images/catbanner-04.jpg'
                                        className='img-fluid rounded-3' alt='main banner' />
                                    <div className='small-banner-content position-absolute'>
                                        <h4> FREE ENGRAVING</h4>
                                        <h5>AirPods Max</h5>
                                        <p>From $999.00 <br /> or $41.52/mo</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className='home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='services d-flex justify-content-between align-items-center '>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='images/service.png' alt='services' />
                                    <div>
                                        <h6>Free Shipping</h6>
                                        <p>From all orders over $100</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='images/service-02.png' alt='services' />
                                    <div>
                                        <h6>Daily Surprise Offers</h6>
                                        <p>Save up to 25% off</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='images/service-03.png' alt='services' />
                                    <div>
                                        <h6>Support 24/7</h6>
                                        <p>Shop with an expert</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='images/service-04.png' alt='services' />
                                    <div>
                                        <h6>Affordable Prices</h6>
                                        <p>Get Factory direct price</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='images/service-05.png' alt='services' />
                                    <div>
                                        <h6>Secure Payments</h6>
                                        <p>100% Protected Payments</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='home-wrapper-3 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='categories d-flex flex-wrap align-items-center  justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <h6>Computer & Laptop</h6>
                                        <p>5 Items</p>
                                    </div>
                                    <img src='images/laptop.jpg' />
                                </div>
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <h6>Cameras & Video</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='images/camera.jpg' />
                                </div>
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <h6> Smart Television</h6>
                                        <p>12 Items</p>
                                    </div>
                                    <img src='images/tv.jpg' />
                                </div>
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <h6>Coputer & Laptop</h6>
                                        <p>5 Items</p>
                                    </div>
                                    <img src='images/headphone.jpg' />
                                </div>
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <h6>Coputer & Laptop</h6>
                                        <p>5 Items</p>
                                    </div>
                                    <img src='images/headphone.jpg' />
                                </div>
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <h6>Coputer & Laptop</h6>
                                        <p>5 Items</p>
                                    </div>
                                    <img src='images/headphone.jpg' />
                                </div>
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <h6>Coputer & Laptop</h6>
                                        <p>5 Items</p>
                                    </div>
                                    <img src='images/headphone.jpg' />
                                </div>
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <h6>Coputer & Laptop</h6>
                                        <p>5 Items</p>
                                    </div>
                                    <img src='images/headphone.jpg' />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className='popular-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='section-heading d-flex align-items-center justify-content-between'>
                                <h3 className=''>Our Popular Products</h3>
                                <div>
                                    <BsChevronLeft />
                                    <BsChevronRight />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
            <section className='Specical-product-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='section-heading d-flex align-items-center justify-content-between'>
                                <h3 className=''>Special Products</h3>
                                <div>
                                    <BsChevronLeft />
                                    <BsChevronRight />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <SpecialProduct />
                        <SpecialProduct />
                        <SpecialProduct />
                    </div>
                </div>
            </section>
            <section className='famous-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='images/subbanner-01.webp' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute text-white'>
                                    <h5> Big Screen</h5>
                                    <h6> Smart Watch Series 7</h6>
                                    <p> From $399 or $16.62/mo for 24 mo.*</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='images/subbanner-03.webp' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h5> Big Screen</h5>
                                    <h6> Smart Watch Series 7</h6>
                                    <p> From $399 or $16.62/mo for 24 mo.*</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='images/subbanner-03.webp' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h5> Big Screen</h5>
                                    <h6> Smart Watch Series 7</h6>
                                    <p> From $399 or $16.62/mo for 24 mo.*</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='images/subbanner-03.webp' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h5> Big Screen</h5>
                                    <h6> Smart Watch Series 7</h6>
                                    <p> From $399 or $16.62/mo for 24 mo.*</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='Featured-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='section-heading d-flex align-items-center justify-content-between'>
                                <h3 className=''>Featured Collection</h3>
                                <div>
                                    <BsChevronLeft />
                                    <BsChevronRight />
                                </div>
                            </div>
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
            <section className='marquee-wrapper py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='marquee-inner-wrapper card-wrapper'>
                                <Marquee className='d-flex'>
                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-01.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-02.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-03.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-04.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-05.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-06.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-07.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-08.png' alt='brand' />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='blog-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='section-heading d-flex align-items-center justify-content-between'>
                                <h3 className=''>Our Latest Blogs</h3>
                                <div>
                                    <BsChevronLeft />
                                    <BsChevronRight />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-3'>
                            <BlogCard />
                        </div>
                        <div className='col-3'>
                            <BlogCard />
                        </div>
                        <div className='col-3'>
                            <BlogCard />
                        </div>
                        <div className='col-3'>
                            <BlogCard />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home;