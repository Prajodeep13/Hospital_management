"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Brain, Activity, ShieldCheck, Microscope, Syringe, Dna, Pill, FlaskRound as Flask, Heart, AlertCircle } from 'lucide-react';

export default function LiverCirrhosisPage() {
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
                Stem Cell Therapy and Liver Cirrhosis
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Discover how stem cell therapy offers new possibilities for managing and treating liver cirrhosis
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
               
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Condition Overview – Stem Cell Therapy and Liver Cirrhosis</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Liver cirrhosis is a chronic liver disease characterized by scarring (fibrosis) of liver tissue, leading to impaired liver function. 
                As healthy liver tissue is replaced by scar tissue, the liver's ability to process nutrients, filter toxins, and perform other vital 
                functions becomes compromised.
              </p>
              <p>
                While traditional treatments focus on managing symptoms and preventing further damage, stem cell therapy represents an innovative 
                approach that may help regenerate damaged liver tissue and improve liver function. This cutting-edge treatment aims to harness 
                the body's natural healing mechanisms to potentially reverse some of the damage caused by cirrhosis.
              </p>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Causes of Liver Cirrhosis</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-teal-50/30 rounded-lg p-6">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <AlertCircle className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Alcohol-Related</h3>
                <p className="text-sm text-gray-700">
                  Long-term excessive alcohol consumption leading to liver damage
                </p>
              </div>
              
              <div className="bg-teal-50/30 rounded-lg p-6">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Dna className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Viral Hepatitis</h3>
                <p className="text-sm text-gray-700">
                  Chronic viral infections, particularly hepatitis B and C
                </p>
              </div>
              
              <div className="bg-teal-50/30 rounded-lg p-6">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Nonalcoholic Steatohepatitis</h3>
                <p className="text-sm text-gray-700">
                  Liver inflammation and damage due to fat accumulation
                </p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Less Common Causes of Cirrhosis include:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Dna className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Genetic Disorders</h3>
                <p className="text-gray-700">
                  Inherited conditions affecting liver function and metabolism
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Pill className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Drug-Induced</h3>
                <p className="text-gray-700">
                  Prolonged exposure to certain medications or toxins
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Autoimmune disorders</h3>
                <p className="text-gray-700">
                  Immune system attacking liver cells
                </p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Risk Factors for Liver Cirrhosis</h2>
            <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Heavy alcohol consumption</span>
                </li>
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Obesity and type 2 diabetes</span>
                </li>
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Exposure to certain chemicals or toxins</span>
                </li>
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Family history of liver disease</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Have a history of heavy alcohol use?</h2>
            <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
              <p className="text-gray-700">
                If you have a history of heavy alcohol use, you may be at high risk for developing cirrhosis. Early intervention and 
                treatment can help prevent further liver damage. Our specialists can help assess your condition and develop an 
                appropriate treatment plan.
              </p>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Have a chronic viral hepatitis infection?</h2>
            <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
              <p className="text-gray-700">
                Chronic viral hepatitis infections, particularly hepatitis B and C, can lead to cirrhosis if left untreated. Our team can 
                help manage your condition and explore treatment options to prevent or slow the progression of liver damage.
              </p>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Have a Metabolic syndrome?</h2>
            <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
              <p className="text-gray-700">
                Metabolic syndrome, which includes obesity and type 2 diabetes, can increase your risk of developing nonalcoholic fatty 
                liver disease and cirrhosis. Our comprehensive treatment approach addresses both liver health and underlying metabolic conditions.
              </p>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Risks Associated with Cirrhosis treatment using stem cell therapy</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Pill className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Pain</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Flask className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Fever</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Infection</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Complications</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <AlertCircle className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Other Risks</p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Step by step process for stem cell therapy</h2>
            <div className="space-y-6">
              <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Extraction</h3>
                <p className="text-gray-700">
                  The first step involves extracting stem cells from the patient's own bone marrow or adipose tissue.
                </p>
              </div>

              <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Processing</h3>
                <p className="text-gray-700">
                  The extracted cells are processed and purified in a specialized laboratory to isolate the desired stem cells.
                </p>
              </div>

              <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Administration</h3>
                <p className="text-gray-700">
                  The processed stem cells are then administered back into the patient through various methods, depending on the specific condition.
                </p>
              </div>

              <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Monitoring</h3>
                <p className="text-gray-700">
                  After treatment, patients are monitored closely to track their progress and manage any potential side effects.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Stem Cell Treatment</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Dna className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Autologous</h3>
                <p className="text-gray-700">
                  Using patient's own stem cells
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Flask className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mesenchymal</h3>
                <p className="text-gray-700">
                  Specialized adult stem cells
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hepatic stem cells</h3>
                <p className="text-gray-700">
                  Liver-specific stem cells
                </p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Concluding Remarks</h2>
            <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                Stem cell therapy represents a promising treatment option for liver cirrhosis, offering potential benefits such as:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Potential regeneration of damaged liver tissue</span>
                </li>
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Improved liver function</span>
                </li>
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Reduced inflammation and scarring</span>
                </li>
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Better quality of life</span>
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
                    Let our stem cell experts guide you through the process and answer all your questions about liver cirrhosis treatment options.
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