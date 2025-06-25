"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Brain, Activity, TrendingUp, ShieldCheck, Microscope, Syringe } from 'lucide-react';

export default function MultipleSclerosisPage() {
  return (
    <div className="flex flex-col min-h-screen">
     
      <main className="flex-grow">
        <div className="relative bg-gray-100 overflow-hidden">
          <div 
            className="absolute inset-0 z-0" 
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.3
            }}
          />
          
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Multiple Sclerosis
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Discover how stem cell therapy offers new hope for managing and treating Multiple Sclerosis
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
               
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Condition Overview – Multiple Sclerosis</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Multiple Sclerosis (MS) is a chronic autoimmune disease that affects the central nervous system, 
                particularly the brain, spinal cord, and optic nerves. The condition causes inflammation and damage 
                to the protective covering of nerve fibers, known as myelin, leading to communication problems 
                between the brain and the rest of the body.
              </p>
              <p>
                While there's no cure for MS, various treatments can help manage symptoms and modify the course 
                of the disease. Stem cell therapy represents an innovative approach to treating MS by potentially 
                repairing damaged myelin and modulating the immune system.
              </p>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Symptoms of Multiple Sclerosis</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Fatigue</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Cognitive Issues</p>
              </div>
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
                <p className="text-sm font-medium">Balance Issues</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Vision Problems</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Numbness</p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Multiple Sclerosis</h2>
            <div className="space-y-6">
              <div className="bg-teal-50/30 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <TrendingUp className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Relapsing-remitting MS</h3>
                    <p className="text-gray-700">
                      The most common form, characterized by clearly defined attacks followed by periods of recovery.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-teal-50/30 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <Activity className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Secondary progressive MS</h3>
                    <p className="text-gray-700">
                      Initially relapsing-remitting MS that becomes progressively worse over time.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-teal-50/30 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <Brain className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Primary progressive MS</h3>
                    <p className="text-gray-700">
                      Characterized by worsening neurologic function from the onset of symptoms.
                    </p>
                  </div>
                </div>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Immune System Modulation</h3>
                <p className="text-gray-700">
                  Stem cells help regulate the immune system, potentially reducing the autoimmune response 
                  that causes damage to myelin.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Myelin Repair</h3>
                <p className="text-gray-700">
                  Promotes repair and regeneration of damaged myelin, helping restore proper nerve signal transmission.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Neuroprotection</h3>
                <p className="text-gray-700">
                  Releases factors that protect existing nerve tissue and promote a healthier environment for neural repair.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Stem Cell Treatment Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-5">
                <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Medical Assessment & Diagnostics</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Comprehensive medical history review</span>
                    </li>
                    <li className="flex items-start">
                      <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Current symptoms assessment</span>
                    </li>
                    <li className="flex items-start">
                      <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
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
                      <span>Collection of autologous stem cells</span>
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Treatment Administration</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Syringe className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Carefully controlled infusion of stem cells</span>
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Recovery & Follow-up</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Post-treatment monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Regular progress assessments</span>
                    </li>
                    <li className="flex items-start">
                      <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                      <span>Long-term outcome tracking</span>
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
                The cost of stem cell therapy for Multiple Sclerosis varies based on several factors:
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
                    Let our stem cell experts guide you through the process and answer all your questions about MS treatment options.
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