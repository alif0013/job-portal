import React from 'react';

const JobCard = ({ job }) => {
    const { companyName, jobTitle, companyLogo, minPrice, maxPrice, salaryType, jobLocation, postingDate, experienceLevel, employmentType, description } = job;
    return (
        <div>
            <div className='flex px-2 py-5 gap-5 bg-white md my-5'>
                <div>
                    <img className='w-16 rounded-md' src={companyLogo} alt="logo" />
                </div>
                <div>
                    <h1 className='font-semibold text-black/70'>{companyName}</h1>
                    <h1 className='font-bold text-xl'>{jobTitle}</h1>
                </div>
            </div>
        </div>
    );
};

export default JobCard;