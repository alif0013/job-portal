import Banner from '../../Components/Banner';
import LeftSideFilter from '../../Components/LeftSideFilter';
import MiddleSideCard from '../../Components/MiddleSideCard';
import RightSideNotify from '../../Components/RightSideNotify';

const Home = () => {

  


    // console.log(jobs);
    return (
        <div className=''>
            <div className='px-5'>
                <Banner></Banner>
            </div>

            {/* job post card section */}

            <div className='bg-[#FAFAFA]'>
                <div className='grid grid-cols-1 w-full p-5 md:p-10  lg:grid-cols-12 lg:max-w-[1200px] lg:mx-auto gap-5'>
                    <div className='bg-white w-full rounded-md lg:col-span-3 p-5 drop-shadow-md'>
                        <LeftSideFilter></LeftSideFilter>
                    </div>
                    <div className='w-full  rounded-md lg:col-span-6 p-5 drop-shadow-md'>
                        <MiddleSideCard></MiddleSideCard>
                    </div>
                    <div className='w-full  rounded-md lg:col-span-3  drop-shadow-md'>
                        <RightSideNotify></RightSideNotify>
                        
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Home;