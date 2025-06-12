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
  { name: 'Billy Boulware', title: 'ASST. SERVICE MANAGER' },
  { name: 'Peggy Hulka', title: 'POS MANAGER' },
  { name: 'Walid Bayoumi', title: 'SALES EXECUTIVE' },
  { name: 'Michael Henning', title: 'PARTS SPECIALIST' },
  { name: 'Rani Sonpari', title: 'CUSTOMER CARE' },
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
    <section className="text-center font-bold text-gray-800
      scrn-450:pt-6 
      scrn-600:pt-6 
      scrn-700:pt-12 
      scrn-800:pt-12 
      scrn-900:pt-12
      scrn-1000:pt-12
      scrn-1100:pt-16 
      scrn-1400:pt-20
      scrn-1500:pt-24 
      scrn-1700:pt-28
      scrn-1800:pt-32
      scrn-1900:pt-20
       
      h-160 
      scrn-450:h-188 
      scrn-600:h-160
      scrn-650:h-172 
      scrn-700:h-188
      scrn-750:h-208
      scrn-800:h-224 
      scrn-850:h-232
      scrn-900:h-244
      scrn-950:h-256 
      scrn-1000:h-288 
      scrn-1100:h-296
      scrn-1150:h-312
      scrn-1200:h-324
      scrn-1300:h-360
      scrn-1400:h-384
      scrn-1500:h-416
      scrn-1600:h-432
      scrn-1700:h-464
      scrn-1800:h-480
      scrn-2000:h-512
      scrn-2100:h-544
      scrn-2250:h-576
      scrn-2350:h-608
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
      <span className="font-bold text-[#c62931]
        scrn-900:text-xl 
        scrn-1000:text-2xl 
        scrn-1250:text-2xl 
        scrn-1500:text-4xl"
      >
        100% privately owned and operated
      </span>

      <div className="hidden scrn-600:block 
        space-y-6
        scrn-800:space-y-8 
        scrn-900:space-y-7 
        scrn-1000:space-y-8 
        scrn-1200:space-y-12
        scrn-1400:space-y-16
        scrn-1500:space-y-16
        scrn-1700:space-y-20 
        scrn-1900:space-y-24
        scrn-2500:space-y-32 

        scrn-600:mt-6 
        scrn-750:mt-4 
        scrn-800:mt-8
        scrn-900:mt-12
        scrn-1000:mt-6 
        scrn-1100:mt-16
        scrn-1400:mt-16
        scrn-1700:mt-20
        scrn-1800:mt-24"
      >
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`
            flex flex-wrap justify-center items-start
            gap-x-6
            scrn-700:gap-x-8
            scrn-1400:gap-x-16
            scrn-1500:gap-x-20
            ${row.length === 2 ? '' : ''}
          `}
          >
            {row.map((member) => (
              <TeamCard key={member.name} name={member.name} title={member.title} />
            ))}
          </div>
        ))}
      </div>

      <div className="space-y-4 scrn-600:hidden pt-6">
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
