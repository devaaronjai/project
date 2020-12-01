import React from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Redirect} from "react-router-dom";
import {Route,Switch} from "react-router-dom";
import Form from './components/Form';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Footer from './components/Footer';
import RedirectPage from './components/RedirectPage';
import ShopNow from './components/ShopNow';
import CheckOutProduct from './components/CheckOutProduct';


const App = () => {
    return (
     <Router> 
    
          <NavBar />
       <Switch> 
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Form} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/forgotPassword" component={ForgotPassword} />
      <Route exact path="/shopNow" component={ShopNow} />
      <Route exact path="/checkout" component={CheckOutProduct} />
     
      <Route to ="/redirect" component={RedirectPage} />
      
        </Switch>
           <Footer />
      </Router>
    )
}

export default App
