import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({image,title,rating,price}) {
  return (
    <div className='Checkout Product'>
      <img src={image} alt="" />
    </div>
  )
}

export default CheckoutProduct
