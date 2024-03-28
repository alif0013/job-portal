import React from 'react';

const MiddleSideCard = () => {
    return (
        <div>
            {/* filter and all job length */}
            <div className='flex justify-between items-center'>
                <h1>3128 JObs</h1>
                <div>
                    <select className="select select-bordered select-sm w-full max-w-xs">
                        <option disabled selected>Small</option>
                        <option>Small Apple</option>
                        <option>Small Orange</option>
                        <option>Small Tomato</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default MiddleSideCard;