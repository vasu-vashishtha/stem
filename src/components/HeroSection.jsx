import React from 'react';
import SciWoman from '../assets/woman-02.jpg';
import TechWoman from '../assets/women-01.jpg';
import EngWoman from '../assets/women-03.jpg';
import TeaWoman from '../assets/women-04.jpg';


const HeroSection = () => {
  return (
    <>
        <div className='w-full p-4 flex flex-col-reverse md:flex-row justify-center gap-3'>
            <div className=' p-4 text-center flex justify-center items-center'>
                <p className='text-[20px] text-[#292966]'>
                    <span className='text-[28px]'>Indian Council for Social Science Research</span><br/>
                    <span className='italic'>Sponsored</span><br/>
                    <span className='text-[24px]'>National Conference</span><br/>
                    on<br/>
                    <span className='text-[22px]'>Empowering the Health of Women in Science Technology Engineering &</span> <br/>
                    <span className='text-[22px]'>Management: Fostering the Well Being</span><br/>
                    <span className='font-semibold'>November 18th, 2025 Tuesday</span><br/>
                    Organized by<br/>
                    <span className='text-[18px]'>
                        Mahila Adyayan Kendra (महिला अध्ययन केंद्र) <br/>
                        (Established under Mission Shakti, an initiative by UP Govt.)<br/>
                        Chaudhary Charan Singh University<br/>
                        Ramgarhi, Meerut, Uttar Pradesh 250004<br/>
                        website: www.ccsuniversity.ac.in
                    </span>
                </p>
            </div>
            <div className='relative w-[50%] p-4 hidden md:block'>
                    <img src={SciWoman} alt='SciWoman' width={350} height={150} className='rounded-2xl shadow-2xl'/>
                    <img src={TechWoman} alt='TechWoman' width={350} height={150} className='absolute top-15 left-[40%] rounded-2xl shadow-2xl'/>
                    <img src={EngWoman} alt='EngWoman' width={350} height={150} className='relative left-10 rounded-2xl shadow-2xl'/>
                    <img src={TeaWoman} alt='TeaWoman' width={350} height={150} className='absolute top-60 left-[50%] rounded-2xl shadow-2xl'/>
            </div>
        </div>
        {/* Strip */}
        <div className="w-full bg-[#5C5C99] text-[#A3A3CC] py-2 overflow-hidden">
          <div className="marquee">
            <span className="text-white text-lg font-medium">
              📅 Date: November 18th, 2025 Tuesday
            </span>
            <span className="text-white text-lg font-medium">
              📍 Venue: CCSU Campus, Meerut
            </span>
            <span className="text-white text-lg font-medium">
              🎯 Theme: National Conference on Empowering the Health of Women in Science Technology Engineering & Management: Fostering the Well Being
            </span>
          </div>
        </div>
    </>
  )
}

export default HeroSection;