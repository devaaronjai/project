import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import  { Card ,CardContent,Typography,Grid } from "@material-ui/core";

const SignUp = () => {
    const [FirstName , setFirstName] = useState("");
    const [LastName,setLastName] = useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const history = useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault()
        history.push("/login")

    }
    return (
      <div> 
        <Grid spacing={6} justify="center"> 
          <Card justify="center">
            <form onSubmit={handleSubmit}>
            <h5>First Name</h5>
            <input type="text" value={FirstName} name="FirstName" id="FirstName" onChange={e=>setFirstName(e.target.value)} />
            <h5>Last Name </h5>
             <input type="text" value={LastName} name="LastName" id="LastName" onChange={e=>setLastName(e.target.value)} />
            
            <h5>Email</h5>
            <input type="email" value={email} name="email" id="email" onChange={e=>setEmail(e.target.value)} />
            <h5>Password</h5>
            <input type="password" value={password} name="password" id="password" onChange={e =>setPassword(e.target.value)} />
            <button>Create</button>
             </form>
        </Card>
       </Grid>
     </div>
    )
}

export default SignUp
