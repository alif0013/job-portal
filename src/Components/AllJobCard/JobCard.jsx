import { IoLocationOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { BiDollar } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";

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
                    <h1 className='font-bold text-xl py-1'>{jobTitle}</h1>

                    {/* date time and location */}
                    <div className='flex gap-3 justify-between'>
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




                </div>
            </div>
        </div>
    );
};

export default JobCard;