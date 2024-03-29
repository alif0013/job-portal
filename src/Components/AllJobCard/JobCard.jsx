import { IoLocationOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { BiDollar } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";

const JobCard = ({ job }) => {
    const { companyName, jobTitle, companyLogo, minPrice, maxPrice, salaryType, jobLocation, postingDate, experienceLevel, employmentType, description } = job;

    return (
        <div>
            <div className='flex px-2 py-5 gap-5 bg-white  my-5'>
                <div>
                    <img className='md:w-28 rounded-md' src={companyLogo} alt="logo" />
                </div>


                <div>
                    <h1 className='font-semibold text-black/70'>{companyName}</h1>

                    <div className="flex items-center gap-3">
                        <h1 className='font-bold text-xl py-1'>{jobTitle}</h1>
                        <span className="hidden md:block px-2 py-1 text-[12px]  rounded bg-purple-100 text-purple-700" >New Post</span>
                    </div>

                    {/* date time and location */}
                    <div className='grid grid-cols-2 md:grid-cols-4'>
                        <div className="flex items-center text-black/70 gap-1">
                            <IoLocationOutline />
                            {jobLocation}
                        </div>
                        <div className="flex items-center text-black/70 gap-1">
                            <IoTimeOutline />
                            {employmentType}
                        </div>
                        <div className="flex items-center text-black/70 gap-1">
                            <BiDollar />
                            {maxPrice}
                        </div>
                        <div className="flex items-center text-black/70 gap-1">
                            <CiCalendarDate />
                            {postingDate}
                        </div>
                    </div>

                    {/* job description */}

                    <div className="mt-2">
                        <p className="text-[14px] md:text-[15px] text-black/60 md:font-semibold ">{description}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JobCard;