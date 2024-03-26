import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "aos/dist/aos.css"
const Banner = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    })

    return (
        // <div className='pt-10'>
        //     <h2 className='text-3xl md:text-5xl font-semibold'>Find Your <span className='text-blue'>New Job</span> Today </h2>

        //     <p className='py-5 md:text-xl text-gray-500'>Thousands of jobs in the computer, engineering and technology sectors are waiting for you...</p>

        // </div>
        <div>
            <div className="hero min-h-[500px] mb-5">
                <div  className="hero-content flex-col lg:flex-row-reverse">
                    <img data-aos="fade-left" src="https://cdni.iconscout.com/illustration/premium/thumb/online-job-search-5015545-4185620.png?f=webp" className="max-w-[350px] md:max-w-md rounded-lg" />
                  
                    <div data-aos="fade-right">
                        <h1 className="text-5xl font-bold">Find Your <span className='text-blue'>New Job</span> Today </h1>
                        <p className="py-6 text-black/70">Thousands of jobs in the computer, engineering and technology <br /> sectors are waiting for you...</p>
                        <h2 className=""><Link to="/" className="bg-blue text-white hover:bg-blue hover:drop-shadow-md px-4 py-2 rounded-md">Explore More</Link></h2>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;