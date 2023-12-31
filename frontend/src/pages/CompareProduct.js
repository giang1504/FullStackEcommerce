import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from '../components/Meta';

function CompareProduct() {
    return (
        <>
            <Meta title={"Compare Product"} />
            <BreadCrumb title="Compare Product" />
            <div className='compare-product-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='product-card-image'>
                                    <img src='images/watch.jpg' className='img-fluid' alt='watch' />
                                </div>
                                <div className='compare-product-details'>
                                    <div className='row'>
                                        <h5 className='title col-12'>
                                            Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-fi+3G
                                        </h5>
                                        <h6 className='price'> $100</h6>
                                    </div>
                                </div>
                                <div className='compare-product-details'>
                                    <h6>Brand: </h6>
                                    <p>Havels</p>
                                </div>
                                <div className='compare-product-details'>
                                    <h6>Type: </h6>
                                    <p>Havels</p>
                                </div>
                                <div className='compare-product-details'>
                                    <h6>Availablity: </h6>
                                    <p>Havels</p>
                                </div>
                                <div className='compare-product-details'>
                                    <h6>Color: </h6>
                                    <div>
                                        <ul className='colors ps-0'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='compare-product-details'>
                                    <h6>Size: </h6>
                                    <div className='d-flex gap-10'>
                                        <p>S</p>
                                        <p>M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='product-card-image'>
                                    <img src='images/watch.jpg' className='img-fluid' alt='watch' />
                                </div>
                                <div className='compare-product-details'>
                                    <div className='row'>
                                        <h5 className='title col-12'>
                                            Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-fi+3G
                                        </h5>
                                        <h6 className='price'> $100</h6>
                                    </div>
                                </div>
                                <div className='compare-product-details'>
                                    <h6>Brand: </h6>
                                    <p>Havels</p>
                                </div>
                                <div className='compare-product-details'>
                                    <h6>Type: </h6>
                                    <p>Havels</p>
                                </div>
                                <div className='compare-product-details'>
                                    <h6>Availablity: </h6>
                                    <p>Havels</p>
                                </div>
                                <div className='compare-product-details'>
                                    <h6>Color: </h6>
                                    <div>
                                        <ul className='colors ps-0'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='compare-product-details'>
                                    <h6>Size: </h6>
                                    <div className='d-flex gap-10'>
                                        <p>S</p>
                                        <p>M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompareProduct