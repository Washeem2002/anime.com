import React, { useEffect, useState,useRef } from "react";
import "./assets/css/small.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft,faAngleRight,faBookmark} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Slide=(props)=>{
  const[check,setcheck]=useState(false);
  const [check1,setcheck1]=useState(0);
    const [data,setdata]=useState([]);
    const [name,setname]=useState("");

    
    useEffect(()=>{
         fetch(`${process.env.REACT_APP_BASE_URL}/post`,{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name:name})
         }).then((res)=>{return res.json()}).then((data)=>{setdata(data)});
         return ()=>{setname("")};
    },[name])
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_BASE_URL}/api`).then((res)=>{
            return res.json();
        }).then((data)=>{setdata(data)});
        
    },[])
    
    let arr=[];
    for(let i=0;i<data.length;i++)
    {
        if(data[i].genre===props.name)
        {
            arr.push(data[i]);;
        }
    }
    console.log(arr)

    
    let [x,setx]=useState(0);
    // const right=()=>{
    //     let width=window.innerWidth;
    //     let maxdiv=(parseInt)(width/250);
    //     let max_tap=arr.length-maxdiv;
    //     if(x<max_tap)
    //     {
    //         x=x+1;
    //         setx(x);
    //     }

    // }
    // const left=()=>{
    //     if(x>0)
    //     {
    //         x=x-1;
    //         setx(x);
    //     }
    // }
    const [isDragging,setisDragging]=useState(false);
    const [startX,setstartX]=useState(0);
    const [startY,setstartY]=useState(0);
    const [scrollleft,setscrollleft]=useState(0);
    const [move,setmove]=useState(0);
    const ref=useRef();
    const ref2=useRef();
    const p=(e)=>{
        e.preventDefault();
        setisDragging(true);
        setstartX(e.pageX-ref.current.offsetLeft);
        setscrollleft(ref.current.scrollLeft);
        

    }
    const p1=(e)=>{
      
      setisDragging(true);
      setstartX(e.touches[0].clientX-ref.current.offsetLeft);
      setstartY(e.touches[0].clientY);
      console.log(startX);
      console.log(startY)
      setscrollleft(ref.current.scrollLeft);
      

  }
    const q=(e)=>{
        if(!isDragging) return;
        e.preventDefault();
        const x=e.pageX-ref.current.offsetLeft;
        
        const scroll=x-startX;
        ref.current.scrollLeft=scrollleft-scroll;
        setmove(scrollleft-scroll);
        
    }
    const q1=(e)=>{
      if(!isDragging) return;
      
      const x=e.touches[0].clientX-ref.current.offsetLeft;
      const y=e.touches[0].clientY;
      const scrollY=y-startY;
      const scroll=x-startX;
      setTimeout(()=>{
        if(Math.abs(scrollY)>1.5*Math.abs(scroll) && check1===0)
        {
            setcheck(true);
        }
        setcheck1(1);
        console.log("Asdas");
        
      },100)
      if(!check)
      {
      document.body.style.overflow='hidden';
      ref.current.scrollLeft=scrollleft-scroll;
      setmove(scrollleft-scroll);
      }
      
  }
    const r=(e)=>{
        e.preventDefault();
        document.body.style.overflow='auto';
        setcheck(false);
        setcheck1(0);
        setisDragging(false);
        let t=0;
        if(ref.current.scrollLeft%ref2.current.offsetWidth>ref2.current.offsetWidth/2)
        {
          t=(ref2.current.offsetWidth-ref.current.scrollLeft%ref2.current.offsetWidth);
        }
        else
        {
          t=-1*(ref.current.scrollLeft%ref2.current.offsetWidth);
        }
        ref.current.scrollTo({
            left: ref.current.scrollLeft +t,
            behavior: 'smooth',
          });
    }
    const s=(e)=>{
        e.preventDefault();
        document.body.style.overflow='auto';
        setcheck(false);
        setcheck1(0);
        let t=0;
        if(ref.current.scrollLeft%ref2.current.offsetWidth>ref2.current.offsetWidth/2)
        {
          t=(ref2.current.offsetWidth-ref.current.scrollLeft%ref2.current.offsetWidth);
        }
        else
        {
          t=-1*(ref.current.scrollLeft%ref2.current.offsetWidth);
        }
        ref.current.scrollTo({
            left: ref.current.scrollLeft +t,
            behavior: 'smooth',
          });
    }
    
    const left=(e)=>{
        e.preventDefault();
        // if(set<0)
        // {
            
        //     setset(set+1);
        //     console.log(set);
        // }
        ref.current.scrollTo({
            left: ref.current.scrollLeft +ref2.current.offsetWidth,
            behavior: 'smooth',
          });

    }
    const right=(e)=>{
      e.preventDefault();
        ref.current.scrollTo({
            left: ref.current.scrollLeft -ref2.current.offsetWidth,
            behavior: 'smooth',
          });

    }
   
   
    return (
        
        <>
          <div className="movie-container-fluid">
      <div className="genra">
          <div className="genra-title"><Link to={`/genre/${props.name}`}>{props.name}</Link></div>
          <div className="button-container">
              <button className="watchbtn2" onClick={left}><FontAwesomeIcon icon={faAngleLeft} className="i" /></button>
              <button className="watchbtn2" onClick={right}><FontAwesomeIcon icon={faAngleRight} className="i" /></button>
          </div>
      </div>
      <div className="line"></div>
      <div ref={ref} onMouseDown={p} onMouseMove={q} onMouseUp={r} onMouseLeave={s}  className="movie-container">{arr.map((item)=>
        <div  ref={ref2} className="movie action" >
          <div className="image2">
              <img src={item.link} alt={item.name}/>
          </div>
          <div className="detail1">
              <div className="detail-content">
              <div className="watchlatter" style={{color:item.w===false ?"black":"red"}} onClick={()=>{setname(item.name)}} ><FontAwesomeIcon icon={faBookmark} /></div>
                  <div className="title"><h3>{item.name}</h3></div>
                  <div className="button">
                       <button className="watchbtn"><Link to={`/movie/${item.name}`}>Watch</Link></button>
                  </div>
              </div>
          </div>
        </div>  
        )}</div>
     </div>

        </>
    )
}
export default Slide;