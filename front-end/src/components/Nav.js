import React, { useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Nav=()=>{
   const auth = localStorage.getItem('user');
   const navigate = useNavigate();
   const logout =()=>{
    localStorage.clear();
    navigate("/signup");
   }
    return(
        <div>
        <img src="https://img.freepik.com/premium-vector/happy-shop-logo-template_57516-57.jpg" alt="logo" className='logo' />
            {auth ?
            <ul className='nav-ul'>
               
                <li><Link to = "/">Product</Link></li>
                <li><Link to = "/add">Add Product</Link></li>
                <li><Link to = "/update">Update Product</Link></li>
                
                <li><Link onClick = {logout} to = "/signup">Logout({JSON.parse(auth).name})</Link></li>
                
            </ul>
            :
            <ul className="nav-ul nav-right">
            <li><Link  to = "/login">Login</Link></li><li><Link to = "/signup">Sign Up</Link></li>
                  
            </ul>
            }
        </div>
    )
}
export default Nav;