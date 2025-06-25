export default function SafetyProtocols() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety Protocols Followed</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Pre-Treatment Safety</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <div className="bg-teal-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Comprehensive screening process</p>
                <p className="text-sm mt-1">Each patient undergoes thorough medical evaluations to determine suitability for stem cell therapy</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-teal-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Rigorous stem cell quality control</p>
                <p className="text-sm mt-1">All stem cell products undergo extensive testing for sterility, viability, and safety</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-teal-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Personalized risk assessment</p>
                <p className="text-sm mt-1">Individual evaluation of potential risks and benefits for each patient</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">During & Post-Treatment Monitoring</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <div className="bg-teal-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Real-time vital sign monitoring</p>
                <p className="text-sm mt-1">Continuous monitoring during treatment administration</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-teal-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Medical staff always present</p>
                <p className="text-sm mt-1">Experienced healthcare professionals oversee all treatments</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-teal-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Structured follow-up schedule</p>
                <p className="text-sm mt-1">Regular assessments at 1, 3, 6, and 12 months post-treatment</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 bg-teal-50 border border-teal-100 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Safety Record</h3>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <p className="text-gray-700 mb-4">
              Our center maintains rigorous safety standards in line with international best practices:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>FDA-compliant protocols for all treatments</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Strict adherence to Good Manufacturing Practices (GMP)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Comprehensive adverse event reporting system</span>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Safety Statistics:</span>
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between">
                  <span>Mild adverse reactions:</span>
                  <span className="font-medium">&lt;3%</span>
                </li>
                <li className="flex justify-between">
                  <span>Moderate adverse reactions:</span>
                  <span className="font-medium">&lt;1%</span>
                </li>
                <li className="flex justify-between">
                  <span>Serious adverse reactions:</span>
                  <span className="font-medium">&lt;0.1%</span>
                </li>
                <li className="flex justify-between">
                  <span>Patient satisfaction rate:</span>
                  <span className="font-medium">98%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}