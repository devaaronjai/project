import { Link } from 'react-router-dom';
import React,{useState} from 'react'

const ForgotPassword = () => {
    const [email,setEmail] =useState("");
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    return (
        <div>
         <h1>Reset Your Password</h1>
         <p>We will send you an email to reset your Password</p>
            <form onSubmit={handleSubmit}>
              <input type="email" value={email} name="email" id="email" onChange={e=>setEmail(e.target.value)}  />
              <button>Submit</button>
              
            </form>
            <Link to="/login"> 
              <span>
               Cancel
              </span>
            </Link>
        </div>
    )
}

export default ForgotPassword
