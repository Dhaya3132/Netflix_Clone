import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Homes from './Pages/Home/HomePage';
import Login from './Pages/Log/Login';
const router = createBrowserRouter([
    {
        path: '/',
        element: < Homes />
    },{
        path:'/login',
        element: <Login />
    }
])
export default router;
