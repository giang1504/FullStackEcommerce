import React from 'react';
import ReactStars from "react-rating-stars-component";
import { NavLink, Link } from 'react-router-dom';



function SpecialProduct() {
  return (
   <>
    <div className='col-4 py-2'>
            <div className='special-product-card'>
                <div className='d-flex justify-content-between'>
                    <div className='col-6 d-flex flex-column'>
                        <div className='col-12 up'>
                        <img src='images/tab1.jpg' className='img-fluid' alt='watch'/>
                        </div>
                        <div className='col-6 d-flex down'>
                        <img src='images/tab2.jpg' className='img-fluid border-image' alt='watch'/>
                        <img src='images/tab3.jpg' className='img-fluid border-image' alt='watch'/>
                        </div>
                    </div>
                    <div className='special-product-content col-6'>
                        <h5 className='brand'>Havels</h5>
                        <h6 className='title'> Samsung Galaxy Note10+ Mobile Phone; Sim ...</h6>
                        <ReactStars
                            count={5}
                            // onChange={ratingChanged}
                            value= {3.5}
                            isHalf= {true}
                            size={18}
                            activeColor="#ffd700"
                        />
                        <p className='price'> 
                            <span className='red-p' style={{color:"red"}}>$100</span> &nbsp; <strike>$200</strike>
                        </p>
                        <div className='discout-till d-flex align-items-center gap-10'>
                            <p className='mb-0'>
                                <b>5 days</b>
                            </p>
                            <div className='d-flex gap-10 align-items-center'>
                                <span className='badge rounded-circle p-2 bg-danger'>1</span>:
                                <span className='badge rounded-circle p-2 bg-danger'>1</span>:
                                <span className='badge rounded-circle p-2 bg-danger'>1</span>
                            </div>
                        </div>
                       <div className='prod-count my-3'>
                        <p> Product: 5</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width:"50px"}} 
                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                       </div>
                       <Link className='button'> Add to cart</Link>

                        
                    </div>

                </div>
            </div>
    </div>
   </>
  )
}

export default SpecialProduct