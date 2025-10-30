import React from 'react';
import njg from '../assets/njg.jpeg';

const advisoryCommittee = [
  {
    name: "Prof. (Dr.) Vineeta Tyagi",
    designation: "Dean - Ayurveda, CCSU",
    image: ""
  },
  {
    name: "Prof. Jaimala",
    designation: "Dean - Science",
    image: "https://cdn.ccsuniversity.ac.in/cv/jpg/P15.jpg"
  },
  {
    name: "Dr. Aruna Verma ",
    designation: "LLRM",
    image: ""
  },
  {
    name: "Dr. Monica Shamra ",
    designation: "Head-Pharmacology, LLRM",
    image: ""
  },
  {
    name: "Prof. Aradhana",
    designation: "Dept of History, CCSU",
    image: "https://cdn.ccsuniversity.ac.in/cv/jpg/P22.jpg"
  },
  {
    name: "Pf. Alpana Agrawal ",
    designation: "Dept of Psychology, CCSU",
    image: "https://cdn.ccsuniversity.ac.in/cv/jpg/alpna_agg.jpg"
  },
  {
    name: "Prof. Neelu Jain Gupta",
    designation: "Dept of Zoology, CCSU",
    image: "https://cdn.ccsuniversity.ac.in/cv/jpeg/njg.jpeg"
  },
  {
    name: "Prof. Alka Tiwari",
    designation: "Dept. of Fine Arts, CCSU",
    image: "https://cdn.ccsuniversity.ac.in/cv/jpg/P246.jpg"
  },
  {
    name: "Prof. A. V. Kaur",
    designation: "Dept. of History, CCSU",
    image: "https://cdn.ccsuniversity.ac.in/cv/jpg/P141.jpg"
  },
];

const Advisory = () => {
  return (
    <>
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#5C5C99] mb-8">Advisory Committee</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {advisoryCommittee.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 rounded-full object-fill mb-4 border-4 border-[#A3A3CC]"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-[#5C5C99]">{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Advisory;