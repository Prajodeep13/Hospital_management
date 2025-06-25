"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Brain, Activity, ShieldCheck, Microscope, Syringe, Heart, Clock, Zap } from 'lucide-react';

export default function AntiAgingPage() {
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
                Stem Cell Therapy: Anti-Aging and Health
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Discover how stem cell therapy can help rejuvenate your body, enhance vitality, and support your quest for optimal health
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Condition Overview – Stem Cell Therapy in Anti-aging & Health</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                As we age, our body's natural regenerative capabilities decline, leading to various age-related changes and health concerns. 
                Stem cell therapy represents a cutting-edge approach to supporting the body's natural repair mechanisms and potentially 
                slowing or reversing certain aspects of aging.
              </p>
              <p>
                Through targeted treatments, stem cells can help rejuvenate tissues, enhance cellular function, and support overall 
                vitality. This innovative therapy aims to address both the visible and internal effects of aging.
              </p>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Factors affecting Aging</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Internal Factors</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-teal-50/30 rounded-lg p-6">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Clock className="h-6 w-6 text-teal-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Genetics</h4>
                    <p className="text-sm text-gray-700">
                      Inherited factors that influence how our bodies age and respond to environmental stressors
                    </p>
                  </div>
                  
                  <div className="bg-teal-50/30 rounded-lg p-6">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Activity className="h-6 w-6 text-teal-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Hormonal Changes</h4>
                    <p className="text-sm text-gray-700">
                      Natural decline in hormone production affecting various bodily functions
                    </p>
                  </div>
                  
                  <div className="bg-teal-50/30 rounded-lg p-6">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Brain className="h-6 w-6 text-teal-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Cellular Processes</h4>
                    <p className="text-sm text-gray-700">
                      Gradual decline in cell repair and regeneration capabilities
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">External Factors</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-teal-50/30 rounded-lg p-6">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-teal-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Lifestyle Choices</h4>
                    <p className="text-sm text-gray-700">
                      Impact of diet, exercise, sleep, and stress management
                    </p>
                  </div>
                  
                  <div className="bg-teal-50/30 rounded-lg p-6">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <ShieldCheck className="h-6 w-6 text-teal-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Environmental Factors</h4>
                    <p className="text-sm text-gray-700">
                      Exposure to UV radiation, pollution, and toxins
                    </p>
                  </div>
                  
                  <div className="bg-teal-50/30 rounded-lg p-6">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Heart className="h-6 w-6 text-teal-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Health Practices</h4>
                    <p className="text-sm text-gray-700">
                      Preventive care and medical management strategies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Here's a more detailed look at the link between stem cells and aging:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Stem Cell Decline and Tissue Regeneration</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Natural decrease in stem cell numbers with age</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Reduced ability to repair and regenerate tissues</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Impact on organ function and recovery</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Mechanisms of Stem Cell Aging</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>DNA damage accumulation</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Telomere shortening</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Changes in gene expression patterns</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Impact on Health and Disease</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Increased susceptibility to age-related diseases</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Slower healing and recovery</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Compromised immune function</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Stem Cell Theory of Aging</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Role of stem cell exhaustion in aging</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Connection to tissue homeostasis</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Potential for therapeutic intervention</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Potential Interventions</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Stem cell therapy to restore declining populations</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Targeting mechanisms of stem cell aging</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Supporting endogenous stem cell function</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How stem cell therapy may assist with aging and health:</h2>
            
            <div className="space-y-8">
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tissue Regeneration</h3>
                <p className="text-gray-700">
                  Stem cells can help regenerate damaged or aging tissues throughout the body, potentially improving organ function 
                  and overall health. This regenerative capacity may help address various age-related conditions and support 
                  better healing.
                </p>
              </div>

              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Promoting Tissue Repair and Regeneration</h3>
                <p className="text-gray-700">
                  Through their unique ability to differentiate into various cell types, stem cells can help repair damaged tissues 
                  and support the body's natural healing processes. This may help maintain better health and function as we age.
                </p>
              </div>

              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enhancing Cell Health and Function</h3>
                <p className="text-gray-700">
                  Stem cell therapy may help improve cellular health and function by providing growth factors and other beneficial 
                  compounds that support tissue repair and regeneration.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Potential Benefits in Specific Conditions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Skin Health</h3>
                <p className="text-gray-700">
                  May improve skin texture, elasticity, and appearance while supporting natural collagen production
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cognitive Function</h3>
                <p className="text-gray-700">
                  Potential support for memory, focus, and overall cognitive performance
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Energy & Vitality</h3>
                <p className="text-gray-700">
                  May enhance energy levels, physical performance, and overall vitality
                </p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Stem Cell Therapy for Anti-Aging and Health Cost</h2>
            <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                The cost of stem cell therapy for anti-aging and health optimization varies based on several factors:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Type and number of treatments required</span>
                </li>
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Specific areas or conditions being treated</span>
                </li>
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Comprehensive treatment plan requirements</span>
                </li>
              </ul>
              <p className="mt-4 text-gray-700">
                Contact us for a personalized consultation and detailed cost breakdown based on your specific needs and goals.
              </p>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Stem Cell Research for Anti-Aging and Health</h2>
            <div className="bg-teal-50 border border-teal-100 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                Ongoing research continues to reveal promising applications of stem cell therapy in anti-aging and health optimization:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Studies showing potential benefits for tissue regeneration</span>
                </li>
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Evidence of improved cellular function and vitality</span>
                </li>
                <li className="flex items-start">
                  <Activity className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Promising results in various age-related conditions</span>
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
                    Let our stem cell experts guide you through the process and answer all your questions about anti-aging treatment options.
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