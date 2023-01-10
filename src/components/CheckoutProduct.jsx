import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

export const removal = 'Remove_From_Basket'

function CheckoutProduct({id,image,title,rating,price}) {
  const [{basket},dispatch] = useStateValue()
  const removefromBasket = () =>{
    dispatch({
      type:removal,  
      id:id,
    })
  }
  return (
    <div className='checkoutProduct'>
      <img src={image} alt="" className='checkoutProduct_image'/>
      <div className='leftcheckout'>
        <h3>{title}</h3>
        <h4>{price}</h4>
        <div className='ratingCheckout'>
        {Array(rating)
         .fill()
         .map((_,i) => (
            <p>🌟</p>
          ))} 
        </div>
        <button onClick={removefromBasket} className='basketButton'>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
