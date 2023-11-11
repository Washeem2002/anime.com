import React, { useState,useEffect } from "react";
import "./assets/css/grid.css";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter,faBookmark} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Comp=(props)=>{
    const [name,setname]=useState("");
  
    
    useEffect(()=>{
         fetch("/post",{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name:name})
         }).then((res)=>{return res.json()}).then((data)=>{console.log(data)});
         return ()=>{setname("")};
    },[name])
    const arr=props.arr;
    
    return (  <><div className="anime sol">
            <div className="image2">
                <img src={arr.link} alt={arr.name}/>
            </div>
            <div className="detail">
                <div className="detail-content">
                <div className="watchlatter" style={{color:arr.w===false ?"black":"red"}} onClick={()=>{setname(arr.name)}}><FontAwesomeIcon icon={faBookmark} /></div>
                <div className="adio">

                { (arr.voice[0]==="dub" || arr.voice[1]==="dub") && (<span>DUB</span>)}
                { (arr.voice[0]==="sub" || arr.voice[1]==="sub")&&(<span>SUB</span>)}
                  </div>
                    <div className="title"><h3>{arr.name}</h3></div>
                    <div className="button">
                    <Link to={`/movie/${arr.name}`}> <button className="watchbtn">Watch</button></Link>
                    </div>
                </div>
            </div>
              </div></>)
    
}
export default Comp;