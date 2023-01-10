import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Product from './Product'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal.jsx'

function Checkout() {
  const [{basket},dispatch] = useStateValue()
  return (
    <div className='checkout'>
        <div className="checkout_left">
        <img className='checkout_ad' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz84sMIMQjUW6wR1Ckx1Y1xhz2h68K5f76zA&usqp=CAU" alt=""/>
        <div>
        <h2 className='checkout_tittle' >Your shopping Basket</h2 >
        {basket.map((item) =>
        <CheckoutProduct id={item.id} price={item.price} rating={item.rate} image={item.image} title={item.title}/>
        )}
        {/*check out product*/}
        </div>
        </div>
        <div className="checkout_right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout
