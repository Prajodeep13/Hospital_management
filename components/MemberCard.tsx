import React from 'react';
import { TeamMember } from '../types';
   

interface MemberCardProps {
  member: TeamMember;
  large?: boolean;
}

const MemberCard: React.FC<MemberCardProps> = ({ member, large = false }) => {
  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 
        ${large ? 'md:flex' : ''}`}
    >
      <div className={`relative overflow-hidden ${large ? 'md:w-1/2' : 'aspect-w-4 aspect-h-5'}`}>
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-cyan-900/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
      </div>
      
      <div className={`p-6 ${large ? 'md:w-1/2 md:p-8 flex flex-col justify-center' : ''}`}>
        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-cyan-600 transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-cyan-600 font-medium mb-4">
          {member.role}
        </p>
        <div className="h-1 w-12 bg-cyan-500 rounded-full transform origin-left transition-all duration-300 group-hover:w-24"></div>
      </div>
    </div>
  );
};

export default MemberCard;