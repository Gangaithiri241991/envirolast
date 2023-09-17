import React from 'react'
import Button from '@mui/material/Button'
import {NavLink} from 'react-router-dom'
export default function Navbar(){
   return(
    <div>
        <div className="flipkart-container">
        <NavLink to="/"><Button variant="contained">home</Button></NavLink>
        <NavLink to="/home1"><Button variant="contained">home1</Button></NavLink>
        <Button variant="contained">home2</Button>
        <Button variant="contained">home3</Button>
        <Button variant="contained">home4</Button>
        </div>
    </div>
   ) 
}


