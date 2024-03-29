import React from 'react';

const JobCard = ({job}) => {
    const {companyName} = job;
    return (
        <div>
            job details {companyName}
        </div>
    );
};

export default JobCard;