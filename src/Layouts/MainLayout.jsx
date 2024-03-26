import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='mt-[66px] '>
                <Outlet></Outlet>
            </div>
            {/* footer  */}
        </div>
    );
};

export default MainLayout;