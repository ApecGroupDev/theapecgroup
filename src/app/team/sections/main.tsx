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
  const rows: TeamMember[][] = [];
  let i = 0;

  while (i < teamMembers.length) {
    const count: number = rows.length % 2 === 0 ? 2 : 3; // Alternate rows
    rows.push(teamMembers.slice(i, i + count));
    i += count;
  }

  return (
    <section className="from-white to-gray-100 py-20 scrn-1900:mx-4 scrn-1900:h-480">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Team</h1>

      <div className="scrn-1900:space-y-12">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid gap-8 justify-items-center ${
              row.length === 2 ? 'grid-cols-2 scrn-1900:mx-80' : 'grid-cols-3'
            }`}
          >
            {row.map((member) => (
              <TeamCard key={member.name} name={member.name} title={member.title} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
