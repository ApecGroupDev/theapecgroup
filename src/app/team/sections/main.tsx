import React from 'react';
import TeamCard from '../components/teamCard';

type TeamMember = {
  name: string;
  title: string;
};

const teamMembers: TeamMember[] = [
  { name: 'Mehboob "Ali" Husain', title: 'PRESIDENT' },
  { name: 'Mavis Brown', title: 'CONTROLLER' },
  { name: 'Earl Sego', title: 'VP OF CONSTRUCTION' },
  { name: 'Ron Brown', title: 'SERVICE MANAGER' },
  { name: 'Wade LeComte', title: 'COMMERCIAL SALES EXECUTIVE' },
  { name: 'Jorge Salazar', title: 'COO IMAGING AND CANOPIES' },
  { name: 'Dami Ajasa', title: 'OPERATIONS MANAGER' },
  { name: 'Salman Mehdi', title: 'IT DIRECTOR' },
  { name: 'Sam Hakani', title: 'CUSTOMER RELATIONS MANAGER' },
  { name: 'Billy Boulware', title: 'ASST. SERVICE MANAGER' },
  { name: 'Peggy Hulka', title: 'POS MANAGER' },
  { name: 'Tyler Beck', title: 'SALES EXECUTIVE' },
  { name: 'Walid Bayoumi', title: 'SALES EXECUTIVE' },
  { name: 'Michael Henning', title: 'PARTS SPECIALIST' },
  { name: 'Arash Husain', title: 'PROJECT MANAGER, APEC COMPLIANCE' },
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
    <section className="outline-dashed outline-green-500 text-center scrn-800:pt-4 scrn-900:pt-4 lg:pt-12 xl:pt-16 scrn-1500:pt-24 2xl:pt-24 scrn-800:h-208 scrn-900:h-240 lg:h-288 xl:h-352 scrn-1500:h-384 scrn-1700:h-448 scrn-1900:h-480 scrn-2k:h-640">
      <span className="scrn-900:text-xl lg:text-2xl xl:text-2xl scrn-1500:text-4xl 2xl:text-4xl font-bold text-gray-800">Dedicated professionals delivering exceptional service</span><br />
      <span className="scrn-900:text-xl lg:text-2xl xl:text-2xl scrn-1500:text-4xl 2xl:text-4xl font-bold text-red-600">100% privately owned and operated</span>

      <div className="scrn-800:space-y-7 scrn-900:space-y-7 lg:space-y-8 xl:space-y-10 scrn-1500:space-y-10 scrn-1700:space-y-8 scrn-1900:space-y-16 scrn-2k:space-y-32 scrn-800:mt-4 scrn-900:mt-4 lg:mt-6 xl:mt-8 scrn-1500:mt-16 2xl:mt-16">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid justify-items-center scrn-800:mx-4 scrn-900:mx-12 lg:mx-8 xl:mx-20 scrn-1500:mx-20 scrn-1700:mx-24 scrn-1900:mx-0 scrn-2k:mx-24 
              ${row.length === 2 ? 'grid-cols-2 scrn-800:mx-36 scrn-900:mx-48 lg:mx-44 xl:mx-64 scrn-1500:mx-72 scrn-1700:mx-80 scrn-1900:mx-80 scrn-2k:mx-132' : 'grid-cols-3'
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
