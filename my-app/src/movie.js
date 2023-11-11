import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./assets/css/video.css";
import Comp from "./grid";
import { Link } from "react-router-dom";
import { faFilter,faBookmark} from "@fortawesome/free-solid-svg-icons";
const Movie=()=>{
    const {id}=useParams();
    const [anime,setanime]=useState([]);
    
    
    const [data,setdata]=useState([]);
    
    useEffect(()=>{
        fetch("/api").then((res)=>{return res.json()}).then((data)=>{setdata(data)});
      })
    
    
    
    useEffect(()=>{
        for(let i=0;i<data.length;i++)
        {
            if(data[i].name===id)
            {
                setanime(data[i]);
                break;
            }
        }
    })
    return(<>

   <div className="video-container">
      <div className="video">
        
            <iframe src={anime.vid} allowfullscreen></iframe>
        
       
      </div> 
      <div className="detail2">
        <div className="image">
           <div className="image-content">
               <img src={anime.link} alt="" srcset=""/>
           
           </div>
        </div>
        <div className="anime-detail">
         <div className="detail-content">
            <div className="title2"><p>{anime.name}</p></div>
            <div className="description"><p>Now in possession of the Edens Zero, Shiki Granbell has gathered the Four Shining Stars. With the help of his new friends, Shiki will be able to breach Dragonfall—the border of the Sakura Cosmos swarming with mechanical dragons. Once that is achieved, he can continue his quest to find the goddess Mother. Before the Edens Zero crew can advance their journey, they notice a mysterious warship following them. Upon learning that the ship—the Belial Gore—belongs to Drakken Joe</p> </div>
         </div>
        </div>
   
   
   
       </div>
      
      
    </div>
    <div className="anime-container-fluid">
          
        <div className="line"></div>
        <div className="genra">
            <div className="genra-title">Recomanded</div>
            
            
        </div>
        <div className="anime-container">
            
          { 
            data.filter((arr)=>{
                if(arr.genre===anime.genre )
                   
                      
                    {return arr}
                
            }).map((arr,i)=>{
                if(i<6)
                {
                return  <Comp arr={arr}/>}
            })
            
            }
        </div>
     </div>
    
    
    </>)

}
export default Movie;