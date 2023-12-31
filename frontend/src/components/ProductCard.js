import React from 'react';
import ReactStars from "react-rating-stars-component";
import { NavLink, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import prodCompare from '../images/prodcompare.svg';
import wish from '../images/wish.svg';
import wishlist from '../images/wishlist.svg';
import watch from '../images/watch.jpg';
import tab from '../images/tab.jpg';
import tab1 from '../images/tab1.jpg';
import addcart from '../images/add-cart.svg';
import view from '../images/view.svg';



function ProductCard(props) {

  let location = useLocation();
  const { grid } = props;
  const price = 500;

  return (
    <>
      <div className={` ${location.pathname === '/product' ? `gr-${grid}` : "col-3"}`}>
        <Link to={
          location.pathname === '/'
            ? "product/:id"
            : location.pathname === '/product/:id'
              ? '/product/1'
              : '/:id'
        }

          className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
            <Link>
              <img src={wish} className='img-fluid' alt='wishlist' />
            </Link>
          </div>
          <div className='product-image'>
            <img src={watch} className='img-fluid' alt='product image' />
            <img src={watch} className='img-fluid' alt='product image' />
          </div>
          <div className='product-details'>
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              // onChange={ratingChanged}
              value={3.5}
              isHalf={true}
              size={18}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === '12' ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam aliquet lacus magna, id dignissim nisi pellentesque vitae.
            </p>
            <p className='price'>{price}</p>
          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
              <Link>
                <img src={prodCompare} className='img-fluid' alt='compare' />
              </Link>
              <Link>
                <img src={view} className='img-fluid' alt='compare' />
              </Link>
              <Link>
                <img src={addcart} className='img-fluid' alt='compare' />
              </Link>
            </div>
          </div>
        </Link>
      </div>

    </>
  )
}

export default ProductCard;