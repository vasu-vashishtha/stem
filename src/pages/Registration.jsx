import React from 'react'

const Registration = () => {
  return (
    <>
      {/* Registration Fee Details */}
      <div className="p-4">
        <div className="max-w-3xl mx-auto bg-[#A3A3CC] shadow-2xl shadow-[#292966] rounded-lg p-6">
  <h2 className="text-2xl font-bold text-center text-[#292966] mb-4">
    Registration Fee Details
  </h2>

  {/* Scrollable Table Wrapper */}
  <div className="overflow-x-auto relative">
    <table className="min-w-full border border-[#292966] rounded-lg">
      <thead className="bg-[#CCCCFF] text-[#292966] border-b-2 border-[#292966]">
        <tr>
          <th className="py-3 px-4 text-left">Conference Delegates</th>
          <th className="py-3 px-4 text-left">Presenting paper </th>
          <th className="py-3 px-4 text-left">Fees  (INR)  </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-[#292966]">
        <tr className="hover:bg-[#CCCCFF]">
          <td className="py-3 px-4">Academicians/Professionals </td>
          <td className="py-3 px-4">Yes </td>
          <td className="py-3 px-4">600  </td>
        </tr>
        <tr className="hover:bg-[#CCCCFF]">
          <td className="py-3 px-4">Research Scholars/Students  </td>
          <td className="py-3 px-4">Yes </td>
          <td className="py-3 px-4">500  </td>
        </tr>
        <tr className="hover:bg-[#CCCCFF]">
          <td className="py-3 px-4">Academicians/Researchers/Professionals/Students</td>
          <td className="py-3 px-4">No </td>
          <td className="py-3 px-4">300  </td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Scroll hint for mobile */}
  <p className="text-sm text-gray-500 mt-2 text-center sm:hidden">
    👉 Scroll sideways to view all details
  </p>
</div>



        {/* Bank Section */}
        <div className="mt-8 bg-[#A3A3CC] border-l-4 border-[#292966] p-4 rounded-md shadow-sm">
          <h3 className="text-lg font-semibold text-[#292966] mb-2">Payment Details</h3>
           <ul className="list-disc list-inside text-[#292966] space-y-1">
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