import React from 'react'
import { MdMarkEmailUnread, MdCall } from "react-icons/md";

const Contact = () => {
  return (
    <>
      {/* Contact Details Section */}
      <div className="p-4">
        <div className="max-w-3xl mx-auto bg-[#FFF] shadow-2xl shadow-blue-500/40 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">
            Contact Details
          </h2>

          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center space-x-3 bg-blue-100 hover:bg-blue-200 p-3 rounded-lg transition duration-300">
              <span><MdMarkEmailUnread className='text-xl text-blue-800' /></span>
              <a href="mailto:mahilaadhyayankendra@ccsuniversity.ac.in" className="text-blue-800 hover:text-blue-800 font-medium">
                mahilaadhyayankendra@ccsuniversity.ac.in
              </a>
            </div>
            <div className="flex items-center space-x-3 bg-blue-100 hover:bg-blue-200 p-3 rounded-lg transition duration-300">
              <span><MdCall className='text-xl text-blue-800' /></span>
              <a href="mailto:mahilaadhyayankendra@ccsuniversity.ac.in" className="text-blue-800 hover:text-blue-800 font-medium">
                +91 75348 13143
              </a>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="max-w-3xl mx-auto mt-8">
          <h3 className="text-xl font-semibold text-center text-[#292966] mb-4">
            Venue Location - CCS University, Meerut
          </h3>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="CCSU Meerut Atal Sabhagar Map"
              src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7134.322449230923!2d77.735862!3d28.969821!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDU4JzIwLjciTiA3N8KwNDQnMzUuMSJF!5e0!3m2!1sen!2sin!4v1692612345678`}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;