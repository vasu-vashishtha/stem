import React from 'react';
import njg from '../assets/njg.jpeg';
import aruna from '../assets/aruna_verma.jpg';
import monica from '../assets/monica_sharma.jpg';
import vinita from '../assets/Vinita .jpg';

const advisoryCommittee = [
  {
    name: "Prof. (Dr.) Vineeta Tyagi",
    designation: "Dean - Ayurveda, CCSU",
    image: vinita
  },
  {
    name: "Prof. Jaimala",
    designation: "Dean - Science",
    image: "https://cdn.ccsuniversity.ac.in/cv/jpg/P15.jpg"
  },
  {
    name: "Dr. Aruna Verma ",
    designation: "Professor & Unit Head, Department of gynecology, LLRM medical college",
    image: aruna
  },
  {
    name: "Dr. Monica Sharma",
    designation: "Head-Pharmacology, LLRM",
    image: monica
  },
  {
    name: "Prof. Aradhana",
    designation: "Dept of History, CCSU",
    image: "https://cdn.ccsuniversity.ac.in/cv/jpg/P22.jpg"
  },
  {
    name: "Prof. Alpana Agrawal ",
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
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">Advisory Committee</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {advisoryCommittee.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md shadow-blue-500/40  rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 rounded-full object-fill mb-4 border-4 border-blue-200"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-blue-500">{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Advisory;