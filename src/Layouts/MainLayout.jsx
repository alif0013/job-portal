import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='mt-[66px] px-5 md:px-0 '>
                <Outlet></Outlet>
            </div>
            {/* footer  */}
        </div>
    );
};

export default MainLayout;