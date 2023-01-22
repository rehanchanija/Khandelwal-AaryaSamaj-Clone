import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';

const App = () => {
  return (
    <div>

      <Routes>
        <Route  path="about" element={<About/>}/>
        <Route  path="/" element={<Home/>}>
        
        </Route>
      </Routes>
    
      
       
    </div>
    
  )
}
 
export default App