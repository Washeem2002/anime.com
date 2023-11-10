import  ReactDOM  from 'react-dom';
import Navbar from './navbar';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './home';

import { useNavigate } from "react-router-dom";
import Genre from './genre';
import Search from './search';
import Movie from './movie';


const App=()=>{
   

  return (
    <>
       <Router>
      <Navbar/>
     
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/:id" element={<Genre/>}></Route>
          <Route path="/movie/:id" element={<Movie/>}></Route>
          <Route path="/genre/:id" element={<Genre/>}></Route>
          <Route path="/search" element={<Search/>}></Route>
        </Routes>
        </Router>
    </>
  );
};
ReactDOM.render(<App/>,document.getElementById('root'));



