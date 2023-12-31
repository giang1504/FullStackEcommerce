import BreadCrumb from "../components/BreadCrumb";
import Meta from '../components/Meta';
import { NavLink, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiRuler } from "react-icons/ci";
import { BsLink45Deg } from "react-icons/bs";
import { LiaCcVisa } from "react-icons/lia";



function SingleProduct() {
    const [orderedProduct, setOrderedProduct] = useState(true);
    const props = {
        zoomPosition: 'original',
        height: 500, width: 100,
        img: "https://malaman.github.io/react-image-zoom/example/1.jpg"
    };
    return (
        <>
            <Meta title={"Product Name"} />
            <BreadCrumb title="Product Name" />
            <div className='main-product-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="orther-product-images d-flex flex-wrap gap-15 mt-3">
                                <div>
                                    <img src='https://malaman.github.io/react-image-zoom/example/1.jpg' className="img-fluid" />
                                </div>
                                <div>
                                    <img src='https://malaman.github.io/react-image-zoom/example/1.jpg' className="img-fluid" />
                                </div>
                                <div>
                                    <img src='https://malaman.github.io/react-image-zoom/example/1.jpg' className="img-fluid" />
                                </div>
                                <div>
                                    <img src='https://malaman.github.io/react-image-zoom/example/1.jpg' className="img-fluid" />
                                </div>


                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3 className="title"> Kids Headphones Bulk 10 pack Mutil colred for student</h3>
                                </div>
                                <div className="border-bottom">
                                    <p className="price"> $100</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            // onChange={ratingChanged}
                                            value={0}
                                            isHalf={true}
                                            size={18}
                                            activeColor="#ffd700"
                                        />
                                        <p className="mb-0">(2 Reviews )</p>
                                    </div>
                                    <a href='#review' className="review-btn">Write a Reviews</a>
                                </div>
                                <div className="border-bottom py-3">
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Type: </h3>
                                        <p className="product-data"> Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Brand: </h3>
                                        <p className="product-data"> Havels</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Category: </h3>
                                        <p className="product-data"> Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Tags: </h3>
                                        <p className="product-data"> Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Availablity: </h3>
                                        <p className="product-data"> In Stock</p>
                                    </div>
                                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                        <h3 className="product-heading">Size: </h3>
                                        <div className="d-flex flex-wrap gap-15">
                                            <span className="badge border border-1 bg-white text-dark border-secondary">
                                                S
                                            </span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">
                                                M
                                            </span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">
                                                XL
                                            </span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">
                                                XXL
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 flex-column">
                                        <h3 className="product-heading">Color:</h3>
                                        <div>
                                            <ul className='colors ps-0'>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 mt-2 mb-3">
                                        <h3 className="product-heading"> Quantity: </h3>
                                        <div className="">
                                            <input type="number" name="" min={1} max={10} className="form-control" style={{ width: "70px" }} id="" />
                                        </div>
                                        <div className="d-flex align-items-center gap-15">
                                            <button className="button border-0" type="submit">
                                                Add to cart
                                            </button>
                                            <button className="button border-0 buyItNow" type="submit">
                                                Buy It Now
                                            </button>
                                        </div>

                                    </div>
                                    <div className="d-flex align-items-center gap-15">
                                        <div>
                                            <a href=''>
                                                <TbGitCompare className="fs-5 me-2" /> Add to Compare
                                            </a>
                                        </div>
                                        <div>
                                            <a href=''>
                                                <AiOutlineHeart className="fs-5 me-2" />Add to Wishlist
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 flex-column pt-5 gap-15">
                                        <h3 className="product-heading"><LiaShippingFastSolid /> &nbsp; Shipping & Returns </h3>
                                        <p className="product-data"> Free shipping and returns available on all orders! <br />
                                            We ship all Us domestic orders within </p>
                                    </div>
                                    <div className="d-flex gap-10 flex-column my-2 border-top">
                                        <h3 className="product-heading"><TbGitCompare /> &nbsp; Materials </h3>
                                        <p className="product-data"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Phasellus nunc purus, vulputate ac rutrum at, sollicitudin eget sem.
                                            Praesent non nunc tempor, bibendum nibh vitae, sodales nunc.  </p>
                                    </div>
                                    <div className="d-flex gap-10 flex-column my-2 border-top">
                                        <h3 className="product-heading"><CiRuler /> &nbsp; Dimensions </h3>
                                        <p className="product-data"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Phasellus nunc purus, vulputate ac rutrum at.  </p>
                                    </div>
                                    <div className="d-flex gap-10 flex-column my-2 border-top">
                                        <h3 className="product-heading"><AiOutlineHeart /> &nbsp; Care Instruction </h3>
                                        <p className="product-data"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Phasellus nunc purus, vulputate ac rutrum at.  </p>
                                    </div>
                                    <div className="d-flex gap-10 flex-column my-2 border-top">
                                        <h3 className="product-heading"><BsLink45Deg /> &nbsp; Share </h3>
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <h3 className="product-heading"> Payment methods </h3>
                                            <div className="d-flex gap-15 payment">
                                                <LiaCcVisa />
                                                <LiaCcVisa />
                                                <LiaCcVisa />
                                                <LiaCcVisa />
                                                <LiaCcVisa />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='description-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h4> Description</h4>
                            <div className='bg-white p-3'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id metus non felis tempus sagittis.
                                    Fusce lobortis felis enim, luctus bibendum dolor placerat sit amet.
                                    Suspendisse potenti. Praesent sodales lectus lectus, aliquet scelerisque nunc tempus eu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='reviews-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div id='review' className='col-12'>
                            <h4>Review</h4>
                            <div className="review-inner-wrapper">
                                <div className='review-head d-flex justify-content-between align-items-end'>
                                    <div>
                                        <h4 className='mb-2'>Customer Reviews</h4>
                                        <div className='d-flex align-items-center gap-10'>
                                            <ReactStars
                                                count={5}
                                                // onChange={ratingChanged}
                                                value={3.5}
                                                isHalf={true}
                                                size={18}
                                                activeColor="#ffd700"
                                            />
                                            <p className=''> Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {orderedProduct && (
                                        <div>
                                            <a className="text-dark text-decoration-underline" href=''> Write a Reviews</a>
                                        </div>
                                    )
                                    }
                                </div>
                                <div className="review-form py-4">
                                    <h4> Write a Review</h4>
                                    <form action="" className="d-flex flex-column gap-15">
                                        <div>
                                            <ReactStars
                                                count={5}
                                                // onChange={ratingChanged}
                                                value={0}
                                                isHalf={true}
                                                size={18}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Comment"></textarea>
                                        </div>
                                        <div className=" d-flex justify-content-end">
                                            <button className="button border-0">Submit Review</button>
                                        </div>
                                    </form>

                                </div>
                                <div className="review">
                                    <div className="review">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className="mb-0">Navdeep</h6>
                                            <ReactStars
                                                count={5}
                                                // onChange={ratingChanged}
                                                value={0}
                                                isHalf={true}
                                                size={18}
                                                activeColor="#ffd700"
                                            />
                                        </div>

                                        <p className="mt-3">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Sed id metus non felis tempus sagittis.
                                            Fusce lobortis felis enim, luctus bibendum dolor placerat sit amet.
                                            Suspendisse potenti. Praesent sodales lectus lectus,
                                            aliquet scelerisque nunc tempus eu.
                                        </p>
                                    </div>
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
                    </div>
                </div>
            </section>

        </>
    )
}

export default SingleProduct