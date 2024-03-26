import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner';
import LeftSideFilter from '../../Components/LeftSideFilter';
import MiddleSideCard from '../../Components/MiddleSideCard';
import RightSideNotify from '../../Components/RightSideNotify';

const Home = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
    }, [])


    console.log(jobs);
    return (
        <div className=''>
            <Banner></Banner>

            {/* job post card section */}

            <div className='bg-[#FAFAFA]'>
                <div className='grid grid-cols-1 px-5 md:p-10  md:grid-cols-12 md:max-w-[1200px] md:mx-auto gap-5'>
                    <div className='bg-white md:col-span-3 p-5 border-2 border-orange-400'>
                        <LeftSideFilter></LeftSideFilter>
                    </div>
                    <div className='bg-white md:col-span-6 p-5  border-2 border-yellow-600'>
                        <MiddleSideCard></MiddleSideCard>
                    </div>
                    <div className='bg-white  md:col-span-3 p-5 border-2 border-green-400'>
                        <RightSideNotify></RightSideNotify>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Home;