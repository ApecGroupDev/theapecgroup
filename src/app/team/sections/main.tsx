import React from 'react';
import TeamCard from '../components/teamCard';

type TeamMember = {
  name: string;
  title: string;
};

const teamMembers: TeamMember[] = [
  { name: 'Mehboob "Ali" Husain', title: 'President' },
  { name: 'Mavis Brown', title: 'Controller' },
  { name: 'Earl Sego', title: 'VP of Construction' },
  { name: 'Ron Brown', title: 'Service Manager' },
  { name: 'Wade LeComte', title: 'Commercial Sales Executive' },
  { name: 'Jorge Salazar', title: 'COO Imaging & Canopies' },
  { name: 'Dami Ajasa', title: 'Operations Manager' },
];

const TeamPage: React.FC = () => {
  return (
    <section className="items-center outline-dashed outline-green-500 from-white to-gray-100 py-20 scrn-1900:h-480">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Team</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-24">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} name={member.name} title={member.title} />
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
