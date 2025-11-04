import React from 'react'
import nidhi from "../assets/nidhi.jpeg";

const members = {
  Patron: [
    {
      name: "Prof. Sangeeta Shukla",
      image: "https://www.ccsuniversity.ac.in/assets/images/vc-img.jpg",
      designation: "(Hon’ble Vice Chancellor)"
    },
  ],
  "Co-Patron": [
    {
      name: "Prof. Sanjeev Kumar Sharma ",
      image: "https://www.ccsuniversity.ac.in/assets/images/administration/Sanjeev%20Kumar%20Sharma.png",
      designation: "(Director, Academics)"
    },
    {
      name: "Prof. Beer Pal Singh",
      image: "https://ccsuniversity.blr1.cdn.digitaloceanspaces.com/public/jpg/2024/05/administration/prof-beerpal.jpg",
      designation: "(Director, Research & Development)"
    },
  ],
  Convener: [
    {
      name: "Prof. Bindu Sharma",
      image: "https://cdn.ccsuniversity.ac.in/cv/jpg/P134.jpg",
      designation: "Coordinator, Mahila Adhyayan Kendra"
    },
  ],
  "Organizing Secretary": [
    {
      name: "Dr. Vaishali M. Patil,",
      image: "https://www.csopccsu.com/assets/images/F-vmp.jpg",
      designation: "Principal, Charak School of Pharmacy"
    },
  ],
  "Organizing Committee ": [
    {
      name: "Dr. Vijeta Gautam",
      image: "https://cdn.ccsuniversity.ac.in/cv/jpg/vijeta-gautam.jpg",
      designation: "Dept of English, CCSU, Meerut"
    },
    {
      name: "Dr. Meenu Teotia",
      image: "https://cdn.ccsuniversity.ac.in/cv/jpg/P267.jpg",
      designation: "Dept of Chemistry, CCSU, Meerut"
    },
    {
      name: "Dr. Neha Garg",
      image: "https://cdn.ccsuniversity.ac.in/cv/jpg/P229.jpg",
      designation: "Dept of Sociology, CCSU, Meerut"
    },
    {
      name: "Dr. Shweta Sharma",
      image: "https://cdn.ccsuniversity.ac.in/cv/jpg/sweta-maam.jpg",
      designation: "Dept of Home Science, CCSU, Meerut"
    },
    {
      name: "Dr. Swati Singh",
      image: "https://scriet.ccsuniversity.ac.in/assets/images/prof/swati-singh-asc.jpg",
      designation: "SCRIET, CCSU, Meerut"
    },
    {
      name: "Dr. Nidhi",
      image: "https://scriet.ccsuniversity.ac.in/assets/images/prof/ei-nidhi-chauhan.jpg",
      designation: "SCRIET, CCSU, Meerut"
    },
    {
      name: "Dr. Renu Garg",
      image: "https://scriet.ccsuniversity.ac.in/assets/images/prof/as-ranu.jpg",
      designation: "SCRIET, CCSU, Meerut"
    },
    {
      name: "Dr. Nidhi Chaudhary",
      image: [nidhi],
      designation: "Dept. of Home Science"
    },
  ],
};

const Organizing = () => {
  return (
    <>
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-16">
        {Object.entries(members).map(([category, people]) => (
          <div key={category}>
            {/* Category Title */}
            <h3 className="text-3xl font-semibold text-blue-500 mb-8 text-center">
              {category}
            </h3>

            {/* Members Grid */}
            <div className={['Patron', 'Co-Patron', 'Convener', 'Organizing Secretary'].includes(category) ? "flex flex-wrap justify-center gap-8" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"}>
              {people.map((person, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg shadow-blue-400/40 p-6 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-36 h-36 rounded-full object-fill mb-4 border-4 border-blue-200"
                  />
                  <h4 className="text-lg font-semibold text-black">
                    {person.name}
                  </h4>
                  <p className="text-blue-500 font-medium">{person.designation}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Organizing;