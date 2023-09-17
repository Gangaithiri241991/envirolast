import  {useState}  from  "react";

import Button from "@mui/material/Button"
import img from './images.jpg'
import {useEffect} from  'react'
import axios from 'axios'
export default function SearchBar(){
  const [data,setData]=useState([]);
  const [records,setRecords]=useState([])
   const fetchData=async()=>{
     const request=await axios.get("https://flipkart2-zdyu.onrender.com/scrape")
     const response=await request.data
     setData(response.allProductNames);
     setRecords(response.allProductNames);
    //fetch("https://studentscors.onrender.com/mentors/all")
    //.then((response)=>response.json())
    //.then((json)=>console.log(json))
    console.log("data" ,response.allProductNames)
  
   }
   useEffect(()=>{
   fetchData();
  },[]);

const Filter=(event)=>{
setRecords(data.filter(f=>f.title.toLowerCase().includes(event.target.value)))
}

    return(
    <div>
        
        <h1>E-commerce</h1>
         <div className="search-bar-input"> 
         <i className="fa-solid fa-cart-shopping"></i>
         <input type="text" onChange={Filter}></input>
        
       
         </div>
         <div> <img src={img}/></div><br/>
         <div className="card-container">
         <div className="col-lg-4">
         
         {
          records?.map((e)=>{
            return(<div key={e._id} className="card mb-5 mb-lg-0">
              
            
              <div className="card-title">{e.title}</div><hr/><br/>
              <div className="card-body">
              <div><img src={e.image}></img></div><br/>
              <p style={{paddingleft:"20px"}}>Price:{e.price}</p></div><br/>
              <p className="card-footer">Ratings&Reviews:{e.ratingandreviews}</p>
              
              
            </div>)
          })
         }
           </div>
           </div>
       
         </div>
        
     
    
     

      

   
)};
// <div className="col-lg-4">