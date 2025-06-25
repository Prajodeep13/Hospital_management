import React from 'react';
import { TeamMember } from '../types';          
import { teamMembers } from '../data/teamData'; // Adjust the import path as necessary                              
import MemberCard from './MemberCard';

const TeamGrid: React.FC = () => {
  const ceoTeam = teamMembers.filter(member => member.category === 'ceo');
  const leadershipTeam = teamMembers.filter(member => member.category === 'leadership');
  const clinicalTeam = teamMembers.filter(member => member.category === 'clinical');
  const managementTeam = teamMembers.filter(member => member.category === 'management');

  const TeamSection: React.FC<{ title: string; members: TeamMember[]; cols?: number }> = ({ title, members, cols = 3 }) => (
    <div className="mb-20 last:mb-0">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 relative inline-block">
        {title}
        <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-500"></div>
      </h2>
      <div className={`grid grid-cols-1 ${cols === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'} gap-6 md:gap-8`}>
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 relative inline-block">
          Meet Our CEO Team
          <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-500"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ceoTeam.map(member => (
            <MemberCard key={member.id} member={member} large />
          ))}
        </div>
      </div>
      
      <TeamSection title="Our Leadership" members={leadershipTeam} />
      <TeamSection title="Our Clinical Team" members={clinicalTeam} />
      <TeamSection title="Our Management Team" members={managementTeam} />
    </section>
  );
};

export default TeamGrid;