import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { CiCircleList } from "react-icons/ci";
import { MdAutoGraph } from "react-icons/md";
import { MdPriceCheck } from "react-icons/md";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 w-full bg-white shadow-md z-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <span className="text-lg font-bold">
                            <img className="w-20 md:w-24" src="https://i.ibb.co/n7RFQ6F/colorful-logo-1.jpg" alt="" />
                        </span>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex space-x-4">
                            <li><Link to="/" className="hover:bg-gray-50 px-3 py-2 rounded-md">Home</Link></li>
                            <li><Link to="/" className="hover:bg-gray-50 px-3 py-2 rounded-md">Job List</Link></li>
                            <li><Link to="/" className="hover:bg-gray-50 px-3 py-2 rounded-md">Salary Estimate</Link></li>
                            <li><Link to="/" className="hover:bg-gray-50 px-3 py-2 rounded-md">Pricing</Link></li>
                            <li><Link to="/" className="border-gray-100 border-2 hover:bg-gray-50 hover:drop-shadow-sm px-3 py-2 rounded-md">Login</Link></li>
                            <li><Link to="/" className="bg-blue text-white hover:bg-blue hover:drop-shadow-md px-4 py-2 rounded-md">Sign Up</Link></li>
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleNavbar} className="inline-flex items-center justify-center p-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            <div className={`${isOpen ? 'translate-x-0 backdrop-blur-lg' : '-translate-x-full'} fixed top-0 left-0 h-full w-64 bg-gray-100 z-50 overflow-y-auto transition-transform duration-300 ease-in-out`}>

                <div className='p-5'>
                    <img className='w-12 text-center rounded' src="https://i.ibb.co/n7RFQ6F/colorful-logo-1.jpg" alt="" />
                    <div className='pt-2'>
                        <h1 className='pb-1 font-semibold'>Md Alif</h1>
                        <p className='text-gray-500 text-[15px]'>mdalifh35@gmail.com</p>
                    </div>
                </div>
                <hr />
                <ul className="pt-1">
                    <li><Link to="/" className="block hover:bg-purple-200 px-6 py-2"> <h2 className='flex gap-2 items-center hover:text-purple-700 hover:font-semibold'><span><AiOutlineHome className='text-xl' /> </span> Home</h2></Link></li>
                    <li><Link to="/" className="block hover:bg-purple-200 px-6 py-2"> <h2 className='flex gap-2 items-center hover:text-purple-700 hover:font-semibold'><span><CiCircleList className='text-xl' /> </span> Job List</h2></Link></li>
                    <li><Link to="/" className="block hover:bg-purple-200 px-6 py-2"> <h2 className='flex gap-2 items-center hover:text-purple-700 hover:font-semibold'><span><MdAutoGraph className='text-xl' /> </span> Salary Estimate</h2></Link></li>
                    <li><Link to="/" className="block hover:bg-purple-200 px-6 py-2"> <h2 className='flex gap-2 items-center hover:text-purple-700 hover:font-semibold'><span><MdPriceCheck className='text-xl' /> </span> Pricing</h2></Link></li>

                    <li><Link to="/" className="block bg-blue ml-5 mt-2 rounded text-white px-6 py-2 w-28 md:0">Sign Up</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
