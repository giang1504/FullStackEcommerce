import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from '../components/Meta';

function Wishlist() {
    return (
        <>
            <Meta title={"Favourite Wishlist"} />
            <BreadCrumb title="Favourite Wishlist" />
            <div className='wishlist-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3 py-2'>
                            <div className='wishlist-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='images/watch.jpg' className='img-fluid' alt='wishlist' />
                                </div>
                                <div className='wishlist-details'>
                                    <div className='row'>
                                        <h5 className='title col-12'>
                                            Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-fi+3G
                                        </h5>
                                        <div className='d-flex gap-10'>
                                            <h6 className='price' style={{ color: "red" }}> $500 </h6>
                                            <strike>$750</strike>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 py-2'>
                            <div className='wishlist-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='images/watch.jpg' className='img-fluid' alt='wishlist' />
                                </div>
                                <div className='wishlist-details'>
                                    <div className='row'>
                                        <h5 className='title col-12'>
                                            Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-fi+3G
                                        </h5>
                                        <div className='d-flex gap-10'>
                                            <h6 className='price' style={{ color: "red" }}> $500 </h6>
                                            <strike>$750</strike>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 py-2'>
                            <div className='wishlist-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='images/watch.jpg' className='img-fluid' alt='wishlist' />
                                </div>
                                <div className='wishlist-details'>
                                    <div className='row'>
                                        <h5 className='title col-12'>
                                            Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-fi+3G
                                        </h5>
                                        <div className='d-flex gap-10'>
                                            <h6 className='price' style={{ color: "red" }}> $500 </h6>
                                            <strike>$750</strike>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 py-2'>
                            <div className='wishlist-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='images/watch.jpg' className='img-fluid' alt='wishlist' />
                                </div>
                                <div className='wishlist-details'>
                                    <div className='row'>
                                        <h5 className='title col-12'>
                                            Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-fi+3G
                                        </h5>
                                        <div className='d-flex gap-10'>
                                            <h6 className='price' style={{ color: "red" }}> $500 </h6>
                                            <strike>$750</strike>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 py-2'>
                            <div className='wishlist-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='images/watch.jpg' className='img-fluid' alt='wishlist' />
                                </div>
                                <div className='wishlist-details'>
                                    <div className='row'>
                                        <h5 className='title col-12'>
                                            Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-fi+3G
                                        </h5>
                                        <div className='d-flex gap-10'>
                                            <h6 className='price' style={{ color: "red" }}> $500 </h6>
                                            <strike>$750</strike>
                                        </div>
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

export default Wishlist