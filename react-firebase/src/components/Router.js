import { React, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../Routers/Home';
import Auth from '../Routers/Auth';

function Router()
{
    const [isLoggedIn,setIsLoggedIn] = useState(true);

    return( 
      <Routes>
        {isLoggedIn ? (
            <Route path="/" element={<Home />} />
        ) 
        : (
            <Route path="/" element={<Auth />} />
        )}
        
      </Routes>
    )
}

export default Router;