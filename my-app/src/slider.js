import React, { useState ,useEffect} from "react";
import "./assets/css/container_lide.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft,faAngleRight} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Slider=()=>{
    const arr=[{name:"Bleach",link:"https://img.zorores.com/_r/1366x768/100/58/d0/58d0b99666b285d2c484fec5dfaa23f0/58d0b99666b285d2c484fec5dfaa23f0.jpg"},{name:"Dr.stone",link:"https://img.zorores.com/_r/1366x768/100/56/cc/56cca40be898cbecc462ea9987870942/56cca40be898cbecc462ea9987870942.jpg"},{name:"The Legendary Hero Is Dead!",link:"https://img.zorores.com/_r/1366x768/100/57/f8/57f8283354fe92f23fc216a53e7368d0/57f8283354fe92f23fc216a53e7368d0.jpg"},{name:"Black Clover",link:"https://img.zorores.com/_r/1366x768/100/7c/d5/7cd514ee5521d04d45acfcdd0721f2f2/7cd514ee5521d04d45acfcdd0721f2f2.jpg"},{name:"Tonikawa",link:"https://img.zorores.com/_r/1366x768/100/be/85/be855285814752aa2def6fcaba6f3269/be855285814752aa2def6fcaba6f3269.jpg"}];
    let [idx,setidx]=useState(0);
    useEffect(()=>{
       const id= setTimeout(()=>{
            setidx((idx+1)%(arr.length))
        },3000);
        return ()=>{clearTimeout(id)};
    });
    const left=()=>{
        if(idx!==0)
        {
            idx=idx-1;
        }
        else
        {
            idx=arr.length-1;
        }
        setidx(idx);
    }

    return(
        <>
         <div className="imgcontainer">
        <div className="imgslider">
              <div className="image">
                <img src={arr[idx].link}/>
                <div className="content"><p>{arr[idx].name}</p>
                  <div className="button">
                    <button><Link to={`/movie/${arr[idx].name}`}>Watch</Link></button>
                    
                  </div>
                </div>             
              </div>


        </div>
        <div className="swiper-navigation">
            <div className="swiper-button swiper-button-next" onClick={()=>{setidx((idx+1)%(arr.length))}}><FontAwesomeIcon icon={faAngleRight} className="i" /></div>
            <div className="swiper-button swiper-button-prev" onClick={left}><FontAwesomeIcon icon={faAngleLeft} className="i" /></div>
        </div>

    </div>
        </>
    )
}
export default Slider;