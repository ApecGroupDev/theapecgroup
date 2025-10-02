import React from 'react';
import TeamCard from '../components/teamCard';
import TeamCardNoImage from '../components/teamCardNoImage';

type TeamMember = {
  name: string;
  title: string;
};

const teamMembers: TeamMember[] = [
  { name: 'Mehboob "Ali" Husain', title: 'PRESIDENT' },
  { name: 'Mavis Brown', title: 'CONTROLLER' },

  { name: 'Earl Sego', title: 'VP OF CONSTRUCTION' },
  { name: 'Ron Brown', title: 'SERVICE MANAGER' },
  { name: 'Dami Ajasa', title: 'OPERATIONS MANAGER' },

  { name: 'Jorge Salazar', title: 'COO IMAGING AND CANOPIES' },
  { name: 'Walid Bayoumi', title: 'SALES EXECUTIVE' },

  { name: 'Rani Sonpari', title: 'CUSTOMER CARE' },
  { name: 'Billy Boulware', title: 'ASST. SERVICE MANAGER' },
  { name: 'Peggy Hulka', title: 'POS MANAGER' },

  { name: 'Michael Henning', title: 'PARTS SPECIALIST' },
  { name: 'Wade LeComte', title: 'COMMERCIAL SALES EXECUTIVE' },
];

const TeamPage: React.FC = () => {
  const rows: TeamMember[][] = [];
  let i = 0;

  while (i < teamMembers.length) {//gg
    const count: number = rows.length % 2 === 0 ? 2 : 3; // Alternate rows
    rows.push(teamMembers.slice(i, i + count));
    i += count;
  }

  return (
    <section className='text-center font-bold text-gray-800 h-auto mb-24'>
      <span className='scrn-300:text-xs scrn-450:text-sm scrn-600:text-base scrn-900:text-xl scrn-1000:text-2xl scrn-1250:text-2xl scrn-1500:text-4xl'>
        Meet a Few of Our Leaders
      </span><br />
      <span className='font-bold text-[#c62931] scrn-900:text-xl scrn-1000:text-2xl scrn-1250:text-2xl scrn-1500:text-4xl'>
        100% privately owned and operated
      </span>

      <div className='hidden scrn-600:block space-y-6 scrn-800:space-y-8 scrn-900:space-y-7 scrn-1000:space-y-8 scrn-1200:space-y-12 scrn-1400:space-y-16 scrn-1500:space-y-16 scrn-1700:space-y-20 scrn-1900:space-y-24 scrn-2500:space-y-32 scrn-600:mt-6 scrn-750:mt-4 scrn-800:mt-8 scrn-900:mt-12 scrn-1000:mt-6 scrn-1100:mt-16 scrn-1400:mt-16 scrn-1700:mt-20 scrn-1800:mt-24'>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex flex-wrap justify-center items-start gap-x-6 scrn-700:gap-x-8 scrn-1400:gap-x-16 scrn-1500:gap-x-20
            ${row.length === 2 ? '' : ''}
          `}
          >
            {row.map((member) => {
              const globalIndex = teamMembers.findIndex((tm) => tm.name === member.name);
              return globalIndex < 2 ? (
                <TeamCard key={member.name} name={member.name} title={member.title} />
              ) : (
                <TeamCardNoImage key={member.name} name={member.name} title={member.title} />
              );
            })}
          </div>
        ))}
      </div>

      <div className='space-y-4 scrn-600:hidden pt-6'>
        {Array.from({ length: Math.ceil(teamMembers.length / 2) }).map((_, rowIndex) => {
          const start = rowIndex * 2;
          const row = teamMembers.slice(start, start + 2); // Get 2 members per row

          return (
            <div
              key={rowIndex}
              className={`grid ${row.length === 1 && start + 1 === teamMembers.length
                ? 'grid-cols-1 justify-items-center'
                : 'grid-cols-2 justify-items-center'
                } mx-4 scrn-550:mx-14 `}
            >
              {row.map((member) => {
                const globalIndex = teamMembers.findIndex((tm) => tm.name === member.name);
                return globalIndex < 2 ? (
                  <TeamCard key={member.name} name={member.name} title={member.title} />
                ) : (
                  <TeamCardNoImage key={member.name} name={member.name} title={member.title} />
                );
              })}
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default TeamPage;
