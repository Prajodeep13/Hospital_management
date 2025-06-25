import { Brain, Activity, TrendingUp } from 'lucide-react';

export default function TypesSection() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Multiple Sclerosis</h2>
      
      <div className="space-y-6">
        <div className="bg-teal-50 rounded-lg p-6">
          <div className="flex items-start">
            <div className="bg-teal-100 p-3 rounded-full mr-4">
              <TrendingUp className="h-6 w-6 text-teal-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Relapsing-remitting MS</h3>
              <p className="text-gray-700">
                The most common form of MS, characterized by clearly defined attacks of new or increasing neurologic symptoms. These attacks are followed by periods of partial or complete recovery (remissions).
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-teal-50 rounded-lg p-6">
          <div className="flex items-start">
            <div className="bg-teal-100 p-3 rounded-full mr-4">
              <Activity className="h-6 w-6 text-teal-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secondary progressive MS</h3>
              <p className="text-gray-700">
                Initially begins as relapsing-remitting MS, but eventually transitions to a more progressive form where symptoms steadily worsen over time, with or without periods of remission.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-teal-50 rounded-lg p-6">
          <div className="flex items-start">
            <div className="bg-teal-100 p-3 rounded-full mr-4">
              <Brain className="h-6 w-6 text-teal-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Primary progressive MS</h3>
              <p className="text-gray-700">
                Characterized by worsening neurologic function from the onset of symptoms, without early relapses or remissions. Accumulation of disability occurs more quickly than in relapsing-remitting MS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}