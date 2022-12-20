import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


const  Login =()=>{

const  [email,setEmail] = React.useState('');
const  [password,setPassword] = React.useState('');
const navigate  = useNavigate();

 useEffect(()=>{
   const auth = localStorage.getItem("user");

   if(auth){
       navigate('/');
   }
 })

const handleLogin = async(e)=>{
  e.preventDefault() ;
    console.warn("email,password",email,password);
     let result = await fetch('http://localhost:5000/login',{
        method : 'post',
         body : JSON.stringify({email,password}),
         headers : {
         'Content-Type' : 'application/json'
         }
     });
     result = await result.json();
     console.warn(result);
  

      if(result.auth){ 
        localStorage.setItem("user",JSON.stringify(result.user));
        localStorage.setItem("token",JSON.stringify(result.auth));

    
          navigate('/');
      

      }
      else{
         alert("Please enter correct details");
      }
}

    return (
        <form>
        <div className="form-group mx-5 my-2">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control"  name='email' aria-describedby="emailHelp" placeholder="Enter email" value = {email} onChange ={(e)=>setEmail(e.target.value)} />
          
        </div>
        <div className="form-group mx-5 my-2">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control"  name='password' placeholder="Password" value = {password}  autoComplete="on" onChange ={(e)=>setPassword(e.target.value)} />
        </div>
        <button onClick={handleLogin} type="submit" className="btn btn-primary my-2 mx-5">Login</button>
      </form>
    )
}
export default Login;