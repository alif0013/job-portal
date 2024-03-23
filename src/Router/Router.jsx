import React from 'react';
import Home from '../Pages/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';

const myCreatedRoutes  = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
         
       
        ]
    }
])

export default myCreatedRoutes;