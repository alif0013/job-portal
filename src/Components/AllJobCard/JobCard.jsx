import React from 'react';

const JobCard = ({ job }) => {
    const { companyName } = job;
    return (
        <div>
            <div className='flex px-2 py-5 gap-5 bg-white md my-5'>
                <div>
                    <img className='w-16 rounded-md' src="https://i.ibb.co/p110Cwc/images-q-tbn-ANd9-Gc-Tx-ZFBip-Wm-Geken-YIPh-SGf9c-BZe-BBO93-S6-ZMCGGNQvqc-Q-s.jpg" alt="" />
                </div>
                <div>
                    <h1>{companyName}</h1>
                </div>
            </div>
        </div>
    );
};

export default JobCard;