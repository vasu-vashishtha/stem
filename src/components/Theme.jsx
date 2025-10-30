import React from 'react'

const Theme = () => {
  return (
    <>
        <div className='w-full p-4'>
            <div className='w-full max-w-4xl p-4 shadow-2xl mx-auto'>
                <p><span className='font-semibold'>Main Theme:</span>  Empowering the Health of Women in STEM: Fostering Holistic Well-being.</p>
                <p className='mt-2'><span className='font-semibold'>Sub-Themes:</span></p>
                <ol>
                    <li>1. Workplace Health and Well-being</li>
                    <li>2. Gender Equity and Inclusive Workplaces</li>
                    <li>3. Technological Innovations for Women's Health</li>
                    <li>4. Mental Health and Emotional Resilience</li>
                    <li>5. Leadership, Mentorship, and Capacity Building</li>
                    <li>6. Education, Policy, and Advocacy</li>
                    <li>7. Entrepreneurship, Innovation, and Startups</li>
                    <li>8. Sustainability and Community Health</li>
                </ol>
                <p className='mt-2'><span className='font-semibold'>Who can participate</span></p>
                <p>Researchers, academicians, graduate and postgraduate students, and industry professionals from diverse fields. </p>
            </div>
        </div>
    </>
  )
}

export default Theme;