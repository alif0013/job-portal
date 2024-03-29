import { IoFilter } from "react-icons/io5";
import AllJob from "./AllJobCard/AllJob";

const MiddleSideCard = () => {
    return (
        <div>
            {/* filter and all job length */}
            <div className='flex justify-between items-center'>
                <h1 className="text-2xl md:text-3xl font-semibold">3128 Jobs</h1>
                
                <div className="flex items-center gap-2 px-2 py-1 border-gray-200 border-2 drop-shadow-lg">
                    <IoFilter className=""></IoFilter> <h2>Filter By</h2>
                    <select className="border-none outline-none" name="example" id="example">
                        <option disabled selected value="filter"></option>
                        <option value="option2">New Jobs</option>
                        <option value="option3">Web dev</option>
                        <option value="option3">Software dev</option>
                        <option value="option3">Data Analytics</option>
                    </select>

                </div>
            </div>

            {/* all jobs card  */}
            <AllJob></AllJob>

        </div>
    );
};

export default MiddleSideCard;