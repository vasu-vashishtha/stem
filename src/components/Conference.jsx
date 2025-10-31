import React from 'react';
import stem from '../assets/Stem.png';
import flyGirl from '../assets/fly-girl.jpg';
import ccsu from '../assets/CCSU-Logo.jpg';
import icssr from '../assets/icssr.png';
import shakti from '../assets/mission-shakti-logo.png';
import nirf from '../assets/nirf.jpeg';
import usha from '../assets/PM-UShA.png';
import sdg from '../assets/SDG.png';
import uttar from '../assets/pic11.png';

const Conference = () => {
  return (
    <>
       <div className='text-center text-2xl font-semibold text-blue-500 mt-4'>About the Conference</div>
       <div className='w-full md:w-auto flex flex-wrap gap-4 justify-center items-center p-4'>
          <img src={uttar} alt='pic1' width={150} height={150}/>
          <img src={shakti} alt='pic2' width={150} height={150}/>
          <img src={sdg} alt='pic3' width={150} height={150}/>
          <img src={ccsu} alt='pic4' width={150} height={150}/>
          <img src={nirf} alt='pic5' width={150} height={150}/>
          <img src={usha} alt='pic6' width={150} height={150}/>
          <img src={icssr} alt='pic7' width={150} height={150}/>
       </div>
             <div className='w-full flex flex-col md:flex-row justify-center items-center p-4 gap-6 mt-2'>
               <div className='w-full md:w-[50%]'>
                 <p className='text-justify text-[18px]'>
                   Women in Science, Technology, Engineering, and Management (STEM) are critical contributors to knowledge
                   creation, innovation, and economic development. With time the representation  of women this field is
                   increasing but they still face various challenges which have adverse effect on their physical and mental
                   health, work-life balance and career prospects. Despite increasing representation in these fields, many
                   women continue to face challenges that adversely affect their physical and mental health, work-life balance,
                   and career progression.  Some of them are gender biases, lack of support systems, underrepresentation in decision
                   making roles, and limited access to mentorship and wellness resources. Understanding the effect of these
                   multifaceted challenges, this conference aims to create a platform to accelerate the dialogue, collaboration,
                   and action toward empowering the health and well-being of women in STEM. Conference objectives includes:
                 </p>
                 <ul className='mt-2 italic'>
                   <li>•  To explore the relationship between gender, health, and career sustainability in STEM fields.</li>
                   <li>•  To identify key stressors, challenges, and mental health concerns among women professionals and students in STEM.</li>
                   <li>•  To foster institutional awareness and commitment toward provision of supportive, inclusive, and health-focused academic and professional work culture. </li>
                   <li>•	 To promote best practices and strategies to integrate well-being into STEM education, research as well as careers.</li>
                 </ul>
               </div>
               <div className='w-full md:w-auto flex flex-col md:flex-col gap-3'>
                  <img src={stem} alt='stem' className=''/>
                  <img src={flyGirl} alt='flyGirl' className=''/>
               </div>
             </div>
    </>
  )
}

export default Conference;
