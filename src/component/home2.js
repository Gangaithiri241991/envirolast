import  {useState}  from  "react";

import Button from "@mui/material/Button"
import img from './images.jpg'
import {useEffect} from  'react'
import axios from 'axios'
export default function SearchBar(){
  const [data,setData]=useState([]);
   const fetchData=async()=>{
     const request=await axios.get("https://flipkart2-zdyu.onrender.com/scrape")
     const response=await request.data
     setData(response.allProductNames);
    //fetch("https://studentscors.onrender.com/mentors/all")
    //.then((response)=>response.json())
    //.then((json)=>console.log(json))
    console.log("data" ,response.allProductNames)
  
   }
   useEffect(()=>{
   fetchData();
  },[]);



    return(
    <div>
        
        <h1>E-commerce</h1>
         <div className="search-bar-input"> 
         <i className="fa-solid fa-cart-shopping"></i>
         <input></input>
         <Button variant="contained">Submit</Button>
       
         </div>
         <div> <img src={img}/></div><br/>
         <div className="card-container">
      
        
      
     <div className="col-lg-4">
       <div className="card mb-5 mb-lg-0">
       
        
         <div className="card-body">
         {
          data?.map((e)=>{
            return(<div key={e._id} className="card">
             
              <p>Title:{e.title}</p><br/>
              <img src={e.image}></img>
              <p>Price:{e.price}</p>
              <p>Ratings&Reviews:{e.ratingandreviews}</p>
            </div>)
          })
         }
           
           
       
         </div>
        
     </div>
    
 
</div>
     
      
    </div>
    </div>
)};