import React from 'react'
import scan from '../assets/scan.jpg';

const Registration = () => {
  return (
    <>
      {/* Registration Fee Details */}
      <div className="p-4">
        <div className="max-w-3xl mx-auto bg-[#FFF] shadow-2xl shadow-blue-500/40 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center text-blue-500 mb-4">
            Registration Fee Details
          </h2>

          {/* Scrollable Table Wrapper */}
          <div className="overflow-x-auto relative">
            <table className="min-w-full border border-blue-500 rounded-lg">
              <thead className="bg-blue-100 text-blue-800 border-b-2 border-blue-800">
                <tr>
                  <th className="py-3 px-4 text-left">Conference Delegates</th>
                  <th className="py-3 px-4 text-left">Presenting paper </th>
                  <th className="py-3 px-4 text-left">Fees  (INR)  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-800">
                <tr className="hover:bg-blue-50">
                  <td className="py-3 px-4">Academicians/Professionals </td>
                  <td className="py-3 px-4">Yes </td>
                  <td className="py-3 px-4">600  </td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="py-3 px-4">Research Scholars/Students  </td>
                  <td className="py-3 px-4">Yes </td>
                  <td className="py-3 px-4">500  </td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="py-3 px-4">Academicians/Researchers/Professionals/Students</td>
                  <td className="py-3 px-4">No </td>
                  <td className="py-3 px-4">300  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Scroll hint for mobile */}
          <p className="text-sm text-blue-500 mt-2 text-center sm:hidden">
            👉 Scroll sideways to view all details
          </p>
        </div>

        <div className="mt-8 bg-blue-100 border-l-4 border-blue-800 p-4 rounded-md shadow-sm">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Registration Information</h3>
           <ul className="list-disc list-inside text-blue-800 space-y-1">
            <li className='text-wrap'>Registration Link: <a className='font-semibold' href='https://forms.gle/MRKVec9B9f7YFg5P7' target='_blank'>https://forms.gle/MRKVec9B9f7YFg5P7</a></li>
            <li>Scan to Register</li>
            <div>
                <img src={scan} alt='scan' width={200} height={200} className='mx-auto md:mx-0'/>
            </div>
          </ul>
        </div>

        {/* Bank Section */}
        <div className="mt-8 bg-blue-100 border-l-4 border-blue-800 p-4 rounded-md shadow-sm">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Payment Details</h3>
           <ul className="list-disc list-inside text-blue-800 space-y-1">
            <li>Account Name: Main SB A/C CCSU Meerut </li>
            <li>Bank Name: Indian Bank</li>
            <li>Bank Account Number: 20195822291 </li>
            <li>MICR: 250019029</li>
            <li>IFS Code: IDIB000M690 </li>
            <li>Branch: Meerut University Campus, Meerut </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Registration;