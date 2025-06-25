"use client";
import { Button } from '@/components/ui/button';
import { Brain, Activity, ShieldCheck, Microscope, Syringe, Plus, AlertCircle } from 'lucide-react';

export default function ParkinsonsPage() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow">
        <div className="relative bg-gray-100 overflow-hidden">
          <div 
            className="absolute inset-0 z-0" 
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.3
            }}
          />
          
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Parkinson's Disease
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Discover how stem cell therapy offers new hope for managing and treating Parkinson's Disease
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Condition Overview – Parkinson's Disease</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Parkinson's disease (PD) is a progressive neurodegenerative disorder that affects movement. It develops when neurons 
                in the brain that produce dopamine, a chemical that coordinates movement, become impaired or die. The resulting 
                dopamine decrease causes movement symptoms characteristic of Parkinson's disease.
              </p>
              <p>
                While traditional treatments focus on managing symptoms, stem cell therapy represents an innovative approach that 
                may help slow disease progression and potentially repair damaged neural tissue. This treatment aims to address 
                the root cause of Parkinson's by regenerating dopamine-producing neurons.
              </p>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Symptoms of Parkinson's Disease</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Tremors</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Muscle Rigidity</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Balance Problems</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Slow Movement</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Speech Changes</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Writing Changes</p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Causes of Parkinson's Disease</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-teal-50/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Genetic Factors</h3>
                <p className="text-gray-700">
                  Specific genetic mutations have been linked to Parkinson's disease, though these cases are relatively rare.
                </p>
              </div>
              <div className="bg-teal-50/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Environmental Triggers</h3>
                <p className="text-gray-700">
                  Exposure to certain toxins or environmental factors may increase the risk of developing Parkinson's.
                </p>
              </div>
              <div className="bg-teal-50/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Age-Related Changes</h3>
                <p className="text-gray-700">
                  The risk of Parkinson's increases with age, particularly after 60 years old.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Learning about Stem Cells</h2>
            <div className="bg-teal-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700">
                Stem cells are unique cells that can develop into various cell types and have the potential to repair damaged tissue. 
                In Parkinson's disease treatment, they may help:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-teal-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Replace Damaged Cells</h3>
                <p className="text-gray-700">
                  Stem cells can potentially develop into new dopamine-producing neurons to replace those lost in Parkinson's disease.
                </p>
              </div>
              <div className="bg-white border border-teal-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Support Existing Cells</h3>
                <p className="text-gray-700">
                  They release growth factors and anti-inflammatory compounds that may protect remaining neurons.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Stem Cell Therapy Helps in Parkinson's Disease</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cell Replacement</h3>
                <p className="text-gray-700">
                  Stem cells can potentially develop into new dopamine-producing neurons, replacing those lost to the disease.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Neuroprotection</h3>
                <p className="text-gray-700">
                  They release factors that protect existing neurons from further damage and support their function.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Embryonic Stem Cells Treating Parkinson's Disease</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ethical Issues</h3>
                <p className="text-gray-700">
                  The use of embryonic stem cells raises ethical concerns, which is why many centers focus on adult stem cells 
                  or induced pluripotent stem cells derived from the patient's own tissue.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk of Tumors</h3>
                <p className="text-gray-700">
                  Embryonic stem cells carry a small risk of tumor formation, which is why strict protocols and safety measures 
                  are essential in their use.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conventional Treatments vs. Stem Cell Therapy</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="py-3 px-4 bg-teal-500 text-white text-left">Treatment</th>
                    <th className="py-3 px-4 bg-teal-500 text-white text-left">Approach</th>
                    <th className="py-3 px-4 bg-teal-500 text-white text-left">Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 bg-teal-50">Medication</td>
                    <td className="py-4 px-4">Manages symptoms through dopamine replacement</td>
                    <td className="py-4 px-4">Immediate symptom relief</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 bg-teal-50">Deep Brain Stimulation</td>
                    <td className="py-4 px-4">Electrical stimulation of brain areas</td>
                    <td className="py-4 px-4">Controls motor symptoms</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 bg-teal-100">Stem Cell Therapy</td>
                    <td className="py-4 px-4">Cell replacement and neuroprotection</td>
                    <td className="py-4 px-4">Potential disease modification</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Stem Cell Therapy Process</h2>
            <div className="space-y-6">
              <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Initial Assessment</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Comprehensive medical evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Review of symptoms and disease progression</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Treatment planning</span>
                  </li>
                </ul>
              </div>

              <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Stem Cell Collection</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Microscope className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Harvesting of stem cells</span>
                  </li>
                  <li className="flex items-start">
                    <Microscope className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Processing and preparation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Treatment Administration</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Syringe className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Stem cell injection</span>
                  </li>
                  <li className="flex items-start">
                    <Syringe className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Monitoring during procedure</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Treatment Cost</h2>
            <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                The cost of stem cell therapy for Parkinson's disease varies based on several factors:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Type and number of stem cell treatments required</span>
                </li>
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Pre-treatment testing and evaluation</span>
                </li>
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Post-treatment care and follow-up</span>
                </li>
              </ul>
              <p className="mt-4 text-gray-700">
                Contact us for a detailed cost breakdown based on your specific condition and treatment requirements.
              </p>
            </div>
          </section>

          {/* <section className="py-12">
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg overflow-hidden">
              <div className="px-6 py-12 md:p-12">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">Get a free online consultation</h2>
                  <p className="text-teal-50 mb-8">
                    Let our stem cell experts guide you through the process and answer all your questions about Parkinson's treatment options.
                  </p>
                  <div className="bg-white bg-opacity-90 rounded-lg p-8 shadow-lg">
                    <Button size="lg" className="w-full bg-teal-600 hover:bg-teal-700">
                      Schedule Your Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </main>
  
    </div>
  );
}