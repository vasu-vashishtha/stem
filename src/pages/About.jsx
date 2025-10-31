import React from 'react';
import stem from '../assets/Stem.png';
import ccsu from '../assets/ccsumaingate.jpg';
import mission from '../assets/mission-shakti-logo.png';


const About = () => {
  return (
    <>
      <div className='text-center text-2xl font-semibold text-blue-500 mt-4'>About the Conference</div>
      <div className='w-full flex flex-col-reverse md:flex-row justify-center items-center p-4 gap-10 mt-2'>
        <div className='w-full md:w-[60%]'>
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
        <div className='w-full md:w-auto'>
          <img src={stem} alt='stem' className='w-full max-w-sm mx-auto md:mx-0'/>
        </div>
      </div>

      <div className='text-center text-2xl font-semibold text-blue-500 mt-6'>About the University</div>
      <div className='w-full flex flex-col md:flex-row justify-center items-center p-4 gap-8 mt-2'>
        <div className='w-full md:w-auto'>
          <img src={ccsu} alt='ccsu' className='w-full max-w-md mx-auto md:mx-0 rounded-2xl'/>
        </div>
        <div className='w-full md:w-[60%]'>
          <p className='text-justify text-[18px]'>
            Chaudhary Charan Singh University (CCSU), established in 1965, is one of the premier educational institutions of
            India encompassing a vast, beautiful, and pollution-free campus sprawling over 222 acres of land having vast
            playgrounds and experimental facilities, a botanical garden, a rose garden with life-size statues of the Bharat
            Ratna & former Prime Minister of India late Chaudhary Charan Singh and Swami Vivekananda, Central
            Instrumental Facility, Gymnasium, Indoor Stadium, well equipped Library, Hostels for both girls and boys,
            Administrative Block, Spacious Auditorium, Guest House, Community Centre, Medical Centre, Residential Quarters
            for faculty members and employees, Canteen, Bank, and Post office. The University affiliates 714 aided, government
            and self financial colleges/institutions, catering more than 5.25 lakh students. The motto of the University ‘Yatra Satyasya
            Paramam Nidhanam’ (Where the truth has its supreme adobe) is reflected in its vision and mission. The teaching
            departments are housed in spacious buildings and have well equipped laboratories and advanced research facilities.
            The University also has a separate engineering college, which offers courses leading to B.Tech. degree in different
            branches of engineering and M.Tech. in Computer Science & IT. The University was recently awarded A++ grade (CGPA 3.66) by NAAC.
            The University achieved 41 rank among top 100 state universities in India as per NIRF-2025 ranking. The University achieved 222 rank in QS-2025 ranking
            among Southern Asian Universities. The University has been awarded “The Best State University” in research citation award-2023 by Clarivate (Web of Science).
          </p>
        </div>
      </div>

      <div className='text-center text-2xl font-semibold text-blue-500 mt-6'>About Mahila Adhyayan Kendra (महिला अध्ययन केंद्र)</div>
      <div className='w-full flex flex-col-reverse md:flex-row justify-center items-center p-4 gap-8 mt-2'>
        <div className='w-full md:w-[60%]'>
          <p className='text-justify text-[18px]'>
            Mahila Adhyayan Kendra, Chaudhary Charan Singh University, Meerut was established under the Mission
            Shakti initiative of UP Government in the year 2021. It aims to promote research and development,
            address women's issues and comply with UGC guidelines, NIRF and NAAC accreditation requirements.
            Major objectives are promoting gender equality by developing and implementing policies that promote
            gender equality within the University. Undertake research initiatives to facilitate and support research
            on gender issues, women's health and related topics. Organize awareness programs like seminars, workshops,
            and campaigns to raise awareness about women's rights and issues. Provide counseling, legal aid, and other
            support services to women in need. Community engagement by collaboration with NGOs and external organizations
            to increase support and advocacy beyond the university.
          </p>
        </div>
        <div className='w-full md:w-auto'>
          <img src={mission} alt='mission' className='w-full max-w-sm mx-auto md:mx-0 rounded-2xl'/>
        </div>
      </div>
    </>
  )
}

export default About;