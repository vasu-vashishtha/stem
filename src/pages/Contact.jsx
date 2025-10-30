import React from 'react'
import { MdMarkEmailUnread, MdCall } from "react-icons/md";

const Contact = () => {
  return (
    <>
      {/* Contact Details Section */}
      <div className="p-4">
        <div className="max-w-3xl mx-auto bg-[#A3A3CC] shadow-2xl shadow-[#CCCCFF]-500/40 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center text-[#292966] mb-6">
            Contact Details
          </h2>

          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center space-x-3 bg-[#CCCCFF] hover:bg-[#CCCCFF] p-3 rounded-lg transition duration-300">
              <span><MdMarkEmailUnread className='text-xl text-[#292966]' /></span>
              <a href="mailto:abc@gmail.com" className="text-[#292966] hover:text-[#5C5C99] font-medium">
                email
              </a>
            </div>

            {/* Phone - Prof. Anil Kumar Malik */}
            <div className="flex items-center space-x-3 bg-[#CCCCFF] hover:bg-[#CCCCFF] p-3 rounded-lg transition duration-300">
              <span><MdCall className='text-xl text-[#292966]' /></span>
              <a href="tel:+918368922050" className="text-[#292966] hover:text-[#5C5C99] font-medium">
                <span className="text-sm text-[#5C5C99]">(Name)</span> <br/>Mob. no. 
              </a>
            </div>

            {/* Phone - Dr. Neeraj Panwar */}
            <div className="flex items-center space-x-3 bg-[#CCCCFF] hover:bg-[#CCCCFF] p-3 rounded-lg transition duration-300">
              <span><MdCall className='text-xl text-[#292966]' /></span>
              <a href="tel:+917726031844" className="text-[#292966] hover:text-[#5C5C99] font-medium">
                <span className="text-sm text-[#5C5C99]">(Name)</span> <br/>Mob. no. 
              </a>
            </div>

            {/* Phone - Dr. Yogendra K. Gautam */}
            <div className="flex items-center space-x-3 bg-[#CCCCFF] hover:bg-[#CCCCFF] p-3 rounded-lg transition duration-300">
              <span><MdCall className='text-xl text-[#292966]' /></span>
              <a href="tel:+919149324785" className="text-[#292966] hover:text-[#5C5C99] font-medium">
                <span className="text-sm text-[#5C5C99]">(Name)</span> <br/>Mob. no.
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