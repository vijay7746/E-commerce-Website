import React,{useState,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";

const UpdateProduct =()=>{

    const[name,setName] = useState('');
    const[price,setPrice] = useState('');
    const[category,setCategory] = useState('');
    const[company,setCompany] = useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
      
        getProductDetails();

},[])

   const getProductDetails=async()=>{
     console.warn(params);
     let result = await fetch(`http://localhost:5000/product/${params.id}`,{
      headers:{
         
         authorization :` bearer ${JSON.parse(localStorage.getItem('token'))} `
       }
     });
     result = await result.json();
     setName(result.name);
     setPrice(result.price);
     setCategory(result.category);
     setCompany(result.company);
   }

    const UpdateProduct=async(e)=>{
          e.preventDefault()
           
         let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method:'Put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
               'Content-Type' : "application/json",
               
               authorization :` bearer ${JSON.parse(localStorage.getItem('token'))} `
                
               
            }
         });
         result = await result.json();
         console.warn(result);
         navigate('/');
      }

  return (
    <div  className="product my-2">
    <h1>Update Product</h1>
    <form>
        <div className="input-group input-group-lg my-3 ">
           <span className="input-group-text" id="inputGroup-sizing-lg">Product Name</span>
           <input type="text"  value = {name} onChange={(e)=>setName(e.target.value)} className="form-control " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
            
           />
        </div>
        <div className="input-group input-group-lg my-3 ">
           <span className="input-group-text" id="inputGroup-sizing-lg">Price</span>
           <input type="text" value = {price} onChange = {(e)=>setPrice(e.target.value)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
        </div>
        <div className="input-group input-group-lg my-3 ">
           <span className="input-group-text" id="inputGroup-sizing-lg">Category</span>
           <input type="text"  value = {category} onChange={(e)=>setCategory(e.target.value)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
        </div>
        <div className="input-group input-group-lg my-3  ">
           <span className="input-group-text" id="inputGroup-sizing-lg">Company</span>
           <input type="text" value = {company} onChange={(e)=>setCompany(e.target.value)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
        </div>
        <button  onClick={UpdateProduct} className="btn btn-success my-3 mx-5">Update Product</button>
        </form>
    </div>
  )
}
export default UpdateProduct; 