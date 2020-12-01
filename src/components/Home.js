import React from 'react'
import { useHistory } from 'react-router-dom'
import Product from './Product'


const Home = () => {
  const histor = useHistory();
  const handleClick = () =>{
    histor.push("/shopNow")
  }
    return (
        <div className="home">
        <div>
         <h1>Fuel your personal story with KOS </h1>
         <h4> Dive (or gently dip a toe) into the radiant rewards of a plant-based diet</h4>
         <button>Get Personal</button>
        
         <button onClick={handleClick} >Shop Now</button>
    
        </div>
      <div className="home__row">
      <Product 
      id="1234"
      image="https://cdn.shopify.com/s/files/1/2236/0863/files/reds-belt_388x.png?v=1576522328" 
      />
      <Product
      id="4563"
      image="https://cdn.shopify.com/s/files/1/2236/0863/files/kos-chocolate-protein_388x.png?v=1568476666" 
     
      />
      
      <Product 
      id="34526"
      image=" https://cdn.shopify.com/s/files/1/2236/0863/files/slider2_388x.png?v=1566982626" 
      />
      <Product 
      id="998777"
      image="https://cdn.shopify.com/s/files/1/2236/0863/files/slider1_388x.png?v=1566982623 " 
      />
      
      <Product
      id="56093"
      image="https://cdn.shopify.com/s/files/1/2236/0863/files/greens-belt_388x.png?v=1576521881 " 
      />
        </div>
    <div>
      <img src=" https://cdn.shopify.com/s/files/1/2236/0863/files/top-deco-2x_a0cd3cd2-cfb3-4325-98f1-4a1442eed0e7.png?v=1566983605" alt="" />
    </div>
      <p>
      KOS is a boutique of complementary plant-based superfoods— produced in small batches, responsibly sourced and
      artificial ingredient-free.
      </p>
      <span><img src="https://cdn.shopify.com/s/files/1/2236/0863/files/non-gmo_5e0ec64c-fd56-4645-a1f0-e692dc9401cb.png?v=1566983795 " alt="#" /> </span>
      <span><img src="https://cdn.shopify.com/s/files/1/2236/0863/files/vegan_f61a728f-8b49-438a-8be2-9de151a01dd5.png?v=1566983804 " alt="#" /> </span>
      <span><img src="https://cdn.shopify.com/s/files/1/2236/0863/files/nsf.png?v=1566983809 " alt="#" /> </span>
      <span><img src=" https://cdn.shopify.com/s/files/1/2236/0863/files/usa_5a643d3b-b123-4055-8489-cb3bedfeb93e.png?v=1566983822" alt="#" /> </span>
      <span><img src=" https://cdn.shopify.com/s/files/1/2236/0863/files/usda.png?v=1566983828" alt="#" /> </span>
   
       

        </div>
    )
}

export default Home
