import React, { useState,useEffect } from "react";
import "./assets/css/grid.css";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter,faBookmark} from "@fortawesome/free-solid-svg-icons";
import Comp from "./grid";



const Genre=()=>{
    const [data,setdata]=useState([]);
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_BASE_URL}/api`).then((res)=>{
            return res.json();
        }).then((data)=>{setdata(data)});
      
    })
  
 let {id}=useParams();
 

 if(id==="subbed")
 {
    id="sub";
 }
 else if(id==="dubbed"){
    id="dub"
 }
 let anime=[];
 for(let i=0;i<data.length;i++)
 {  if(id==="sub" || id==="dub")
     {
        if(data[i].voice[0]===id || data[i].voice[1]===id)
        {
            anime.push(data[i]); 
        }
        continue;
     }
    if(id==="All" || data[i].genre===id)
    {
        anime.push(data[i]);
    }
    if(id==="watchlatter")
    {
        if(data[i].w===true)
        {
            anime.push(data[i])
        }
    }

 }
 // filter use state
 var [filter,setfilter]=useState(false);
 const [filstate,setfilstate]=useState("");
 // if the location is change it set filter=0;
 useEffect(() => {
    setfilstate("");
    setfilter(false);
  }, [id]);
return (
    
    <div className="anime-container-fluid">
        <div className="genra">
            <div className="genra-title"><a href="#">{id.toUpperCase()}</a></div>
            <div className="filter">
                <FontAwesomeIcon icon={faFilter} className="i" onClick={()=>{setfilter(!filter)}}/>
            </div>
            
        </div>
       {(filter) && <div className="filteroption">
           <span onClick={()=>{setfilstate("DUB")}}>DUB</span>
           <span onClick={()=>{setfilstate("SUB")}}>SUB</span>
           <span onClick={()=>{setfilstate("DUB & SUB")}}>DUB & SUB</span>
        </div>}
        <div className="line"></div>
        <div className="anime-container">
            {
           anime.map((arr)=>
               { if(filstate==="")
                 {return <Comp arr={arr}/>}
                 if(filstate==="DUB")
                 {
                    if(arr.voice[0]==="dub" || arr.voice[1]==="dub")
                    {
                        return (<Comp arr={arr}/>)
                    }
                 }
                 if(filstate==="SUB")
                  {
                    if(arr.voice[0]==="sub")
                    {
                        return (<Comp arr={arr}/>)
                    }
                  }
                  else
                  {
                    if(arr.voice[0]==="sub" && arr.voice[1]==="dub")
                    {
                        return (<Comp arr={arr}/>)
                    }
                  }

               })  
}
        </div>
     </div>
)
};
export default Genre;
