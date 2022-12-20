import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const AddProduct =()=>{

    const[name,setName] = useState('');
    const[price,setPrice] = useState('');
    const[category,setCategory] = useState('');
    const[company,setCompany] = useState('');
 
    const navigate  = useNavigate();



    const addProduct= async(e)=>{
      e.preventDefault()
        console.warn(name,price,category,company);
            const userId = JSON.parse(localStorage.getItem('user'))._id;
          let result = await fetch("http://localhost:5000/add-product",{
               
           method :'post',
           body :JSON.stringify({name,price,category,company,userId}),
           headers:{
            "Content-Type":"application/json",
            
            authorization :` bearer ${JSON.parse(localStorage.getItem('token'))} `
           }
           });
           result = await result.json();
           if(result){
            
            navigate("/")
           }
           console.warn(result);
    }
  return (
    <div  className="product my-2">
    <h1>Add Product</h1>
    <form>
        <div className="input-group input-group-lg my-3 ">
           <span className="input-group-text" id="inputGroup-sizing-lg">Product Name</span>
           <input type="text"  value = {name} onChange={(e)=>setName(e.target.value)} className="form-control " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
            required="required"
           />
        </div>
        <div className="input-group input-group-lg my-3 ">
           <span className="input-group-text" id="inputGroup-sizing-lg">Price</span>
           <input type="text" value = {price} onChange = {(e)=>setPrice(e.target.value)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required="required"/>
        </div>
        <div className="input-group input-group-lg my-3 ">
           <span className="input-group-text" id="inputGroup-sizing-lg">Category</span>
           <input type="text"  value = {category} onChange={(e)=>setCategory(e.target.value)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required="required"/>
        </div>
        <div className="input-group input-group-lg my-3  ">
           <span className="input-group-text" id="inputGroup-sizing-lg">Company</span>
           <input type="text" value = {company} onChange={(e)=>setCompany(e.target.value)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required="required"/>
        </div>
        <button  onClick={addProduct} className="btn btn-success my-3 mx-5">Add Product</button>
        </form>
    </div>
  )
}
export default AddProduct; 