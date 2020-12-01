import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';


const Form = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();

    const signIn =(e)=>{
        e.preventDefault()
        history.push("/home")
    }
    return (
        <div>
        <form>
        <h5>Login</h5>
        
        <input type="email" value={email} name="email" onChange={e=>setEmail(e.target.value)} />

        <h5>Password</h5>
        
        <input type="password" value={password} name="password" onChange={e =>setPassword(e.target.value)} />

      
     
    <Link to="/forgotPassword"> 
      <p>
        Forgot Password ?
      </p>
    </Link>
     <button className="login__signInButton"
      type="submit"
      onClick={signIn}>Sign in</button>  
     
      <Link to="/signUp"> 
      <p>
       Create Account
      </p>
      </Link>
      </form>
        </div>
    )
}

export default Form
