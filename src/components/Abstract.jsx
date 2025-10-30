import React from 'react'

const Abstract = () => {
  return (
    <>
        <div className='w-full p-4 flex flex-col md:flex-row flex-wrap justify-center items-center gap-4'>
            <div className='w-full md:w-[48%] p-4 shadow-2xl'>
                <p className='font-semibold mt-4'>Abstract/Full Paper Submission Guidelines</p>
                <ul>
                    <li>• Abstract will not exceed 250 word with 5  keywords.</li>
                    <li>• Full research paper/articles should be between 3000-4000 words.</li>
                    <li>• All submissions must be in Times New Roman, font size 12, and must contain title of the paper,  name of authors, academic affiliation, email address and contact number of all authors with  the name of the corresponding author in bold.</li>
                    <li>• All participants whose abstracts are accepted must submit the full length paper as per schedule.</li>
                    <li>• <span className='font-semibold'>Full Papers</span> will be published as book chapters in book (with ISBN Number)</li>
                    <li><span className='font-semibold'>• Last date for submission of full paper is  10 November 2025</span> </li>
                </ul>
            </div>
            <div className='w-full md:w-[48%] p-4 shadow-2xl'>
                <p className='font-semibold mt-4'>Important Dates</p>
                <ol>
                    <li><span className='font-semibold'>Abstract submission :</span>  12 November 2025</li>
                    <li><span className='font-semibold'>Abstract Acceptance :</span> 13 November 2025</li>
                    <li><span className='font-semibold'>Last Date for Registration :</span> 14 November 2025 </li>
                </ol>
            </div>
        </div>
    </>
  )
}

export default Abstract;