import React from 'react';

const teamMembers = [
  { name: 'Mehboob “Ali” Husain', role: 'President', image: 'https://via.placeholder.com/150' },
  { name: 'Mavis Brown', role: 'Controller', image: 'https://via.placeholder.com/150' },
  { name: 'Earl Sego', role: 'VP of Construction', image: 'https://via.placeholder.com/150' },
  { name: 'Ron Brown', role: 'Service Manager', image: 'https://via.placeholder.com/150' },
  { name: 'Wade LeComte', role: 'Commercial Sales Executive', image: 'https://via.placeholder.com/150' },
  { name: 'Jorge Salazar', role: 'COO Imaging & Canopies', image: 'https://via.placeholder.com/150' },
  { name: 'Dami Ajasa', role: 'Operations Manager', image: 'https://via.placeholder.com/150' },
  { name: 'Salman Mehdi', role: 'IT Director', image: 'https://via.placeholder.com/150' },
  { name: 'Sam Hakani', role: 'Customer Relations Manager', image: 'https://via.placeholder.com/150' },
  { name: 'Billy Boulware', role: 'Asst. Service Manager', image: 'https://via.placeholder.com/150' },
  { name: 'Peggy Hulka', role: 'POS Manager', image: 'https://via.placeholder.com/150' },
  { name: 'Tyler Beck', role: 'Sales Executive', image: 'https://via.placeholder.com/150' },
  { name: 'Walid Bayoumi', role: 'Sales Executive', image: 'https://via.placeholder.com/150' },
  { name: 'Michael Henning', role: 'Parts Specialist', image: 'https://via.placeholder.com/150' },
  { name: 'Arash Husain', role: 'Project Manager, APEC Compliance', image: 'https://via.placeholder.com/150' },
];

const Team: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16 mt-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-6">
          Meet Our <span className='text-red-600'>Team</span>
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Dedicated professionals delivering exceptional service. 100% privately owned and operated.
        </p>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full mx-auto border-4 border-red-600 shadow-md object-cover"
              />
              <h3 className="mt-6 text-xl font-bold text-gray-800 text-center">{member.name}</h3>
              <p className="text-sm text-gray-600 text-center mt-2">{member.role}</p>
              <div className="absolute inset-0 bg-gradient-to-t from-red-700 via-red-500 to-transparent opacity-0 hover:opacity-90 rounded-2xl transition-all duration-300 flex justify-center items-center">
                <p className="text-white font-medium text-center mt-12 px-4">
                  {`${member.name} is our ${member.role}, ensuring the highest standards in every project.`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
