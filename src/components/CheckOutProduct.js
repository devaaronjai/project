import React from 'react';
import CheckOutPage from './CheckOutPage';

import { useStateValue } from './StateProvider';
import Subtotal from "./SubTotal";

function Checkout() {
    const [{basket},dispatch ] = useStateValue();
    return (
        <div className="checkout">
         <div className="checkout__left">
         <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map((item)=>(
              <CheckOutPage 
                  image = {item.image}
                  price={item.price}
                  rating={item.content}
                  title ={item.title}
                  id={item.id}
              />
          ))}

         </div>
         </div>
         <div className="checkout__right">
          <Subtotal />
         </div>
        </div>
    )
}

export default Checkout