import React, { useEffect } from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

export  const statement= 'add_to_basket '

function Product({ id,title,price,image,rate}) {
  const [{basket},dispatch] = useStateValue();
        console.log('This is the basket',basket)
  const addToBasket = () => { 
    //dispatch
    dispatch({
      type:statement,
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rate:rate,
      },
    });
  };
  return (
    <div className='product'>
      <div className="product_info">
        <p>{title}</p>
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
        <button onClick={addToBasket}>Add to Basklet</button>
    </div>
  )
}

export default Product
