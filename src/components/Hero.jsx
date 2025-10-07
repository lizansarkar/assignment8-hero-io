import React from 'react';

const Hero = () => {
    return (
        <div className='hero bg-[#f5f5f5] flex flex-col items-center text-center px-4'>
            <div className='py-8 max-w-4xl'>
                <h1 className='text-5xl font-bold mb-4 text-[44px] md:text-[72px]'>We Build <br /> <span className='text-[#9F62F2]'>Productive</span> Apps</h1>
                <p className='text-[#627382] text-[16px] md:text-[20px]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>

            <div className='google-play flex flex-col md:flex-row gap-4'>
                <a href='/' className='flex items-center gap-2 py-2 border border-gray-300 rounded-lg px-7 hover:bg-gray-200 transition'>
                    <img className='h-10 md:h-10' src="/img/google-play.png" alt="Google Play Store" />
                    <h4 className='font-bold'>Google Play</h4>
                </a>

                <a href='/' className='flex items-center gap-2 py-2 border border-gray-300 rounded-lg px-7 hover:bg-gray-200 transition'>
                    <img className='h-10 md:h-10' src="/img/app-store.png" alt="Google Play Store" />
                    <h4 className='font-bold'>App Store</h4>
                </a>
            </div>

            <div className='mt-10'>
                <img src="/img/hero.png" alt="hero img" />
            </div>
        </div>
    );
};

export default Hero;