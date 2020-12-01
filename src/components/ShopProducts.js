import React from 'react';
import  { Card ,CardContent,Typography,Grid } from "@material-ui/core";
import {useStateValue} from "./StateProvider";

const ShopProducts = ({id,title,price,content,image}) => {
    const [{basket},dispatch] = useStateValue()
    const addToBasket =(e) =>{
        dispatch({
            type : "ADD_TO_BASKET",
            item :{
                id ,
                title,
                price,
                content,
                image
            }
        })
    }
    return (
        <div>

            <Grid justify="center">
             <Card>
               <img src={image} alt={id} />           
             <CardContent>
              <Typography> {title} </Typography>
              <Typography>  {content} </Typography>
              <strong>${price}</strong>
             </CardContent>
             <button onClick={addToBasket}>Add To Cart</button>
             </Card>
            </Grid>

        </div>
    )
}

export default ShopProducts
