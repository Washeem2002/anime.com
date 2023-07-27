import React, { useState } from "react";
import Slider from "./slider";
import Slide from "./action";

const Home=()=>{
    
    return(
        <>
        <Slider/>
        <Slide  name="Action"/>
        <Slide  name="Slice of Life"/>
        <Slide  name="Shonen"/>

        </>
    );
};
export default Home;