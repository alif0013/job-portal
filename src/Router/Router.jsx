import React from 'react';
import Home from '../Pages/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Login from '../Pages/Login/Login';

const myCreatedRoutes  = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
         
       
        ]
    }
])

export default myCreatedRoutes;