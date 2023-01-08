import React, { useEffect } from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'

function Subtotal() {
    const [{basket},dispatch] = useStateValue()
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value)=>(
            <>
                <p>
                    {/*part of the homework */}
                    Subtotal ( {basket.lengt} items):<strong>$ {value}</strong>
                </p>
                <small className='subtotal_gift'>
                    <input type="checkbox" />The order 
                    contains a gift
                </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={','}
        />
         <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
