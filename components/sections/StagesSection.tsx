export default function StagesSection() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Stages / Severity Levels (As per DSM-5)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-teal-50 rounded-lg p-6">
          <div className="bg-teal-100 text-teal-800 text-center py-2 px-4 rounded mb-4 font-medium">Level 1</div>
          <h3 className="text-lg font-medium text-gray-900 mb-3 text-center">Requiring Support</h3>
          <p className="text-sm text-gray-700">
            Without support, social communication deficits cause noticeable impairments. Difficulty initiating social interactions and clear examples of atypical responses to social overtures. May appear to have decreased interest in social interactions.
          </p>
        </div>
        
        <div className="bg-teal-50 rounded-lg p-6">
          <div className="bg-teal-200 text-teal-800 text-center py-2 px-4 rounded mb-4 font-medium">Level 2</div>
          <h3 className="text-lg font-medium text-gray-900 mb-3 text-center">Requiring Substantial Support</h3>
          <p className="text-sm text-gray-700">
            Marked deficits in verbal and nonverbal social communication skills. Social impairments apparent even with supports in place. Limited initiation of social interactions and reduced or abnormal responses to social overtures from others.
          </p>
        </div>
        
        <div className="bg-teal-50 rounded-lg p-6">
          <div className="bg-teal-300 text-teal-800 text-center py-2 px-4 rounded mb-4 font-medium">Level 3</div>
          <h3 className="text-lg font-medium text-gray-900 mb-3 text-center">Requiring Very Substantial Support</h3>
          <p className="text-sm text-gray-700">
            Severe deficits in verbal and nonverbal social communication skills cause severe impairments in functioning. Very limited initiation of social interactions and minimal response to social overtures from others.
          </p>
        </div>
      </div>
    </section>
  );
}