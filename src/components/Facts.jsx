import React from 'react';

const Facts = () => {
    return (
        <div className='facts flex flex-col justify-center items-center gap-16 px-4 py-10 transition-all duration-300 ease-in-out bg-gradient-to-r to-purple-700 from-indigo-800 text-[#FFFFFF]'>
            <div>
                <h1 className='text-[52px] font-bold text-center'>Trusted by Millions, Built for You</h1>
            </div>
            <div className='facts-container flex flex-col md:flex-row gap-10 md:gap-40 justify-center items-center md:items-start'>
                <div className='fact-item text-center'>
                    <h4 className='text-[14px] text-[#fafafad8]'>Total Downloads</h4>
                    <h1 className='text-[44px] font-bold'>29.6M</h1>
                    <p className='text-[14px] text-[#fafafad8]'>21% more than last month</p>
                </div>
                <div className='fact-item text-center'>
                    <h4 className='text-[14px] text-[#fafafad8]'>Total Reviews</h4>
                    <h1 className='text-[44px] font-bold'>906K</h1>
                    <p className='text-[14px] text-[#fafafad8]'>46% more than last month</p>
                </div>
                <div className='fact-item text-center'>
                    <h4 className='text-[14px] text-[#fafafad8]'>Active Apps</h4>
                    <h1 className='text-[44px] font-bold'>132+</h1>
                    <p className='text-[14px] text-[#fafafad8]'>31 more will Launch</p>
                </div> 
            </div>
        </div>
    );
};

export default Facts;