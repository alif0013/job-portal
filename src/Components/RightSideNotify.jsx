import React from 'react';

const RightSideNotify = () => {
    return (
        <div>
            {/* email section */}
            <div className='bg-white rounded p-3 drop-shadow-md'>
                <div className='flex items-center gap-2'>
                    <img className='w-14' src="https://i.ibb.co/5n87LB7/icons8-email-100.png" alt="img" />
                    <h1 className='text-xl  font-bold'>Email me for job</h1>
                </div>
                <p className='font-semibold text-black/60 my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates debitis?</p>

                {/* email input */}
                <label className="input input-bordered flex items-center gap-2 mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="text" className="grow" placeholder="name@gmail.com" />
                </label>

                <button className="mt-3 mb-3 bg-blue text-white px-3 py-2 w-full rounded hover:drop-shadow-lg">Subscribe</button>
            </div>

            {/* get notices faste  */}

            <div className='bg-white rounded p-3 mt-6 drop-shadow-md'>
                <div className='flex items-center gap-2'>
                    <img className='w-10' src="https://i.ibb.co/R4TT1hf/icons8-rocket-48.png" alt="img" />
                    <h1 className='text-xl  font-bold'>Get Noticed Faster</h1>
                </div>
                <p className='font-semibold text-black/60 my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates debitis?</p>

                <button type='file' className="mt-3 mb-3 bg-blue text-white px-3 py-2 w-full rounded hover:drop-shadow-lg">Uplode Your Resume</button>
            </div>




        </div>
    );
};

export default RightSideNotify;