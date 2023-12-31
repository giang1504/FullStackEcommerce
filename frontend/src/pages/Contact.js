import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from '../components/Meta';

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title='Contact Us' />
      <div className='contact-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.014695111708!2d105.77135407572867!3d21.07207528628855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134552defbed8e9%3A0x1584f79c805eb017!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBN4buPIC0gxJDhu4thIGNo4bqldA!5e0!3m2!1svi!2s!4v1702699053455!5m2!1svi!2s"
                width="600" height="450" className="border:0 w-100"
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title'> Contact</h3>
                  <div className="form-group mb-2">
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                  <div className="form-group mb-2">
                    <input type="text" className="form-control" placeholder="Email *" />
                  </div>
                  <div className="form-group mb-2">
                    <input type="text" className="form-control" placeholder=" Phone Number" />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" rows="3" placeholder='Comment'></textarea>
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

export default Contact