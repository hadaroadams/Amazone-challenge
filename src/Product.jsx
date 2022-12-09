import React from 'react';
import './Product.css';

function Product() {
  return (
    <div className='product'>
      <div className="product_info">
        <p>The lean startup</p>
        <small>$</small>
        <strong>500.35</strong>
        <p>🌟🌟🌟🌟</p>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRTUA9Mtk7-Sy1iNTGCK1Y7_PdEDva3HQkQ&usqp=CAU" alt="" />
        <button>Add to Basklet</button>
    </div>
  )
}

export default Product
