import { ClipboardCheck, Microscope, Syringe, Activity } from 'lucide-react';

export default function TreatmentProcess() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Stem Cell Therapy for Multiple Sclerosis (MS)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-5">
          <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Medical Assessment & Diagnostics</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <ClipboardCheck className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span>Comprehensive medical history review</span>
              </li>
              <li className="flex items-start">
                <ClipboardCheck className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span>Current symptoms assessment</span>
              </li>
              <li className="flex items-start">
                <ClipboardCheck className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span>MRI and other relevant diagnostic tests</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="lg:col-span-5">
          <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Stem Cell Harvesting</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Microscope className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span>Collection of autologous stem cells from bone marrow or adipose tissue</span>
              </li>
              <li className="flex items-start">
                <Microscope className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span>Processing and isolation of stem cells</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="lg:col-span-5">
          <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Stem Cell Activation & Preparation</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Syringe className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span>Enhancement of stem cell properties</span>
              </li>
              <li className="flex items-start">
                <Syringe className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span>Quality control and testing</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="lg:col-span-5">
          <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Targeted Stem Cell Injection</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span>Administration through appropriate delivery method</span>
              </li>
              <li className="flex items-start">
                <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span>Monitoring during and after procedure</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="lg:col-span-5">
          <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Recovery & Rehabilitation</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span>Post-treatment care and monitoring</span>
              </li>
              <li className="flex items-start">
                <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span>Physical therapy and rehabilitation as needed</span>
              </li>
              <li className="flex items-start">
                <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span>Regular follow-up assessments</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}