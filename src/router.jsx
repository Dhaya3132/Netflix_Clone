import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Homes from './Pages/Home/HomePage';
import Login from './Pages/Log/Login';
import VideoPlayer from "./Pages/VideoPlayer/VideoPlayer";
const router = createBrowserRouter([
    {
        path: '/',
        element: < Homes />
    },{
        path:'/login',
        element: <Login />
    },
    {
        path:'/player/:id',
        element:<VideoPlayer />
    }
])
export default router;
