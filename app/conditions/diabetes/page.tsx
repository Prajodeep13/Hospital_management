"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { Activity, Droplet, Heart, Scale, Apple, Clock, Coffee, Utensils, Dumbbell, Microscope, Syringe } from 'lucide-react';

export default function DiabetesPage() {
  return (
    <div className="flex flex-col min-h-screen">
 
      <main className="flex-grow">
        <div className="relative bg-gray-100 overflow-hidden">
          <div 
            className="absolute inset-0 z-0" 
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.3
            }}
          />
          
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Diabetes Type Two
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Discover how stem cell therapy offers new possibilities for managing Type 2 Diabetes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
               
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Condition Overview – Diabetes Type 2</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Type 2 diabetes is a chronic metabolic disorder characterized by high blood sugar levels due to the body's 
                ineffective use of insulin or insufficient insulin production. This condition affects millions worldwide and 
                can lead to serious health complications if not properly managed.
              </p>
              <p>
                While traditional treatments focus on medication and lifestyle changes, stem cell therapy represents an 
                innovative approach that may help improve insulin production and sensitivity, potentially offering a more 
                comprehensive solution for managing type 2 diabetes.
              </p>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Symptoms of Diabetes Type 2</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Droplet className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Increased Thirst</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Frequent Urination</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Scale className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Weight Changes</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Fatigue</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Slow Healing</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Blurred Vision</p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Daily Challenges of Managing Type 2 Diabetes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-teal-50/30 rounded-lg p-6">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Blood Sugar Monitoring</h3>
                <p className="text-gray-700">
                  Regular checking and tracking of blood glucose levels throughout the day
                </p>
              </div>
              
              <div className="bg-teal-50/30 rounded-lg p-6">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Apple className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Dietary Management</h3>
                <p className="text-gray-700">
                  Careful planning and timing of meals to maintain stable blood sugar
                </p>
              </div>
              
              <div className="bg-teal-50/30 rounded-lg p-6">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Medication Adherence</h3>
                <p className="text-gray-700">
                  Taking prescribed medications consistently and on schedule
                </p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Causes of Type 2 Diabetes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Health Resistance</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Body's cells become resistant to insulin</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Pancreas can't produce enough insulin</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lifestyle & Body Fat</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Excess weight, especially around abdomen</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Lack of physical activity</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Unhealthy Diet</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>High intake of processed foods</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Excessive sugar consumption</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Age (45+)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Risk increases with age</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Changes in metabolism</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Stem Cell Therapy Works for Type 2 Diabetes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-teal-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-white rounded-full p-2 mr-4">
                    <Microscope className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Beta Cell Regeneration</h3>
                </div>
                <p className="text-gray-700">
                  Stem cells may help regenerate insulin-producing beta cells in the pancreas, potentially improving 
                  the body's ability to produce insulin naturally.
                </p>
              </div>

              <div className="bg-teal-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-white rounded-full p-2 mr-4">
                    <Activity className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Insulin Sensitivity</h3>
                </div>
                <p className="text-gray-700">
                  Treatment may help improve the body's sensitivity to insulin, making it more effective at 
                  regulating blood sugar levels.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Actual Results: What Are Patients Saying?</h2>
            <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Improved blood sugar control</span>
                </li>
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Reduced medication requirements</span>
                </li>
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Better energy levels and overall wellbeing</span>
                </li>
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Improved wound healing and circulation</span>
                </li>
              </ul>
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
                    <td className="py-4 px-4">Controls blood sugar through drugs</td>
                    <td className="py-4 px-4">Immediate symptom management</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 bg-teal-50">Lifestyle Changes</td>
                    <td className="py-4 px-4">Diet and exercise modifications</td>
                    <td className="py-4 px-4">Long-term health benefits</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 bg-teal-100">Stem Cell Therapy</td>
                    <td className="py-4 px-4">Cellular regeneration and repair</td>
                    <td className="py-4 px-4">Potential disease modification</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Stem Cell Therapy for Diabetes Type 2</h2>
            <div className="space-y-6">
              <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Pre-Treatment Tests & Consultation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Comprehensive medical evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Blood sugar level assessment</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Treatment planning</span>
                  </li>
                </ul>
              </div>

              <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Stem Cell Source</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Microscope className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Selection of appropriate stem cell type</span>
                  </li>
                  <li className="flex items-start">
                    <Microscope className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Processing and preparation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Treatment Procedure</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Syringe className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Administration of stem cells</span>
                  </li>
                  <li className="flex items-start">
                    <Syringe className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Monitoring during procedure</span>
                  </li>
                </ul>
              </div>

              <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Duration & Healing Step</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Treatment typically takes 2-3 hours</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Minimal recovery time needed</span>
                  </li>
                </ul>
              </div>

              <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Post Treatment Care & Lifestyle Guidance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Regular monitoring of blood sugar levels</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Dietary and lifestyle recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Follow-up appointments</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Stem Cell Therapy for Diabetes Type 2 Cost</h2>
            <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                The cost of stem cell therapy for Type 2 Diabetes varies based on several factors:
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
                  <span>Post-treatment care and monitoring</span>
                </li>
              </ul>
              <p className="mt-4 text-gray-700">
                Contact us for a detailed cost breakdown based on your specific condition and treatment requirements.
              </p>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">A Glimpse into the Future</h2>
            <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                Ongoing research continues to reveal promising developments in stem cell therapy for Type 2 Diabetes:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Advanced treatment protocols showing improved outcomes</span>
                </li>
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">New techniques for beta cell regeneration</span>
                </li>
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Potential for longer-lasting treatment effects</span>
                </li>
              </ul>
            </div>
          </section>

          {/* <section className="py-12">
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg overflow-hidden">
              <div className="px-6 py-12 md:p-12">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">Get a free online consultation</h2>
                  <p className="text-teal-50 mb-8">
                    Let our stem cell experts guide you through the process and answer all your questions about diabetes treatment options.
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