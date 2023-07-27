import React, { useState,useEffect } from "react";
import "./assets/css/grid.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter,faBookmark} from "@fortawesome/free-solid-svg-icons";
import Comp from "./grid";


const Search=()=>{
    
    const [Query,setQuery]=useState("");
    const [data,setdata]=useState([]);
    useEffect(()=>{
      fetch(`${process.env.REACT_APP_BASE_URL}/api`).then((res)=>{return res.json()}).then((data)=>{setdata(data)});
    })
    
 return(
    <>
      <div className="anime-container-fluid">
      <div className="container">

        
     <div className="searchInputWrapper">
        <input className="searchInput" type="text" placeholder='Search . . .' onChange={(event)=>{setQuery(event.target.value)}}/>
       </div>
     </div>
        <div className="line"></div>
        <div className="anime-container">
            
          {
            // eslint-disable-next-line array-callback-return
            data.map((arr)=>{
                if(Query!=="")
                {
                if(arr.name.toLocaleLowerCase().includes(Query.toLocaleLowerCase()))
                {
                    return <Comp arr={arr}/>
                }}
            })
            }
        </div>
     </div>
    
    </>
 )
}
export default Search;