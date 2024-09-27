import React from 'react';
import logo from '../../images/logo.png';
import './ProductDetail.css';
import ProductDetailForm from './ProductDetailForm/ProductDetailForm';

const ProductDetail = () => {
    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-md-3 text-center m-auto">
                    <img src={logo} className='img-fluid productDetail-logo ' alt="" />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-4 m-auto border rounded px-4 py-4">
                    <h4 className='fs-4 mb-4'>Register as a Volunteer</h4>
                    <ProductDetailForm />
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;