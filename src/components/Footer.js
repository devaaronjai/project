import React from 'react'
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
       <div className="main-footer">
          <div className="container">
            <div className="row">
              <div className="col">
                <h4>KOS</h4>
                <ul className="list-unstyled">
                  <li>About</li>
                  <li>Project 10Million Meals</li>
                  <li>Became A Retailer</li>
                  <li>Store Locator</li>
                </ul>
              </div>
              <div className="col">
                 <h4>More</h4>
                 <ul className="list-unstyled">
                 <li>Articles </li>
                 <li> Recipes</li>
                 <li> Reviews</li>
                 <li>Accesibility </li>
                 </ul>
              </div>

              <div className="col">
              <h4>Support</h4>
              <ul className="list-unstyled">
              <li>Help Center </li>
              <li> Contact: 1 (833)344-4567</li>
              <li>Email: hello@kos.com </li>
              </ul>
           </div>

           <div className="col">
           <h4>Social</h4>
           <ul className="list-unstyled">
           <li><FacebookIcon /> </li>
           <li><EmailIcon /> </li>
           <li><InstagramIcon /> </li>
           </ul>
        </div>
        <hr/>
          <div className="row">
             <p className="row-sm"> 
             These statements have not been evaluated by the Food and Drug Administration.

             This product is not intended to diagnose, treat, cure or prevent any disease.
             
             National Meal Claim: *$1 helps to provide at least ten meals secured by Feeding America® on behalf of local member food banks.
             
             © 2020 KOS.com  |  Privacy Policy  |  Terms of Service
             </p>
          </div>
            </div>
          </div>
       </div>
    )
}

export default Footer
