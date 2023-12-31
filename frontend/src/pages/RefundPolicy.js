import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from '../components/Meta';
import { NavLink, Link } from 'react-router-dom';

function RefundPolicy() {
    return (
        <>
            <Meta title={"Refund Policy"} />
            <BreadCrumb title="Refund Policy" />
        </>
    )
}

export default RefundPolicy