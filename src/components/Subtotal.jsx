import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'

function Subtotal() {
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value)=>(
            <>
                <p>
                    {/*part of the homework */}
                    Subtotal (0 items):<strong>0</strong>
                </p>
                <small className='subtotal_gift'>
                    <input type="checkbox" />The order 
                    contains a gift
                </small>
            </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={'$'}
        />
         <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
