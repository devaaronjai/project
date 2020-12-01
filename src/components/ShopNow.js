import React from 'react'
import ShopProducts from './ShopProducts'

const ShopNow = () => {
    return (
        <div>
        <h1>Shop All</h1>
            <ShopProducts
             id = " 324"
             title = "KOS Vitamin C 500mg Chewable Tablets "
             image = "https://cdn.shopify.com/s/files/1/2236/0863/products/KOS-VitC-Hero-New_720x.png?v=1595630281 " 
             content = "Promotes Healthy Immune System Function* "
             price = "12.99"
            />
            <ShopProducts
            id = " 765"
            title = "KOS Immune Defense with EpiCor "
            image = " https://cdn.shopify.com/s/files/1/2236/0863/products/KOS-Immune-Defense-Hero-New_720x.png?v=1594938516" 
            content = " An Immunity Boost From Encapsulated Whole Foods*"
            price = "42.99"
           />
           <ShopProducts
           id = "333 "
           title = "KOS Cordyceps Capsules "
           image = " https://cdn.shopify.com/s/files/1/2236/0863/products/KOS-Cordyceps-Caps-Hero-New_6098674f-2733-4e48-9b2e-024cfaa3f746_720x.png?v=1597724916" 
           content = "Improves Athletic Performance & Libido* "
           price = " 22.99"
          />
          <ShopProducts
          id = " 444"
          title = " KOS Organic Beetroot Capsules"
          image = " https://cdn.shopify.com/s/files/1/2236/0863/products/KOS-Beet-Root-Caps-Hero-New_9e9b2907-bbc6-4586-bd1b-cd0f436f9f38_720x.png?v=1597724840" 
          content = "Improves Blood Circulation & Heart Health* "
          price = " 19.99"
         />
         <ShopProducts
         id = "555 "
         title = "KOS Matcha Tea Capsules "
         image = " https://cdn.shopify.com/s/files/1/2236/0863/products/KOS-Matcha-Tea-Caps-Hero-New_6accc035-c76a-43ba-9fee-3cdf90c0150e_720x.png?v=1597124270" 
         content = " Boosts Metabolism & Energy Levels*"
         price = "22.99 "
        />
        <ShopProducts
        id = " 766"
        title = "KOS Maringa Leaf Capsules "
        image = "https://cdn.shopify.com/s/files/1/2236/0863/products/KOS-Moringa-Leaf-Caps-Hero-New_890d0d78-00e8-4ef1-965c-d6082a2aadc1_720x.png?v=1597096206 " 
        content = "A Superfood Rich In Antioxidants "
        price = "19.99"
       />
       
        </div>
    )
}

export default ShopNow
