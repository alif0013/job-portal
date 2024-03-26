import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner';

const Home = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() =>{
        fetch("jobs.json")
        .then(res => res.json())
        .then(data =>{
            setJobs(data);
        })
    }, [])


    console.log(jobs);
    return (
        <div className='text-primary'>
            <Banner></Banner>
        </div>
    );
};

export default Home;