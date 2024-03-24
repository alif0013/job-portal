import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='mt-20 md:max-w-[1200px] mx-auto'>
                <Outlet></Outlet>
            </div>
            {/* footer  */}
        </div>
    );
};

export default MainLayout;