import React from 'react';
import "./NavBar.css";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';

const NavBar = () => {
  const [{basket},dispatch] = useStateValue();
    return (
        <div className="navbar">
          <div>
            <span>Shop All <ArrowRightAltIcon /> </span>
            <span>Best Sellers</span>
            <span>Why Kos?</span>
        </div>
          <div className="navbar__logo">
           <Link to="/home"> 
            <span> 
              <img src= "https://cdn.shopify.com/s/files/1/2236/0863/files/logo_cd7055a1-b914-4a19-8ba1-74a0f51a5c67_180x.png?v=1566981076 " alt="logo" />
            </span>
           </Link>
          </div>
         <div>
            <span>Learn</span>
            <span>Reviews</span>
            <span>Find Kos</span>
         </div>
          <div className="nav__option">
            <span className="nav_lay"><SearchIcon /> </span>
            <Link to="/login"> 
            <span className="nav_lay"><AccountCircleIcon /> </span>
            </Link>
            <Link to="/Checkout">
            <span className="nav_lay"><ShoppingCartIcon /> </span>
            </Link>
            {basket?.length}
          </div>
        </div>
    )
}

export default NavBar
