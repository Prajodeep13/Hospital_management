"use client";

import { Button } from '@/components/ui/button';
import { Brain, Activity, ShieldCheck, Microscope, Syringe, Bone, Heart } from 'lucide-react';

export default function ArthritisPage() {
  return (
    <div className="flex flex-col min-h-screen">
   
      <main className="flex-grow">
        <div className="relative bg-gray-100 overflow-hidden">
          <div 
            className="absolute inset-0 z-0" 
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.3
            }}
          />
          
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Arthrosis, Arthritis, and Osteochondrosis
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Discover how stem cell therapy offers new possibilities for managing joint and bone conditions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Condition Overview – Stem Cell Therapy in Arthrosis, Arthritis, and Osteochondrosis</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Joint and bone conditions like arthrosis, arthritis, and osteochondrosis can significantly impact quality of life. 
                These conditions cause pain, limit mobility, and can progressively worsen over time. While conventional treatments 
                focus on managing symptoms, stem cell therapy offers potential for tissue repair and regeneration.
              </p>
              <p>
                Our innovative stem cell treatments aim to address the underlying causes of these conditions, potentially 
                reducing inflammation, promoting tissue repair, and improving joint function.
              </p>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Causes & Symptoms of Arthrosis, Arthritis, and Osteochondrosis</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-teal-50/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Arthrosis</h3>
                <p className="text-gray-700 mb-4">Causes:</p>
                <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                  <li>Age-related wear and tear</li>
                  <li>Joint injuries</li>
                  <li>Mechanical stress</li>
                </ul>
                <p className="text-gray-700 mb-4">Symptoms:</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Joint pain and stiffness</li>
                  <li>Reduced range of motion</li>
                  <li>Grinding sensation</li>
                </ul>
              </div>

              <div className="bg-teal-50/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Arthritis</h3>
                <p className="text-gray-700 mb-4">Causes:</p>
                <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                  <li>Autoimmune response</li>
                  <li>Inflammation</li>
                  <li>Genetic factors</li>
                </ul>
                <p className="text-gray-700 mb-4">Symptoms:</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Joint pain and swelling</li>
                  <li>Morning stiffness</li>
                  <li>Fatigue</li>
                </ul>
              </div>

              <div className="bg-teal-50/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Osteochondrosis</h3>
                <p className="text-gray-700 mb-4">Causes:</p>
                <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                  <li>Disrupted blood supply</li>
                  <li>Mechanical stress</li>
                  <li>Growth disturbances</li>
                </ul>
                <p className="text-gray-700 mb-4">Symptoms:</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Localized pain</li>
                  <li>Restricted movement</li>
                  <li>Joint instability</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Stem Cell Therapy Helps</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-teal-50 rounded-lg p-6">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tissue Regeneration</h3>
                <p className="text-sm text-gray-700">
                  Promotes repair and regeneration of damaged cartilage and bone tissue
                </p>
              </div>

              <div className="bg-teal-50 rounded-lg p-6">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pain Reduction</h3>
                <p className="text-sm text-gray-700">
                  Reduces inflammation and modulates pain signals
                </p>
              </div>

              <div className="bg-teal-50 rounded-lg p-6">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Bone className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Joint Function</h3>
                <p className="text-sm text-gray-700">
                  Improves joint mobility and function
                </p>
              </div>

              <div className="bg-teal-50 rounded-lg p-6">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Disease Modification</h3>
                <p className="text-sm text-gray-700">
                  May slow disease progression
                </p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Stem Cell Research for Arthrosis, Arthritis, & Osteochondrosis</h2>
            <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
              <p className="text-gray-700 mb-6">
                Clinical studies have shown promising results in using stem cells for treating joint and bone conditions:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Reduced inflammation and pain in arthritis patients</span>
                </li>
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Improved cartilage regeneration in arthrosis cases</span>
                </li>
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Enhanced healing in osteochondrosis treatment</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Stem Cell Therapy</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pain Reduction</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Significant decrease in joint pain</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Reduced need for pain medication</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Improved Joint Function</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Better range of motion</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Increased mobility and flexibility</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tissue Disease Modification</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Potential to slow disease progression</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Regeneration of damaged tissue</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Minimally Invasive Procedure</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Quick recovery time</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Low risk of complications</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Treatment Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Initial Assessment</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Comprehensive evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Medical history review</span>
                  </li>
                </ul>
              </div>

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

              <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Treatment</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Syringe className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Stem cell administration</span>
                  </li>
                  <li className="flex items-start">
                    <Syringe className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Monitoring during procedure</span>
                  </li>
                </ul>
              </div>

              <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Follow-up</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Progress monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Adjustments as needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* <section className="py-12">
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg overflow-hidden">
              <div className="px-6 py-12 md:p-12">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">Get a free online consultation</h2>
                  <p className="text-teal-50 mb-8">
                    Let our stem cell experts guide you through the process and answer all your questions about treatment options.
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