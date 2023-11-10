import React, { useState } from "react";
import "./assets/css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown,faBars,faSearch,faUser,faClock} from '@fortawesome/free-solid-svg-icons'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Genere=()=>{
  const navigate=useNavigate();
  const[id2,setid2]=useState(0);
  return (<div className="genre">
  <ul>
   <li><Link to="/genre/Action" onClick={()=>{navigate("/")}}>Action</Link></li>
   <li><Link to="/genre/Slice of Life">Slice of Life</Link></li>
   <li><Link to="/genre/Shonen">Shonen</Link></li>
   <li><Link to="/genre/All">ALL</Link></li>
   

  </ul>
</div>)
}

const Navbar=()=>{
  let cond=false;
  if(window.innerWidth<760){
    
    cond=true;
  }
  const [open,setopen]=useState(cond) ;
  const [open2,setopen2]=useState(true);;
  return (
        <>
        
        <header>
        <div className="container-fluid align-items-center nav-container">
        <div className="mobile-option" onClick={()=>setopen(!open)} ><FontAwesomeIcon icon={faBars} className="" /></div>
        <div className="logo  ">
         <Link to="/"><span className="text-danger logo-text">Anime.com</span></Link>
        </div>
        {(!open)&& (
          
        <div className="nav-options ">
           <ul>
               
               <li ><Link to="/" >Home</Link></li>
               <li><Link className="Link-sub" onClick={()=>setopen2(!open2)}>Genre <FontAwesomeIcon icon={faSortDown}  /></Link>{(!open2) && (<Genere/>)}</li>
               <li ><Link to="/subbed" >Subbed</Link></li>
               <li ><Link to="/dubbed" >Dubbed</Link></li>
           </ul>
        </div> 
        )}
        
        <div className="search button"><Link to="/search"><button className="btn btn-dark bg-transparent"><FontAwesomeIcon icon={faSearch} />
       <span className="span">Search</span></button></Link></div>
        <div className="login button">
          <Link to="#"> <button className="btn btn-dark bg-transparent"> <FontAwesomeIcon icon={faUser}  /><span className="span">Login</span>
           </button></Link></div>
           <div className="login button">
             <Link to="/watchlatter"> <button className="btn btn-dark bg-transparent"> <FontAwesomeIcon icon={faClock}  /><span className="span">Watch later</span>
              </button></Link></div>
                   
       </div>
        </header>
        

         <div className="exam"></div>
        </>)
}
export default Navbar