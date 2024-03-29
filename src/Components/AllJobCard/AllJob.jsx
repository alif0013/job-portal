import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const AllJob = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
    }, [])


    return (
        <div>
            {
                jobs.map( job => <JobCard job={job} key={job.id}></JobCard>)
            }
        </div>
    );
};

export default AllJob;