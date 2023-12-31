import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from '../components/Meta';
import { NavLink, Link } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";

function SingleBlog() {
    return (
        <>
            <Meta title={"Dynamic Blog Name"} />
            <BreadCrumb title="Dynamic Blog Name" />
            <div className='blog-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='single-blog-card'>
                                <Link to='/blog' className='d-flex align-items-center gap-10'>
                                    <BsArrowLeft className='fs-4' /> Go back to blog
                                </Link>
                                <h3 className='title'>
                                    A Beautiful Sunday Morning Renaissance
                                </h3>
                                <img src='https://simpleenglish.com.vn/wp-content/uploads/2018/08/5-Best-Content-Writing-Tools-to-Write-Killer-Blog-Post.png' className='img-fluid w-100 my-4' alt='blog' />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac ante et lacus congue malesuada eget ut urna. Duis id elit erat. Morbi in porta arcu. Nulla ipsum tortor,
                                    vulputate id ornare vel, sollicitudin in erat. Proin dui augue, luctus vitae posuere sed, lobortis ut sem. Mauris arcu massa, mollis ac velit quis, finibus ullamcorper enim.
                                    Praesent blandit sodales enim, eget consequat ipsum consequat a. Phasellus pulvinar libero vitae nibh porta pharetra. Donec vel turpis nec est tincidunt scelerisque. Quisque ac volutpat urna.
                                    Suspendisse quis nibh et risus sagittis tristique sed ut risus. Vivamus in odio ac nisi pellentesque ullamcorper. Cras ac lectus et augue pretium sagittis. Donec dui mauris, viverra nec arcu malesuada, blandit iaculis urna. Nulla felis ex, blandit sed facilisis in, ultricies id enim.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog