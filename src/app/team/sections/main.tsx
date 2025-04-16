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
    <section className="outline-dashed outline-green-500 text-center font-bold text-gray-800
      scrn-450:pt-6 
      scrn-600:pt-6 
      scrn-750:pt-4 
      scrn-800:pt-4 
      scrn-900:pt-4 
      scrn-1000:pt-12 
      scrn-1250:pt-16 
      scrn-1500:pt-24 
       
      scrn-300:h-198 
      scrn-450:h-182 
      scrn-600:h-160 
      scrn-750:h-198 
      scrn-800:h-208 
      scrn-900:h-240 
      scrn-1000:h-288 
      scrn-1250:h-352 
      scrn-1500:h-384
      scrn-1700:h-448 
      scrn-1900:h-480 
      scrn-2500:h-640"
    >
      <span className="
        scrn-300:text-xs 
        scrn-450:text-sm 
        scrn-600:text-base 
        scrn-900:text-xl 
        scrn-1000:text-2xl 
        scrn-1250:text-2xl 
        scrn-1500:text-4xl"
      >
        Dedicated professionals delivering exceptional service
      </span><br />
      <span className="font-bold text-red-600
        scrn-900:text-xl 
        scrn-1000:text-2xl 
        scrn-1250:text-2xl 
        scrn-1500:text-4xl"
      >
        100% privately owned and operated
      </span>

      <div className="scrn-300:hidden scrn-450:hidden scrn-600:block 
        scrn-600:space-y-5 
        scrn-750:space-y-6 
        scrn-800:space-y-7 
        scrn-900:space-y-7 
        scrn-1000:space-y-8 
        scrn-1250:space-y-10 
        scrn-1500:space-y-10 
        scrn-1700:space-y-8 
        scrn-1900:space-y-16 
        scrn-2500:space-y-32 
        scrn-600:mt-6 
        scrn-750:mt-4 
        scrn-800:mt-4 
        scrn-900:mt-4 
        scrn-1000:mt-6 
        scrn-1250:mt-8 
        scrn-1500:mt-16"
      >
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid justify-items-center 
              scrn-600:mx-6 
              scrn-750:mx-4 
              scrn-800:mx-4 
              scrn-900:mx-12 
              scrn-1000:mx-8 
              scrn-1250:mx-20 
              scrn-1500:mx-20 
              scrn-1700:mx-24 
              scrn-1900:mx-0 
              scrn-2500:mx-24 
              ${row.length === 2 ? 'grid-cols-2 scrn-600:mx-auto scrn-600:max-w-116 scrn-750:mx-auto scrn-750:max-w-128 scrn-800:mx-auto scrn-800:max-w-128 scrn-900:mx-auto scrn-900:max-w-144 scrn-1000:mx-auto scrn-1000:max-w-168 scrn-1250:mx-auto scrn-1250:max-w-192 scrn-1500:mx-auto scrn-1500:max-w-224 scrn-1700:mx-auto scrn-1700:max-w-256 scrn-1900:mx-auto scrn-1900:max-w-320 scrn-2500:mx-auto scrn-2500:max-w-384' : 'grid-cols-3'
              }`}
          >
            {row.map((member) => (
              <TeamCard key={member.name} name={member.name} title={member.title} />
            ))}
          </div>
        ))}
      </div>

      <div className="space-y-4 mx-4 scrn-600:hidden pt-6">
        {Array.from({ length: Math.ceil(teamMembers.length / 2) }).map((_, rowIndex) => {
          const start = rowIndex * 2;
          const row = teamMembers.slice(start, start + 2); // Get 2 members per row

          return (
            <div
              key={rowIndex}
              className={`grid ${row.length === 1 && start + 1 === teamMembers.length
                ? 'grid-cols-1 justify-items-center'
                : 'grid-cols-2 justify-items-center'
                } gap-4`}
            >
              {row.map((member, index) => (
                <TeamCard key={index} name={member.name} title={member.title} />
              ))}
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default TeamPage;
