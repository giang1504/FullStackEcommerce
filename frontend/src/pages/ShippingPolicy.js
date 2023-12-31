import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from '../components/Meta';
import { NavLink, Link } from 'react-router-dom';

function ShippingPolicy() {
    return (
        <>
            <Meta title={"Shipping Policy"} />
            <BreadCrumb title="Shipping Policy" />
        </>
    )
}

export default ShippingPolicy