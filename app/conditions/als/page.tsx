"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Brain, Activity, ShieldCheck, Microscope, Syringe } from 'lucide-react';

export default function ALSPage() {
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
                Amyotrophic Lateral Sclerosis (ALS)
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Discover how stem cell therapy offers new hope for managing and treating ALS
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
             
               
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Condition Overview – ALS</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Amyotrophic Lateral Sclerosis (ALS), also known as Lou Gehrig's disease, is a progressive neurodegenerative 
                disease that affects nerve cells in the brain and spinal cord. ALS causes the death of motor neurons, which 
                control voluntary muscles, leading to muscle weakness and atrophy.
              </p>
              <p>
                While there's no cure for ALS, stem cell therapy represents an innovative approach to treating the condition 
                by potentially protecting remaining motor neurons and supporting nerve cell function. Research continues to 
                explore how stem cells might slow disease progression and improve quality of life for ALS patients.
              </p>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Symptoms of ALS</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Muscle Weakness</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Difficulty Speaking</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Trouble Swallowing</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Muscle Twitching</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Breathing Problems</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Fatigue</p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Can Stem Cell Therapy Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Neuroprotection</h3>
                <p className="text-gray-700">
                  Stem cells may help protect remaining motor neurons from further damage through 
                  the release of protective factors and anti-inflammatory compounds.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Neural Support</h3>
                <p className="text-gray-700">
                  These cells can provide essential support to existing neural networks and potentially 
                  help maintain motor neuron function.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Anti-inflammatory Effects</h3>
                <p className="text-gray-700">
                  Stem cells can help reduce inflammation in the nervous system, potentially slowing 
                  disease progression and supporting better motor function.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Stem Cell Treatment Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-5">
                <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Comprehensive Assessment</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Detailed medical history review</span>
                    </li>
                    <li className="flex items-start">
                      <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Current symptoms evaluation</span>
                    </li>
                    <li className="flex items-start">
                      <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Diagnostic testing</span>
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
                      <span>Collection of stem cells</span>
                    </li>
                    <li className="flex items-start">
                      <Microscope className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Processing and preparation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Treatment Administration</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Syringe className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Controlled delivery of stem cells</span>
                    </li>
                    <li className="flex items-start">
                      <Syringe className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Monitoring during administration</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Follow-up Care</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Regular progress assessments</span>
                    </li>
                    <li className="flex items-start">
                      <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Ongoing support and monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Adjustments to treatment plan as needed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Treatment Cost</h2>
            <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                The cost of stem cell therapy for ALS varies based on several factors:
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
                    Let our stem cell experts guide you through the process and answer all your questions about ALS treatment options.
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