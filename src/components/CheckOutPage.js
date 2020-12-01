import React from 'react';
import { useStateValue } from './StateProvider';

const CheckOutPage = ({image,title,content,id,price}) => {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type : "REMOVE_FROM_BASKET",
            id : id
        })
    }
    return (
        <div>
        <img className="checkoutProduct__image" src={image} />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p2>{content}</p2>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
        </div>
    )
}

export default CheckOutPage
