import { Eye, Brain, MessageSquare, Gauge } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SymptomCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

function SymptomCard({ icon, title, description, className }: SymptomCardProps) {
  return (
    <div className={cn(
      "bg-teal-50 rounded-lg p-6 flex flex-col items-center text-center transition-all hover:shadow-md",
      className
    )}>
      <div className="mb-4 bg-white p-3 rounded-full">
        {icon}
      </div>
      <h3 className="font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default function SymptomsSection() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Symptoms of Autism</h2>
      <p className="text-gray-700 mb-8">
        Autism symptoms typically appear within the first 2-3 years. Though they vary among individuals, the following symptoms are common:
      </p>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Social and Communication Challenges</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <SymptomCard 
          icon={<Eye className="h-6 w-6 text-teal-500" />}
          title="Limited Eye Contact"
          description="Difficulty maintaining eye contact during interactions"
        />
        <SymptomCard 
          icon={<Brain className="h-6 w-6 text-teal-500" />}
          title="Social Skill Deficits"
          description="Trouble understanding social cues and relationships"
        />
        <SymptomCard 
          icon={<MessageSquare className="h-6 w-6 text-teal-500" />}
          title="Speech Delay"
          description="Delayed or absent speech development"
        />
        <SymptomCard 
          icon={<Gauge className="h-6 w-6 text-teal-500" />}
          title="Inability to Gauge Emotions"
          description="Difficulty recognizing and responding to others' emotions"
        />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Repetitive Behaviors</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <SymptomCard 
          icon={<div className="h-6 w-6 rounded-full border-4 border-teal-500 flex items-center justify-center" />}
          title="Stimming"
          description="Repetitive movements like hand-flapping or rocking"
          className="bg-teal-50/70"
        />
        <SymptomCard 
          icon={<div className="h-6 w-6 bg-teal-500" />}
          title="Patterns"
          description="Strong attachment to routines and resistance to change"
          className="bg-teal-50/70"
        />
        <SymptomCard 
          icon={<div className="h-6 w-6 bg-teal-500 rounded-md" />}
          title="Fixating"
          description="Intense focus on specific objects or topics"
          className="bg-teal-50/70"
        />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Sensory Sensitivities</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SymptomCard 
          icon={<div className="relative h-6 w-6"><div className="absolute inset-0 bg-teal-500 rounded-full" /><div className="absolute inset-[25%] bg-white rounded-full" /></div>}
          title="Sound"
          description="Heightened sensitivity to sounds"
          className="bg-teal-50/50"
        />
        <SymptomCard 
          icon={<div className="h-6 w-6 bg-teal-500 rounded-full flex items-center justify-center"><div className="h-2 w-2 bg-white rounded-full" /></div>}
          title="Light"
          description="Sensitivity to bright or flickering lights"
          className="bg-teal-50/50"
        />
        <SymptomCard 
          icon={<div className="h-6 w-6 bg-teal-500 rounded-md transform rotate-45" />}
          title="Touch"
          description="Discomfort with certain textures or physical contact"
          className="bg-teal-50/50"
        />
      </div>
    </section>
  );
}