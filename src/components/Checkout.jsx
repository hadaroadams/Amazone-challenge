import React from 'react'
import './Checkout.css'
import Product from './Product'
import Subtotal from './Subtotal.jsx'

function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkout_left">
        <img className='checkout_ad' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz84sMIMQjUW6wR1Ckx1Y1xhz2h68K5f76zA&usqp=CAU" alt=""/>
        <div>
        <h2 className='checkout_tittle' >Your shopping Basket</h2 >
        <Product
           tittle="Play station 5"
           price={600.47} 
           rate={5} 
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpeMXYF30QxD7KqDNcAymGIyLPgxAbxBoGw&usqp=CAU"
           classsName="Product_box"
          />
          <Product
           tittle="Play station 5"
           price={600.47} 
           rate={5} 
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpeMXYF30QxD7KqDNcAymGIyLPgxAbxBoGw&usqp=CAU"
           classsName="Product_box"
          />
        {/*Basket */}
        {/*Basket */}
        </div>
        </div>
        <div className="checkout_right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout
