import { ShieldCheck, Brain, Activity, LineChart } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start">
        <div className="bg-teal-100 p-3 rounded-full mr-4 flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HowStemCellHelps() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">How Stem Cell Help in Autism</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BenefitCard 
          icon={<ShieldCheck className="h-6 w-6 text-teal-600" />}
          title="Regulate Immune Response"
          description="Stem cells can help modulate the immune system, potentially reducing inflammation in the brain that may contribute to autism symptoms. This immunomodulatory effect can create a healthier neural environment."
        />
        
        <BenefitCard 
          icon={<Brain className="h-6 w-6 text-teal-600" />}
          title="Enhance Brain Connectivity"
          description="By promoting neurogenesis and synaptogenesis, stem cells may help improve connections between different brain regions. This enhanced connectivity could lead to improvements in communication, social interaction, and cognitive functions."
        />
        
        <BenefitCard 
          icon={<Activity className="h-6 w-6 text-teal-600" />}
          title="Support Behavioral Improvements"
          description="Many families report positive changes in repetitive behaviors, attention, and emotional regulation following stem cell therapy. These improvements may be linked to the restoration of neural pathways and improved brain function."
        />
        
        <BenefitCard 
          icon={<LineChart className="h-6 w-6 text-teal-600" />}
          title="Improve Gut-Brain Connection"
          description="Stem cells may help address gut dysbiosis and intestinal permeability issues that are commonly found in individuals with autism, potentially improving the gut-brain axis and reducing associated symptoms."
        />
      </div>
    </section>
  );
}