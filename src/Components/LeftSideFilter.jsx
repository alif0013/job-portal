import React from 'react';
import { LiaAngleRightSolid } from "react-icons/lia";

const LeftSideFilter = () => {
    return (
        <div>

            {/* Location part */}
            <div>
                <h1 className='text-2xl pb-2 font-semibold'>Filters</h1>
                <p className='font-semibold  mb-3'>Location</p>

                <div className='flex gap-2 items-center pb-1'>
                    <span className='pt-1'><input type="radio" name="radio-1" className="radio h-[15px] w-[15px]" /></span>
                    <p className='text-black/60 font-semibold'>Near Me</p>
                </div>
                <div className='flex gap-2 items-center pb-1'>
                    <span className='pt-1'><input type="radio" name="radio-1" className="radio h-[15px] w-[15px]" /></span>
                    <p className='text-black/60 font-semibold '>Remote Job</p>
                </div>
                <div className='flex gap-2 items-center pb-1'>
                    <span className='pt-1'><input type="radio" name="radio-1" className="radio h-[15px] w-[15px]" /></span>
                    <p className='text-black/60 font-semibold '>WithIn 15 km</p>
                </div>
                <div className='flex gap-2 items-center pb-1'>
                    <span className='pt-1'><input type="radio" name="radio-1" className="radio h-[15px] w-[15px]" /></span>
                    <p className='text-black/60 font-semibold '>WithIn 30 km</p>
                </div>
                <div className='flex gap-2 items-center pb-1'>
                    <span className='pt-1'><input type="radio" name="radio-1" className="radio h-[15px] w-[15px]" /></span>
                    <p className='text-black/60 font-semibold '>WithIn 50 km</p>
                </div>
            </div>

            {/* Salary Part */}
            <div>
                <h1 className='text-2xl pb-2 mt-2 font-semibold'>Salary</h1>

                <div className='flex gap-2 mt-2 mb-3'>
                    <button className='border-2 border-gray-200 px-2 py-1 hover:bg-gray-200 hover:border-blue hover:text-blue hover:drop-shadow-md rounded-sm'>Hourly</button>
                    <button className='border-2 border-gray-200 px-2 py-1 hover:bg-gray-200 hover:border-blue hover:text-blue hover:drop-shadow-md rounded-sm'>Monthly</button>
                    <button className='border-2 border-gray-200 px-2 py-1 hover:bg-gray-200 hover:border-blue hover:text-blue hover:drop-shadow-md rounded-sm'>Yearly</button>

                </div>
                {/* salary Inpuut */}
                <div className='flex gap-2 items-center pb-1'>
                    <span className='pt-1'><input type="radio" name="radio-1" className="radio h-[15px] w-[15px]" /></span>
                    <p className='text-black/60 font-semibold'>Any</p>
                </div>
                <div className='flex gap-2 items-center pb-1'>
                    <span className='pt-1'><input type="radio" name="radio-1" className="radio h-[15px] w-[15px]" /></span>
                    <span className='text-black/80 font-bold'><LiaAngleRightSolid></LiaAngleRightSolid> </span>
                    <p className='text-black/60 font-semibold'> 30,000 K</p>
                </div>
                <div className='flex gap-2 items-center pb-1'>
                    <span className='pt-1'><input type="radio" name="radio-1" className="radio h-[15px] w-[15px]" /></span>
                    <span className='text-black/80 font-bold'><LiaAngleRightSolid></LiaAngleRightSolid> </span>

                    <p className='text-black/60 font-semibold'> 40,000 K</p>
                </div>
                <div className='flex gap-2 items-center pb-1'>
                    <span className='pt-1'><input type="radio" name="radio-1" className="radio h-[15px] w-[15px]" /></span>
                    <span className='text-black/80 font-bold'><LiaAngleRightSolid></LiaAngleRightSolid> </span>

                    <p className='text-black/60 font-semibold'> 50,000 K</p>
                </div>
                <div className='flex gap-2 items-center pb-1'>
                    <span className='pt-1'><input type="radio" name="radio-1" className="radio h-[15px] w-[15px]" /></span>
                    <span className='text-black/80 font-bold'><LiaAngleRightSolid></LiaAngleRightSolid> </span>

                    <p className='text-black/60 font-semibold'> 60,000 K</p>
                </div>
                <div className='flex gap-2 items-center pb-1'>
                    <span className='pt-1'><input type="radio" name="radio-1" className="radio h-[15px] w-[15px]" /></span>
                    <span className='text-black/80 font-bold'><LiaAngleRightSolid></LiaAngleRightSolid> </span>

                    <p className='text-black/60 font-semibold'> 80,000 K</p>
                </div>
            </div>

             {/* Date of posting */}
             <div>
                <h1 className='text-2xl pb-2 font-semibold'>Date Of Posting</h1>

                <div className='flex gap-2 items-center pb-1'>
                    <span className='pt-1'><input type="radio" name="radio-1" className="radio h-[15px] w-[15px]" /></span>
                    <p className='text-black/60 font-semibold'>All Time</p>
                </div>
                <div className='flex gap-2 items-center pb-1'>
                    <span className='pt-1'><input type="radio" name="radio-1" className="radio h-[15px] w-[15px]" /></span>
                    <p className='text-black/60 font-semibold '>Last 24 hours</p>
                </div>
                <div className='flex gap-2 items-center pb-1'>
                    <span className='pt-1'><input type="radio" name="radio-1" className="radio h-[15px] w-[15px]" /></span>
                    <p className='text-black/60 font-semibold '>Last 3 days</p>
                </div>
                <div className='flex gap-2 items-center pb-1'>
                    <span className='pt-1'><input type="radio" name="radio-1" className="radio h-[15px] w-[15px]" /></span>
                    <p className='text-black/60 font-semibold '>Last 7 days</p>
                </div>
                
            </div>

             {/* Work Experience */}
             <div>
                <h1 className='text-2xl pb-2 font-semibold'>Work Experience</h1>

                <div className='flex gap-2 items-center pb-1'>
                    <span className='pt-1'><input type="radio" name="radio-1" className="radio h-[15px] w-[15px]" /></span>
                    <p className='text-black/60 font-semibold'>Any Experience</p>
                </div>
                <div className='flex gap-2 items-center pb-1'>
                    <span className='pt-1'><input type="radio" name="radio-1" className="radio h-[15px] w-[15px]" /></span>
                    <p className='text-black/60 font-semibold '>Internship</p>
                </div>
                <div className='flex gap-2 items-center pb-1'>
                    <span className='pt-1'><input type="radio" name="radio-1" className="radio h-[15px] w-[15px]" /></span>
                    <p className='text-black/60 font-semibold '>Work Remotely</p>
                </div>
               
                
            </div>

             {/* Type Of Employment */}
             <div>
                <h1 className='text-2xl pb-2 font-semibold'>Employment Type </h1>

                <div className='flex gap-2 items-center pb-1'>
                <input type="checkbox" className="checkbox checkbox-xs" /> 
                    <p className='text-black/60 font-semibold'>Full Time</p>
                </div>
                <div className='flex gap-2 items-center pb-1'>
                <input type="checkbox" className="checkbox checkbox-xs" /> 
                    <p className='text-black/60 font-semibold '>Temporary</p>
                </div>
                <div className='flex gap-2 items-center pb-1'>
                <input type="checkbox" className="checkbox checkbox-xs" /> 
                    <p className='text-black/60 font-semibold '>Part-Time</p>
                </div>
               
                
            </div>

        </div>
    );
};

export default LeftSideFilter;