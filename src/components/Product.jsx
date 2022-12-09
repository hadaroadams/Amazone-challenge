import React from 'react';
import './Product.css';

function Product({tittle,price,image,rate}) {
  return (
    <div className='product'>
      <div className="product_info">
        <p>{tittle}</p>
        <div>
          <p>
          <small>$</small>
        <strong>{price}</strong>
          </p>
        </div>
        <div className='product_rate'>
         {Array(rate)
         .fill()
         .map((_,i) => (
            <p>🌟</p>
          ))} 
        </div>
      </div>
        <img src={image} alt="" />
        <button>Add to Basklet</button>
    </div>
  )
}

export default Product
