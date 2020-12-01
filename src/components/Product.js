import React from 'react';
import "./Product.css";

const Product = ({image,id}) => {
    return (
        <div className="product">
            <img src={image} alt={id} />
        </div>
    )
}

export default Product


